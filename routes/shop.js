const express = require("express");
const path = require("path");
const adminData = require("./admin");
const shopController = require("../controllers/shopController");

const router = express.Router();

router.get("/", shopController.getProductList);

router.get("/cart", shopController.shoppingCart);

module.exports = router;
