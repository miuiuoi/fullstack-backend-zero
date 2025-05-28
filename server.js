const { createServer } = require("node:http");// Importing the createServer function from the http module

const hostname = "127.0.0.1"; //localhost
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World from Node.js!\n");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});// This will create a simple HTTP server that listens on port 3000 and responds with "Hello World from Node.js!" when accessed.
