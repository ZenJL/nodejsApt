// lecture 1
// import nodejs === keyword 'require'
const http = require("http");
const route = require("./route");

// method createServer
const server = http.createServer((req, res) => {
  route(req, res);
});

server.listen(3001);
