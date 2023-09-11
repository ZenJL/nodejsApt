// lecture 1
// import nodejs === keyword 'require'
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notfoundRoutes = require("./routes/notfound");

const app = express();

// Handle logic req, res
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use(shopRoutes);

app.use(notfoundRoutes);

app.listen(3001);
