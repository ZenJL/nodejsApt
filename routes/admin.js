const express = require("express");
const path = require("path");
const productController = require("../controllers/product-controller");

const router = express.Router();

router.get("/add-product", productController.showAddProductForm);
router.post("/add-product", productController.insertNewProduct);

router.get("/list-product", productController.listProduct);
router.get("/edit-product/:productId", productController.showEditProductForm);
router.post("/edit-product", productController.updateProduct);
router.post("/delete-product", productController.deleteProduct);

// module.exports = router;
module.exports.routes = router;
