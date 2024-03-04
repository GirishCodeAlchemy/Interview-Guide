try {
    // Code that may throw an error
    throw new Error('An error occurred');
} catch (error) {
    // Handling the error
    console.error('Error:', error.message);
}

const customError = new Error('Custom error message');
console.error(customError.message); // Output: Custom error message
console.error(customError.name); // Output: Error
console.error(customError.stack); // Output: Error: Custom error message at <stack trace>


// ********** Error first callback ***********
function readFile(callback) {
    // Simulating an asynchronous file read operation
    const error = null; // No error
    const data = 'File content';
    callback(error, data); // Error-first callback
}

// Usage of the error-first callback function
readFile((error, data) => {
    if (error) {
        console.error('Error reading file:', error);
    } else {
        console.log('File content:', data);
    }
});
