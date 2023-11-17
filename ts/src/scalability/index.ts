// Scalability
import * as http from 'http';

const PORT = 4001;

// Simple HTTP server
const server = http.createServer((req, res) => {
    // Asynchronous operation (e.g., reading from a database)
    setTimeout(() => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, Microservices!\n');
    }, 1000); // Simulating a delay
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

export default server