const getDb = require("../utils/mongodb").getDB;
const mongodb = require("mongodb");

class User {
  constructor(_id, username, email, cart) {
    this.name = username;
    this.email = email;
    this._id = _id;
    this.cart = cart;
  }

  static findUserById(userId) {
    const db = getDb();
    return db
      .collection("usersL") /// collection ("nameCollectionOnDB")
      .find({ _id: new mongodb.ObjectId(userId) })
      .next()
      .then((user) => user)
      .catch((err) => console.log(err));
  }

  addToCart(product) {
    const db = getDb();
    const updatedCart = { items: [{ ...product, quantity: 1 }] };
    console.log(updatedCart);

    return db
      .collection("usersL")
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }
}

module.exports = User;
