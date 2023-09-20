const express = require("express");
const path = require("path");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/add-product", productController.showAddProductForm);
router.post("/add-product", productController.insertNewProduct);

router.get("/list-product", productController.listProduct);
router.get("/edit-product:productId", productController.showEditProductForm);
router.post("/edit-product", productController.updateProduct);

// module.exports = router;
module.exports.routes = router;
