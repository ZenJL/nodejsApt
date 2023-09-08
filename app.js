// lecture 1
// import nodejs === keyword 'require'
const http = require("http");
const route = require("./route");
const express = require("express");

const app = express();

// // method createServer
// const server = http.createServer((req, res) => {
//   route(req, res);
// });

// Handle logic req, res
app.use((req, res, next) => {});

const server = http.createServer(app);

server.listen(3001);
