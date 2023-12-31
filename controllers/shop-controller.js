// show for customer
const Product = require("../models/product");

exports.getProductList = (req, res, next) => {
  // const products = Product.fetchAll();

  // res.render(
  //   "shop/productList", // shop = shop.ejs
  //   {
  //     pageTitle: "Shop",
  //     products: products,
  //     path: "/",
  //   }
  // );

  Product.findAll()
    .then((result) => {
      res.render("shop/product-list", {
        pageTitle: "Shop",
        products: result,
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

// exports.shoppingCart = (req, res, next) => {
//   res.render(
//     "shop/cart", // shop = shop.ejs
//     {
//       pageTitle: "Cart",
//       // products: products,
//     }
//   );
// };

exports.addItemToCart = (req, res, next) => {
  const productId = req.body.productId;
  Product.findById(productId)
    .then((product) => req.user.addToCart(product))
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};
