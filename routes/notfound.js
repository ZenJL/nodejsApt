const express = require("express");
const exceptionController = require("../controllers/exceptionController");

const router = express.Router();

router.use(exceptionController.notFound404);

module.exports = router;
