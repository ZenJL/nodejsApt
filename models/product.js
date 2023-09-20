const products = [];

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    this.id = Math.random();
    products.push(this); // push into products = [] as above
  }

  static fetchAll() {
    return products;
  } // get products from this method not direct from products above

  static findById(id) {
    return products.find((product) => product.id === id);
  }
};
