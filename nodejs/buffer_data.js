// Create a buffer from a string
const buf1 = Buffer.from("Hello, world!", "utf8");
console.log(buf1.toString("utf8")); // Convert buffer to string

// Create an empty buffer of a specific size
const buf2 = Buffer.alloc(10); // Creates a buffer of 10 bytes filled with zeros
buf2.write("Node.js", "utf8"); // Write string to buffer
console.log(buf2.toString("utf8")); // Node.js

// Create an uninitialized buffer of a specific size (unsafe)
const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.concat([buf1, buf2]); // Concatenate buffers
console.log(buf4.toString("utf8")); // Hello, world!Node.js
// Slicing buffers
const slice = buf4.slice(0, 5); // Extract a slice of buffer
console.log(slice.toString("utf8")); // Hello