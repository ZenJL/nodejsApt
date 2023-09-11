const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Submit</button></form>"
  );
});

router.post("/product", (req, res, next) => {
  console.log(`app.js: line 23 🐱‍🚀❄🐱‍🏍 req ===>`, req.body.title);
  res.redirect("/");
});

module.exports = router;
