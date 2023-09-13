const express = require("express");
const path = require("path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send("<h1>Homepage</h1>");

  // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  console.log(`shop.js: line 11 🚀💫❄️🐱 adminData ===>`, adminData.products);

  res.render("shop", { pageTitle: "Shop" });
});

module.exports = router;
