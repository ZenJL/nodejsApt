const Product = require("../models/product");

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

  // Insert DB
  Product.create({
    title,
    price,
    imageUrl,
    description,
  }).then(() => {
    res.redirect("/admin/list-product");
  });
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

  Product.findAll()
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

  // let editProduct = Product.findById(proId);

  // res.render("admin/editProduct", {
  //   pageTitle: "edit product",
  //   // path: "/admin/add-product",
  //   product: editProduct,
  // });

  Product.findByPk(proId).then((result) => {
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

  const id = Number(req.body.productId);
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(id, title, imageUrl, description, price);

  // products.push({  // not using 'products' directly, instead create new instance product and call method save()
  //   title: req.body.title,
  // });
  // product.save();

  // res.redirect("/admin/list-product");

  Product.update(
    {
      title,
      price,
      imageUrl,
      description,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => res.redirect("/admin/list-product"))
    .catch((error) => console.log(error));
};

exports.deleteProduct = (req, res, next) => {
  // Product.delete(req.body.productId);
  // res.redirect("/admin/list-product");

  Product.findByPk(+req.body.productId)
    .then((product) => {
      return product.destroy();
    })
    .then(res.redirect("/admin/list-product"));
};
