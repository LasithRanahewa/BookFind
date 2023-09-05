// import modules
const express = require("express");
const router = express.Router();

// import functions from authController
const {
    registerUser,
    loginLocalUser,
    loginGoogleUser,
    redirectGoogleUser,
    loginFacebookUser,
    redirectFacebookUser,
    logoutUser
} = require("../controllers/authController");

// router.get("/register", (req, res) => res.render("/register"));

router.post("/register", (req, res) => registerUser(req, res));

// router.get("/login", (req, res) => res.render("/login"));

router.post("/login", (req, res, next) => loginLocalUser(req, res, next));

router.get("/auth/google", (req, res) => loginGoogleUser(req, res));

router.get("/auth/google/bookfind", (req, res) => redirectGoogleUser(req, res));

router.get("/auth/facebook", (req, res) => loginFacebookUser(req, res));

router.get("/auth/facebook/bookfind", (req, res) => redirectFacebookUser(req, res));

router.get("/logout", (req, res, next) => logoutUser(req, res, next));

module.exports = router;