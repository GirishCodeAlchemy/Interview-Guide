//  ***** Using Synchronous Versions of Functions

const fs = require('fs');

// Synchronous file read
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

//  ***** Using Promises and Async/Await:

const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('file.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFile();


//  ***** Using Callbacks in a Sequential Manner:

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});


//  ***** Using Synchronous Control Flow Libraries:

const Sync = require('sync');

Sync(function () {
    const data = fs.readFileSync.sync(null, 'file.txt', 'utf8');
    console.log(data);
});

