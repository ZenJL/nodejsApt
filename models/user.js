const getDb = require("../utils/mongodb").getDB;
const mongodb = require("mongodb");

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
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
}

module.exports = User;
