const express = require("express");
const router = express.Router();
const controllers = require("../controllers/authController");

router.get("/register", controllers.register_get);
router.get("/login", controllers.login_get);

router.post("/register", controllers.register_post);
router.post("/login", controllers.login_post);

router.get("/logout", controllers.logout_get);

module.exports = router;
