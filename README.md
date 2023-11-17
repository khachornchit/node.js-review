# Node.js Review

Node.js is well-suited for building microservices due to its non-blocking, event-driven architecture" highlights the key
features of Node.js that make it a popular choice for building microservices

## None-block I/O

Node.js is designed to be non-blocking, meaning that it doesn't wait for I/O operations (such as file or network access)
to complete before moving on to the next task. Instead, it uses an event-driven, asynchronous model.

[In this example](js/non-blocking-io/index.js), the readFile function initiates a file read operation and registers a
callback to handle the result. Meanwhile, the script continues to execute other tasks without waiting for the file read
to complete.

## Event-Driven Architecture

Node.js uses an event-driven architecture where actions or occurrences (events) trigger the execution of associated
functions (event handlers). This allows for efficient handling of many concurrent operations.

[In this example](js/event-driven-architecture/index.js), the myEmitter object is an event emitter. It listens for the '
myEvent' event and triggers the associated event handler when the event is emitted. This event-driven approach is
beneficial for handling multiple, asynchronous operations concurrently.

## Scalability

Node.js is known for its ability to scale horizontally by handling a large number of concurrent connections with low
resource consumption. This is achieved through its non-blocking, event-driven model and the efficient use of a
single-threaded event loop.

Example: Consider a microservice handling multiple HTTP requests concurrently using a simple Node.js server.

[In this example](js/scalability/index.js), the server can handle multiple concurrent requests without the need for threads
or processes dedicated to each request. The asynchronous nature of Node.js allows it to efficiently manage a large
number of connections.

