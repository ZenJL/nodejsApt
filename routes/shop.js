const express = require("express");
const path = require("path");
const adminData = require("./admin");
const shopController = require("../controllers/shop-controller");

const router = express.Router();

router.get("/", shopController.getProductList);

router.post("/cart", shopController.addItemToCart);

module.exports = router;
