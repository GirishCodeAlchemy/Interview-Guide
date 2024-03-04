sails.log.info("KafkaService is starting");

var kafka = require('kafka-node');

//var sync = require('synchronize');

var Producer = kafka.Producer;
var KafkaClient = kafka.KafkaClient;

var kafkaBrokers = process.env.KAFKA_BROKERS_LIST;
if (kafkaBrokers == null) {
    kafkaBrokers = 'kafka:9092';
}
// sails.log.info('kafka-brokers=',kafkaBrokers);
require('events').EventEmitter.prototype._maxListeners = 100;


module.exports = {

    postMessage: async function (payloads, cb) {
        try {
            client = new KafkaClient({
                kafkaHost: kafkaBrokers
            });
            client.on('ready', function () {
                sails.log.info('Kafka client ready');
            });
            client.on('error', function (err) {
                sails.log.error('Kafka client error: ' + err);
            });
            producer = new Producer(client);
            producer.on('ready', async function () {
                sails.log.info("posting message to ", payloads[0]['topic']);
                await producer.send(payloads, function (err, data) {
                    if (err) {
                        sails.log.info("err sending " + err);
                        cb(err, null);
                    }
                    else {
                        sails.log.info('send: ' + JSON.stringify(data));
                        cb(null, data);
                    }
                });
            });
            // sails.log.info("message= ", payloads[0]['messages']);
            producer.on('error', function (err) {
                sails.log.error('producer error = ' + err);
                // cb(err);
            });
        } catch (kafkaPostMessageError) {
            sails.log.info("Unhandled exception error occured in kafka post message");
            cb(kafkaPostMessageError, null)
        }
    },
    // post alert, alertType is heartbeat or general alert
    postMessages: async function (objectType, jsonObjects, chunk, cb, logPrefix = "") {
        chunk = parseInt(chunk)
        if (process.env.DISABLE_KAFKA_SEND == "true") {
            return cb(null, null);
        }
        let msg_count = jsonObjects.length

        if (msg_count == 0) {
            sails.log.info(logPrefix, "KafkaService: Kafka Message is empty for posting on topic: " + String(objectType))
            return cb(null, "Kafka Message is empty for posting on topic: " + String(objectType))
        } else {
            sails.log.info(logPrefix, "KafkaService: Number of Kafka Messages to be posted on Topic :" + objectType + " count: " + msg_count)
            client = new KafkaClient({
                kafkaHost: kafkaBrokers,
                requestTimeout: 60000
            });
            var topicName = objectType.toLowerCase();
            // Refresh metadata required for the first message to go through
            // https://github.com/SOHU-Co/kafka-node/pull/378
            client.refreshMetadata([topicName], (err) => {
                if (err) {
                    sails.log.warn(logPrefix, 'KafkaService: Error refreshing kafka metadata', err);
                }
            });
            client.on('error', async function (err) {
                sails.log.error(logPrefix, 'KafkaService: client error: ' + err);
                return cb(err, null);
            });
            client.on('ready', async function () {
                sails.log.info(logPrefix, 'Kafka client ready');
            });
            producer = new Producer(client, {
                // Partitioner type (default = 0, random = 1, cyclic = 2, keyed = 3, custom = 4), default 0
                partitionerType: 2
            });
            await producer.on('ready', function () {
                // load and update metadata topic required for the first message to go through.
                // refresh metadata will not get always the latest partitions so all the messages are sent
                // to 0th partition due to wrong metadata info to avoid this load the latest metadata topic
                // and update the metadata topic using the load results before sending first message.

                client.loadMetadataForTopics([topicName], async function (error, topicMetadata) {
                    if (error) {
                        sails.log.warn(logPrefix, 'KafkaService: Error in loading kafka metadata', error);
                    } else {
                        // Update metadata of the topic
                        await client.updateMetadatas(topicMetadata);
                    }

                    sails.log.info(logPrefix, 'Kafka producer ready');
                    var index, jsonLength;
                    for (index = 0, jsonLength = jsonObjects.length; index < jsonLength; index += chunk) {
                        var tempArray = jsonObjects.slice(index, index + chunk);
                        var payloads = [];

                        tempArray.forEach(function (eachJson) {
                            payloads.push({
                                "topic": topicName,
                                "messages": [JSON.stringify(eachJson)]
                            })
                        });
                        try {
                            producer.send(payloads, function (err, data) {
                                if (err) {
                                    sails.log.error(logPrefix, "KafkaService: failed to post kafka message for Topic:", topicName, "error:", err);
                                    return cb(err, null);
                                } else {
                                    sails.log.info(logPrefix, 'KafkaService: Successfully posted kafka message ', data);
                                    return cb(null, data);
                                }
                            });
                        } catch (error) {
                            sails.log.error(logPrefix, "KafkaService: Producer send failed to post message:" + objectType +
                                " Failed with error: " + error);
                            return cb(error, null);
                        }
                    }
                });
            });
        }
    }
};