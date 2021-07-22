const express = require("express");
const router = express.Router();
const middleware = require("./middlewares")
const controllers= require("../controllers/controllers");

router.get("/", middleware.authUser, controllers.login );

module.exports = router;
