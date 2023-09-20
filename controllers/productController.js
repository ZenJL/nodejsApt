const Product = require("../models/product");

exports.showAddProductForm = (req, res, next) => {
  res.render("admin/addProduct", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.insertNewProduct = (req, res, next) => {
  const price = req.body.price;
  const description = req.body.description;

  // handle file upload
  const imageFile = req.file;
  if (!imageFile) {
    res.redirect("/admin/add-product");
    return;
  }

  const imageUrl = imageFile.path;

  const product = new Product(req.body.title, imageUrl, description, price);

  console.log(`productController.js: line 22 🚀💫❄️🐱 product ===>`, product);

  // products.push({  // not using 'products' directly, instead create new instance product and call method save()
  //   title: req.body.title,
  // });
  product.save();
  res.redirect("/");
};

exports.listProduct = (req, res, next) => {
  const products = Product.fetchAll();

  res.render("admin/listProduct", {
    pageTitle: "list product",
    path: "/admin/list-product",
    products,
  });
};

exports.showEditProductForm = (req, res, next) => {
  const productId = req.params.productId;

  const editProduct = Product.findById(productId);

  res.render("admin/editProduct", {
    pageTitle: "edit product",
    // path: "/admin/add-product",
    product: editProduct,
  });
};

exports.updateProduct = (req, res, next) => {
  res.redirect("admin/listProduct");
};
