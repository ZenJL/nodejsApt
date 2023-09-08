// lecture 1
// import nodejs === keyword 'require'
const http = require("http");
// const route = require("./route");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Handle logic req, res
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log("always run");
//   next();
// });

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Submit</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(`app.js: line 23 🐱‍🚀❄🐱‍🏍 req ===>`, req.body.title);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Homepage</h1>");
});

// const server = http.createServer(app);
// Express can run directly without createServer

// server.listen(3001);
app.listen(3001);
