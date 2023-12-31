// lecture 1
// import nodejs === keyword 'require'
// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const exceptionController = require("./controllers/exception-controller");
const multer = require("multer");
const sequelize = require("./utils/mysql");
const mongoConnect = require("./utils/mongodb").mongoConnect;
const User = require("./models/user");

const app = express();

// Handle logic req, res
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// multer
const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    // Date.now + math.random() => unique generate
    callback(null, file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
); // image here = name of input that upload image in form
// end multer

// === start use on browser ===
app.use(
  "/css",
  express.static(
    path.join(__dirname, "node_modules", "bootstrap", "dist", "css")
  )
);
app.use(
  "/js",
  express.static(
    path.join(__dirname, "node_modules", "bootstrap", "dist", "js")
  )
);
app.use("/images", express.static(path.join(__dirname, "images")));
// === e n d use on browser ===

app.set("view engine", "ejs");
app.set("views", "views"); // setting view (1), thu muc view (2)

// load user info before log into others route
app.use((req, res, next) => {
  // load user info
  User.findUserById("651428e9075ea6b62a1f2cec")
    .then((result) => {
      req.user = new User(result._id, result.name, result.email, result.cart);
      console.log(req.user);
      next();
    })
    .catch((err) => console.log(err));
});

// Prefix
app.use("/admin", adminRoutes.routes); //// url='/admin/add-product ;; /admin/product

app.use(shopRoutes);

// app.use((req, res, next) => {
//   res.status(404).send('Page not found');
// });

app.use(exceptionController.handle404);

// app.listen(3001);

// sequelize
//   .sync()
//   .then(() => {
//     app.listen(3001);
//   })
//   .catch((err) => console.log(err));

mongoConnect(() => {
  app.listen(3001);
});
