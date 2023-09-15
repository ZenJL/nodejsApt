const express = require("express");
const path = require("path");
const adminData = require("./admin");
const productController = require("../controller/productController");

const router = express.Router();

router.get("/", productController.getProductList);

module.exports = router;
