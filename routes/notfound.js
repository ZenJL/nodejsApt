const express = require("express");
const exceptionController = require("../controllers/exception-controller");

const router = express.Router();

router.use(exceptionController.notFound404);

module.exports = router;
