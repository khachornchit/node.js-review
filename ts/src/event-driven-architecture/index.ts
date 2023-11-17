// Even-Driven Architecture
import EventEmitter = require('events');

// Creating an event emitter
const myEmitter = new EventEmitter();

// Event handler for 'myEvent'
myEmitter.on('myEvent', (data) => {
    console.log('Event received:', data);
});

// Emitting the 'myEvent' event
myEmitter.emit('myEvent', 'Hello, Microservices!');
