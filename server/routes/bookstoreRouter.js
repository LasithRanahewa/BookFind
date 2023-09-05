// import modules
const express = require("express");
const router = express.Router();

// import functions from the controller
const {
    getBook
} = require("../controllers/bookstoreController");

router.post("/", (req, res) => getBook(req, res));

module.exports = router;