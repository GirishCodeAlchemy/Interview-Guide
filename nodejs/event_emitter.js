const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Define an event handler function
function eventHandler(message) {
    console.log('Event handler called with message:', message);
}

// Add the event handler to listen for the 'greet' event
myEmitter.on('greet', eventHandler);

// Emit the 'greet' event with a message
myEmitter.emit('greet', 'Hello, world!');

// Remove the event handler from listening for the 'greet' event
myEmitter.removeListener('greet', eventHandler);

// Emit the 'greet' event again
myEmitter.emit('greet', 'This message will not be handled');



// class MyEmitter extends EventEmitter { }
// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//     console.log('an event occurred!');
// });
// myEmitter.emit('event');
