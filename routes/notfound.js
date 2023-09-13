const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  // res.status(404).send("Page not found 404");

  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

module.exports = router;
