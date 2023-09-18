const Product = require("../models/product");

exports.showAddProductForm = (req, res, next) => {
  res.render("admin/addProduct", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.insertNewProduct = (req, res, next) => {
  const product = new Product(req.body.title);

  // products.push({  // not using 'products' directly, instead create new instance product and call method save()
  //   title: req.body.title,
  // });
  product.save();
  res.redirect("/");
};

exports.listProduct = (req, res, next) => {
  res.render("admin/listProduct", {
    pageTitle: "list product",
    path: "/admin/list-product",
  });
};

exports.showEditProductForm = (req, res, next) => {
  res.render("admin/editProduct", {
    pageTitle: "edit product",
    path: "/admin/add-product",
  });
};

exports.updateProduct = (req, res, next) => {
  res.redirect("admin/listProduct");
};
