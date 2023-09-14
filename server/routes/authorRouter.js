// import modules
const express = require("express");
const router = express.Router();

const {
    newAuthor,
	searchAuthor,
	getAuthor,
	getAllAuthors,
	deleteAuthors,
	updateAuthor
} = require("../controllers/authorController");

router.post("/new", (req, res) => newAuthor(req, res));

router.post("/search", (req, res) => searchAuthor(req, res));

router.post("/get", (req, res) => getAuthor(req, res));

router.get("/all", (req, res) => getAllAuthors(req, res));

router.post("/delete", (req, res) => deleteAuthors(req, res));

router.post("/update/:id", (req, res) => updateAuthor(req, res));

module.exports = router;