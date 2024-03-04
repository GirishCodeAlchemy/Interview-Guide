function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            const data = "Some data";
            // Resolve the promise with the fetched data
            resolve(data);
        }, 1000);
    });
}

// Usage
async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log("Data fetched:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchDataAsync();


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