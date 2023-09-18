// lecture 1
// import nodejs === keyword 'require'
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notfoundRoutes = require("./routes/notfound");
const path = require("path");
const exceptionController = require("./controllers/exceptionController");
const multer = require("multer");

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
// === e n d use on browser ===

app.set("view engine", "ejs");
app.set("views", "views"); // setting view (1), thu muc view (2)

// Prefix
app.use("/admin", adminRoutes.routes); //// url='/admin/add-product ;; /admin/product

app.use(shopRoutes);

// app.use((req, res, next) => {
//   res.status(404).send('Page not found');
// });

app.use(exceptionController.notFound404);

app.listen(3001);
