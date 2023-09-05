// import models
const Vendor = require("../models/vendor.js");
const Book = require("../models/book.js");

// get a specific book
const getBook = async(req, res) => {
	try {
		const { id } = req.body;
		await Vendor
			.find({ availableBooks: { $in: id } })
			.then((data) => res.send(data))
			.catch((e) => res.status(500).json({ error: "Internal server error" }));
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal server error" });
		}
};

module.exports = {
	getBook
};
