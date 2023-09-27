const Product = require("../models/product");
const mongodb = require("mongodb");

exports.showAddProductForm = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.insertNewProduct = (req, res, next) => {
  // handle file upload
  const imageFile = req.file;
  if (!imageFile) {
    res.redirect("/admin/add-product");
    return;
  }

  const imageUrl = imageFile.path;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;

  // const product = new Product(
  //   null,
  //   req.body.title,
  //   imageUrl,
  //   description,
  //   price
  // );

  // // products.push({  // not using 'products' directly, instead create new instance product and call method save()
  // //   title: req.body.title,
  // // });
  // product.save();
  // res.redirect("/admin/list-product");

  // Insert mongo
  const product = new Product(null, title, price, description, imageUrl);
  // save this to db
  product
    .save()
    .then(() => {
      res.redirect("/admin/list-product");
    })
    .catch((err) => console.log("product-controller insert: ", err));

  // // Insert DB
  // Product.create({
  //   title,
  //   price,
  //   imageUrl,
  //   description,
  // }).then(() => {
  //   res.redirect("/admin/list-product");
  // });
};

exports.listProduct = (req, res, next) => {
  // const products = Product.fetchAll();
  // res.render('admin/list-product', {
  //     pageTitle: 'list product',
  //     products,
  // });

  // Product.fetchAll()
  //   .then(([rows, fieldData]) => {
  //     res.render("admin/list-product", {
  //       pageTitle: "list product",
  //       products: rows,
  //     });
  //   })
  //   .catch((err) => console.log(err));

  Product.fetchAll()
    .then((result) => {
      res.render("admin/list-product", {
        pageTitle: "list product",
        products: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.showEditProductForm = (req, res, next) => {
  const proId = req.params.productId;

  Product.findById(proId).then((result) => {
    res.render("admin/edit-product", {
      pageTitle: "edit product",
      product: result,
    });
  });
};

exports.updateProduct = (req, res, next) => {
  // handle edit image
  let imageUrl = req.body.imageUrl;

  const imageFile = req.file;
  if (imageFile) {
    imageUrl = imageFile.path;
  }

  const id = req.body.productId;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(
    new mongodb.ObjectId(id),
    title,
    price,
    description,
    imageUrl
  );

  // products.push({  // not using 'products' directly, instead create new instance product and call method save()
  //   title: req.body.title,
  // });
  // product.save();

  // res.redirect("/admin/list-product");

  product
    .save()
    .then(() => res.redirect("/admin/list-product"))
    .catch((error) => console.log(error));
};

exports.deleteProduct = (req, res, next) => {
  Product.deleteById(req.body.productId)
    .then(res.redirect("/admin/list-product"))
    .catch((err) => console.log(err));
};
