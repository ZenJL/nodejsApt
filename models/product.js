const getDb = require("../utils/mongodb").getDB;
const mongodb = require("mongodb");

class Product {
  constructor(_id, title, price, description, imageUrl) {
    this._id = _id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    if (this._id) {
      return db
        .collection("products")
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this })
        .then((res) => console.log(`res ins done ===>`, res))
        .catch((err) => console.log("insert err", err));
    } else {
      return db
        .collection("products")
        .insertOne(this)
        .then((res) => console.log(`res ins done ===>`, res))
        .catch((err) => console.log("insert err", err));
    }
  }

  static findAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(productId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(productId) })
      .next()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteById(productId) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectId(productId) })
      .then(() => console.log("deleted success"))
      .catch((err) => console.log(err));
  }
}

module.exports = Product;
