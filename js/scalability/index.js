const http = require('http');

// Simple HTTP server
const server = http.createServer((req, res) => {
    // Asynchronous operation (e.g., reading from a database)
    setTimeout(() => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, Microservices!\n');
    }, 1000); // Simulating a delay
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});