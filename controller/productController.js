const products = [];

exports.showAddProductForm = (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
};

exports.insertNewProduct = (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
};

exports.getProductList = (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop",
    products: products,
    path: "/",
  });
};
