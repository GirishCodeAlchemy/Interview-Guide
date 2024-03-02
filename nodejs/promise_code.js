function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., fetching data from a database or an API)
        setTimeout(() => {
            const data = "This is the fetched data";
            // Resolve the promise with the fetched data
            resolve(data);

            // If there's an error, you can reject the promise
            // reject(new Error("Failed to fetch data"));
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Using the fetchData function that returns a promise
fetchData()
    .then((data) => {
        console.log("Data fetched successfully:", data);
        // You can perform further operations with the fetched data here
    })
    .catch((error) => {
        console.error("Error fetching data:", error.message);
        // Handle errors if the promise gets rejected
    });