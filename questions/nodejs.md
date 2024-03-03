# Nodejs Questions

### 1. What is Node.js? Where can you use it?

Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.

Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. You can use I/O intensive web applications like video streaming sites. You can also use it for developing: Real-time web applications, Network applications, General-purpose applications, and Distributed systems.

### 2. How does Node.js work?

A web server using Node.js typically has a workflow that is quite similar to the diagram illustrated below. Let’s explore this flow of operations in detail.

![](https://www.simplilearn.com/ice9/free_resources_article_thumb/Node.js_Architecture_Workflow.png)

- Node.js retrieves the incoming requests and adds those to the Event Queue
- The requests are then passed one-by-one through the Event Loop. It checks if the requests are simple enough not to require any external resources
- The Event Loop processes simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients

A single thread from the Thread Pool is assigned to a single complex request. This thread is responsible for completing a particular blocking request by accessing external resources, such as computation, database, file system, etc.

Once the task is carried out completely, the response is sent to the Event Loop that sends that response back to the client.

### 3. Why is Node.js Single-threaded?

Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved instead of the typical thread-based implementation.

### 4. If Node.js is single-threaded, then how does it handle concurrency?

The Multi-Threaded Request/Response Stateless Model is not followed by the Node JS Platform, and it adheres to the Single-Threaded Event Loop Model. The Node JS Processing paradigm is heavily influenced by the JavaScript Event-based model and the JavaScript callback system. As a result, Node.js can easily manage more concurrent client requests. The event loop is the processing model's beating heart in Node.js.

### 5. Explain callback in Node.js.

A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking. Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.

<iframe src="../nodejs/callback_code.js" frameborder="0" width="100%" height="350"></iframe>

### 6. What are the advantages of using promises instead of callbacks?

- The control flow of asynchronous logic is more specified and structured.
- The coupling is low.
- It has built-in error handling.
- Improved readability.

  <iframe src="../nodejs/promise_code.js" frameborder="0" width="100%" height="400"></iframe>

### 7. How is Node.js most frequently used?

Node.js is widely used in the following applications:

- Real-time chats
- Internet of Things
- Complex SPAs (Single-Page Applications)
- Real-time collaboration tools
- Streaming applications
- Microservices architecture

### 8. What is the purpose of the module .Exports?

In Node.js, a module encapsulates all related codes into a single unit of code that can be parsed by moving all relevant functions into a single file. You may export a module with the module and export the function, which lets it be imported into another file with a needed keyword.

```javascript
const generateNewFucntionname = () => {
  console.log("Funciton is module now");
};
module.exports = { generateNewFucntionname };
```

### 9. What are the pros and cons of Node.js?

|                                            **Pros**                                            | **cons**                                                                      |
| :--------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------- |
|                            Fast processing and an event-based model                            | Not suitable for heavy computational tasks                                    |
|                    Uses JavaScript, which is well-known amongst developers                     | Using callback is complex since you end up with several nested callbacks      |
| Node Package Manager has over 50,000 packages that provide the functionality to an application | Dealing with relational databases is not a good option for Node.js            |
|          Best suited for streaming huge amounts of data and I/O intensive operations           | Since Node.js is single-threaded, CPU intensive tasks are not its strong suit |

### 10. What is an Event Loop in Node.js?

Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.

### 11. Differentiate between process.nextTick() and setImmediate()?

next Tick() postpones the execution of action until the next pass around the event loop, or it simply calls the callback function once the event loop's current execution is complete, whereas setImmediate() executes a callback on the next cycle of the event loop and returns control to the event loop for any I/O operations.

### 12. What is an EventEmitter in Node.js?

EventEmitter is a class that holds all the objects that can emit events
Whenever an object from the EventEmitter class throws an event, all attached functions are called upon synchronously

  <iframe src="../nodejs/event_emitter.js" frameborder="0" width="100%" height="400"></iframe>

### 13. What is the package.json file?

The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module

```bash
npm init
```

### 14. How would you use a URL module in Node.js?

The URL module in Node.js provides various utilities for URL resolution and parsing. It is a built-in module that helps split up the web address into a readable format.

  <iframe src="../nodejs/url_module.js" frameborder="0" width="100%" height="200"></iframe>

### 15. What is the Express.js package?

Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications

### 16. How do you create a simple Express.js application?

- The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
- The response object represents the HTTP response that an Express app sends when it receives an HTTP request

  <iframe src="../nodejs/simple_express.js" frameborder="0" width="100%" height="300"></iframe>

### 17. How do you create a simple server in Node.js that returns Hello World?

- Import the HTTP module
- Use createServer function with a callback function using request and response as parameters.
- Type “hello world."
- Set the server to listen to port 8080 and assign an IP address

  <iframe src="../nodejs/simple_server.js" frameborder="0" width="100%" height="300"></iframe>

### 18. What is REPL in Node.js?

REPL stands for Read Eval Print Loop, and it represents a computer environment. It’s similar to a Windows console or Unix/Linux shell in which a command is entered. Then, the system responds with an output

- Read - Reads user input parse the input into javascript data-tructure and stores in memory
- Eval - Takes and evaluates the data structure
- Print - Prints the result
- Loop - Loops the above command until user press `ctrl + c` twice

```
node
```

### 19. What is the control flow function?

control flow functions refer to mechanisms or patterns used to manage the flow of execution in asynchronous code. Since Node.js is heavily asynchronous, control flow functions are essential for handling asynchronous operations effectively.

- callbacks
<iframe src="../nodejs/callback_code.js" frameborder="0" width="100%" height="350"></iframe>
- Promises
<iframe src="../nodejs/promise_code.js" frameborder="0" width="100%" height="400"></iframe>
- Async/Await
<iframe src="../nodejs/async_await_code.js" frameborder="0" width="100%" height="350"></iframe>

### 20. What is the buffer class in Node.js?

Buffer class stores raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data

```javascript
const buf1 = Buffer.from("Hello, world!", "utf8");
console.log(buf1.toString("utf8")); // Convert buffer to string
```

```javascript
// Create an empty buffer of a specific size
const buf2 = Buffer.alloc(10); // Creates a buffer of 10 bytes filled with zeros
buf2.write("Node.js", "utf8"); // Write string to buffer
console.log(buf2.toString("utf8")); // Node.js
```

```javascript
// Create an uninitialized buffer of a specific size (unsafe)
const buf3 = Buffer.allocUnsafe(10);
```

```javascript
const buf4 = Buffer.concat([buf1, buf2]); // Concatenate buffers
console.log(buf4.toString("utf8")); // Hello, world!Node.js
// Slicing buffers
const slice = buf4.slice(0, 5); // Extract a slice of buffer
console.log(slice.toString("utf8")); // Hello
```

### 21. What is callback hell?

Callback hell, also known as the pyramid of doom, is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug
improper implementation of the asynchronous logic causes callback hell

### 22. List the various Node.js timing features

- **setTimeout():** The setTimeout() function is used to execute a callback function once after a specified delay (in milliseconds). It schedules the callback to be invoked after the specified delay.

```javascript
setTimeout(() => {
  console.log("This code will be executed after 2 seconds");
}, 2000);
```

- **setInterval():** The setInterval() function is used to repeatedly execute a callback function at a specified interval (in milliseconds). It schedules the callback to be invoked repeatedly, with the specified interval between each invocation.

```javascript
setInterval(() => {
  console.log("This code will be executed every 3 seconds");
}, 3000);
```

- **clearTimeout():** The clearTimeout() function is used to cancel a previously scheduled setTimeout() callback before it is executed. It takes the timeout ID returned by setTimeout() as its argument.

```javascript
const timeoutId = setTimeout(() => {
  console.log("This code will not be executed");
}, 2000);

clearTimeout(timeoutId); // Cancel the scheduled timeout
```

- **clearInterval():** The clearInterval() function is used to stop the execution of a previously scheduled setInterval() callback. It takes the interval ID returned by setInterval() as its argument.

```javascript
const intervalId = setInterval(() => {
  console.log("This code will not be executed repeatedly");
}, 3000);

clearInterval(intervalId); // Stop the interval execution
```

- **process.nextTick():** The process.nextTick() function is used to schedule a callback function to be invoked in the next iteration of the event loop, immediately after the current operation completes. It allows you to defer the execution of a callback until the current operation is complete.

```javascript
process.nextTick(() => {
  console.log(
    "This code will be executed in the next iteration of the event loop"
  );
});
```

### 23. What is a first-class function in Javascript?

First-class functions are a powerful feature of JavaScript that allows you to write more flexible and reusable code. In Node.js, first-class functions are used extensively in asynchronous programming to write non-blocking code.

- **Passing Functions as Arguments:**
  You can pass functions as arguments to other functions. This is commonly used in callback functions and higher-order functions.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

function executeCallback(callback) {
  callback("John");
}

executeCallback(greet); // Pass the greet function as an argument
```

- **Returning Functions from Functions:**
  You can return functions from other functions. This is useful for creating closures and factory functions.

```javascript
function createGreeter() {
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  return greet; // Return the greet function
}

const greeter = createGreeter();
greeter("Jane"); // Call the returned function
```

- **Assigning Functions to Variables:**
  You can assign functions to variables, allowing you to refer to them by their variable names.

```javascript
const sayHello = function (name) {
  console.log("Hello, " + name + "!");
};

sayHello("Alice"); // Call the function using the variable name
```

- **Storing Functions in Data Structures:**
  You can store functions in arrays, objects, or other data structures, just like any other value.

```javascript
const functions = {
  greet: function (name) {
    console.log("Hello, " + name + "!");
  },
};

functions.greet("Bob"); // Call the function stored in the object
```

### 24. What is a fork in node JS?

The Fork method in Node.js creates a new child process that runs a separate Node.js instance and can be useful for running CPU-intensive tasks or creating a cluster of Node.js servers.

[Back to top](#top)

[:arrow_up:](#top)
