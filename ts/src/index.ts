import server from "./scalability";

server.on('request', (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Hello! from node.js typescript.')
    }
})