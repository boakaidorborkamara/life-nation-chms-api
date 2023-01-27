const express = require("express");
const router = express.Router();

const indexController = require("../controller/indexController");



router.get('/', indexController.getAPIDocumentation);


module.exports = router;