// import modules
const express = require("express");
const router = express.Router();

// import functions from authController
const {
    registerUser,
    loginLocalUser,
    logoutUser
} = require("../controllers/authController");

router.get("/register", (req, res) => res.render("/register"));

router.post("/register", (req, res) => registerUser(req, res));
// router.post("/register", registerUser);

router.get("/login", (req, res) => res.render("/login"));

// router.post("/login", (req, res, next) => loginLocalUser(req, res, next));
router.post("/login", loginLocalUser);

router.post("/logout", (req, res, next) => logoutUser(req, res, next));

module.exports = router;