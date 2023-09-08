// lecture 1
// import nodejs === keyword 'require'
const http = require("http");
const route = require("./route");
const express = require("express");

const app = express();

// Handle logic req, res
// Middleware
app.use((req, res, next) => {
  console.log("always run");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("2222");
  res.send("<h1>Hello from Express</h1>");
});

app.use("/", (req, res, next) => {
  console.log("1111");
});

// const server = http.createServer(app);
// Express can run directly without createServer

// server.listen(3001);
app.listen(3001);
