// server.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Witaj w Node.js!</h1><p>Działa serwer</p>");
});

server.listen(3000, () => {
  console.log("Serwer dziala na http://localhost:3000");
});