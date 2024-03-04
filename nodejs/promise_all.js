// Function that returns a promise with simulated delay
function fetchData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data for ID ${id}`);
        }, Math.random() * 1000); // Simulating variable delay
    });
}

// Create an array of promises
const promises = [];
for (let i = 1; i <= 5; i++) {
    promises.push(fetchData(i));
}

// Use Promise.all to wait for all promises to complete
Promise.all(promises)
    .then((results) => {
        console.log('All promises completed successfully.');
        console.log('Results:', results);
    })
    .catch((error) => {
        console.error('One of the promises failed:', error);
    });