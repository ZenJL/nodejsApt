// truy xuat mongodb nhanh hon (nosql >< sql)

// define connection string
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// create connection pool
let _mongoConnectionPool;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://root:123456ab@nodejs.mjszyns.mongodb.net/c2202l_nodejs?retryWrites=true&w=majority"
  )
    .then((client) => {
      // client = res
      console.log("Connected");
      _mongoConnectionPool = client.db();
      callback();
    })
    .catch((err) => console.log("error connect", err));
};

const getDB = () => {
  if (_mongoConnectionPool) {
    return _mongoConnectionPool;
  }

  throw "No database found";
};

module.exports.mongoConnect = mongoConnect;
module.exports.getDB = getDB;
