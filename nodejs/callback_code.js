const fs = require('fs');

function readFileData(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log("****", err);
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}

readFileData('promise_code.jsf', (err, data) => {
    if (err) {
        console.log("===error :", err);
    } else {
        console.log(data);
    }
});