//...........nodejs.........Interview.......Questions...........//

/*
Nodejs is a javasccript runtime environment.

Nodejs uses the LiBuv library to provide a high performance event loop.

Nodejs is a single threaded language. => Here asynchronous tasks are handle by event loop. Where threads are created and destroyed. by Thread pool.

so the processing for the output of this threads is processed by single thread. or the main thread.

There are two types of threads in nodejs.
1. Event loop thread.
2. Worker thread.
Event loop thread is the thread which is responsible for the execution of the asynchronous tasks.
Worker thread is the thread which is responsible for the execution of the synchronous tasks.

........................................................................................................
What is the order in which control flow statements get executed in nodejs

1. Sequential execution: Statements are executed line by line in the order they appear.
2. Conditional execution: Execution of statements based on conditions (if, else, switch).
3. Loops execution: Iterative execution based on loops (for, while, do-while).
4. Jump statements: Statements that control the flow of the program (break, continue, return).
......................................................................................................

There are two types of Api in nodejs.
1. Non blocking api.
2. Blocking api.
Non blocking api is the api which is not dependent on the event loop thread.
Blocking api is the api which is dependent on the event loop thread.
.....................................................................................................

Modules in nodejs are files which are written in javascript.
Modules are used to break the code into small pieces.
Modules are used to share the code between the files.
Modules are used to reuse the code.

There are two types of modules in nodejs.
1. Common modules.
2. Local modules.
Common modules are the modules which are used by all the files.
Local modules are the modules which are used by the particular file.
..............................................................................................................................
Middlewares in nodejs are the functions which are used to handle the resquest and respnose.

order of execution of the middlewares is as follows.
1. Request handling.
2. Route matching.
3. Middleware execution.
4. Response generation.epl is a read-eval-print loop.

................................................................................................................................
REPL stands for Read-Eval-Print-Loop.
In Node.js, REPL is a built-in interactive environment that allows you to enter commands one at a time and see their output immediately. It evaluates these inputs, prints the result, and waits for the next input.
REPL is useful for testing small code snippets, experimenting with Node.js functionalities, debugging, and learning JavaScript and Node.js features interactively.
.....................................................................................................................................

Event-Driven in nodejs
A callback function ( called an event handler) is called when an event is triggered.
An event loop that listens for event triggers and calls the corresponding event handler for that event.
................................................................................................................................
buffer and streams in nodejs
Buffer is a global object that is used to create and manipulate binary data.
 Strems=> A stream is a sequence of data that can be read or written sequentially.
.............................important modules.....................
 spawn() and folk() in nodejs
 Both are used to create a child process.
 spawn() is used to create a child process and run a command.
 fork() is used to create a child process and keep it alive.

 Crypto modules in Nodejs.
 Crypto is a module that provides cryptographic functions and utilities.
 It is used to encrypt and decrypt data, generate random numbers, and perform various cryptographic operations.

 Timer modules in nodejs.
 
 Timers are used to schedule and manage asynchronous tasks.
 
 They are used to delay the execution of a function or code block for a specified amount of time.
 
 Timers are used to perform repetitive tasks or perform actions at regular intervals.
 
 Timers are used to perform time-based operations.

It has the following methods:
setTimeout() method
setImmediate() method
setInterval() method

basic Difference between setTimeout and setInterval and setImmediate and process.nextTick()
setTimeout is used to execute a function or code block after a specified delay.
setInterval is used to execute a function or code block repeatedly at a specified interval.
setImmediate is the execution of a function until the next iteration of the event loop, or more precisely, after the current poll phase of the event loop completes.

process.nextTick Defers the execution of a function until the next iteration of the event loop, or more precisely, before the next iteration of the event loop begins.

body-parser in Node.js
Body-parser is the Node.js body-parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it. It is an NPM module that processes data sent in HTTP requests.

Cors in Node.js
to handel same origin policy. for fetching data from different domain.
Cors is a Node.js middleware that enables Cross-Origin Resource Sharing (CORS) for your Node. And it is used to enable cross-origin requests.
Cors 

the tls module in Node.js
The tls module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols that are built on top of OpenSSL. It helps to establish a secure connection on the network.

 Multer is Used to handle multipart/form-data. 

Redis modules in nodejs
Redis is an Open Source store for storing data structures. It is used in multiple ways. It is used as a database, cache, and message broker. It can store data structures such as strings, hashes, sets, sorted sets, bitmaps, indexes, and streams. Redis is very useful for Node.js developers as it reduces the cache size which makes the application more efficient. However, it is very easy to integrate Redis with Node.js applications.

Child process in nodejs.
 a child process is a separate instance of the Node.js runtime that is created to execute tasks concurrently with the main Node.js process. This allows for parallel execution of code, which can be useful for tasks that are CPU-intensive or need to be run in isolation from the main application.

Tracing in Node.js refers to the ability to track the execution of your program, capturing detailed information about the operations that are performed. This can be incredibly useful for debugging, performance monitoring, and understanding the behavior of your application. Tracing allows you to gather data about function calls, execution time, memory usage, and more.


*/