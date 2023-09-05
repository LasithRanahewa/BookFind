const express = require("express");
const router = express.Router();

const {
    newBook,
	searchBook,
	getBook,
	getAllBooks,
	trendingBooks,
	deleteBooks
} = require("../controllers/bookController");

router.post("/new", (req, res) => newBook(req, res));

router.post("/search", (req, res) => searchBook(req, res));

router.get("/get", (req, res) => getBook(req, res));

router.get("/all", (req, res) => getAllBooks(req, res));

router.post("/trending", (req, res) => trendingBooks(req, res));

router.post("/delete", (req, res) => deleteBooks(req, res));

module.exports = router;