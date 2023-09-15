const express = require("express");
const path = require("path");
const productController = require("../controller/productController");

const router = express.Router();

router.get("/add-product", productController.showAddProductForm);

router.post("/add-product", productController.insertNewProduct);

// module.exports = router;
module.exports.routes = router;
