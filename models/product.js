const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this); // push into products = [] as above
  }

  static fetchAll() {
    return products;
  } // get products from this method not direct from products above
};
