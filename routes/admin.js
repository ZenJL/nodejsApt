const express = require("express");
const path = require("path");

const products = [];

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // res.send(
  //   "<form action='/admin/add-product' method='POST'><input type='text' name='title' /><button type='submit'>Add product</button></form>"
  // );

  // res.sendFile(path.join(__dirname, "..", "views", "addProduct.html"));

  res.render("addProduct", { pageTitle: "Add Product" });
});

router.post("/add-product", (req, res, next) => {
  console.log(`app.js: line 23 🐱‍🚀❄🐱‍🏍 req ===>`, req.body.title);
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
});

// module.exports = router;
module.exports.routes = router;
module.exports.products = products;
