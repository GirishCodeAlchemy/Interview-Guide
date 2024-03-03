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

<details>
  <summary>Click to view Sample Code</summary>
  <iframe src="../nodejs/callback_code.js" frameborder="0" width="100%" height="400"></iframe>
</details>

### 6. What are the advantages of using promises instead of callbacks?

- The control flow of asynchronous logic is more specified and structured.
- The coupling is low.
- It has built-in error handling.
- Improved readability.

<details>
  <summary>Click to view Sample Code</summary>
  <iframe src="../nodejs/promise_code.js" frameborder="0" width="100%" height="400"></iframe>
</details>

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

|                                              Pros                                              | cons                                                                          |
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

<details>
  <summary>Click to view Sample Code</summary>
  <iframe src="../nodejs/event_emitter.js" frameborder="0" width="100%" height="400"></iframe>
</details>

### 13. What is the package.json file?

The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module

```bash
npm init
```

### 14. How would you use a URL module in Node.js?

The URL module in Node.js provides various utilities for URL resolution and parsing. It is a built-in module that helps split up the web address into a readable format.

<details>
  <summary>Click to view Sample Code</summary>
  <iframe src="../nodejs/url_module.js" frameborder="0" width="100%" height="400"></iframe>
</details>

### 15. What is the Express.js package?

Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications

### 16. How do you create a simple Express.js application?

- The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
- The response object represents the HTTP response that an Express app sends when it receives an HTTP request

<details>
  <summary>Click to view Sample Code</summary>
  <iframe src="../nodejs/simple_express.js" frameborder="0" width="100%" height="400"></iframe>
</details>
