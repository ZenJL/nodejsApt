// let products = [];

const sequelize = require("../util/mysql");
const Sequelize = require("sequelize");

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.price = price;
//     this.description = description;
//   }

//   save() {
//     if (this.id) {
//       const findIndex = products.findIndex((product) => product.id == this.id);
//       const updatedProduct = [...products];
//       updatedProduct[findIndex] = { ...this };

//       products = updatedProduct;
//     } else {
//       this.id = Math.random();
//       products.push(this); // push into products = [] as above
//     }
//   }

//   static fetchAll() {
//     return products;
//   } // get products from this method not direct from products above

//   static findById(id) {
//     return products.find((product) => product.id == id);
//   }

//   static delete(id) {
//     const findIndex = products.find((product) => product.id === id);

//     if (findIndex !== -1) {
//       products.splice(findIndex, 1);
//     }
//   }
// };

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(13, 2),
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: Sequelize.STRING,
});

module.exports = Product;
