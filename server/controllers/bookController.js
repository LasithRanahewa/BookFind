// import book model
const Book = require("../models/book.js");
const Copy = require("../models/copy.js");

// new book
const newBook = async (req, res) => {
	console.log(req.body)
	try {
		const { name, author, publisher, description } = req.body;
		if (!name || !author || !publisher || !description) {
			return res.status(401).json({ error: "Incomplete book data" });
		}

		const newBook = new Book({ name, author, publisher, description });
		await newBook.save();
		// const newCopy = new Copy({ newBook._id, vendorId, quantity });
		// await newCopy.save();
		res.status(201).json({ message: "Book added successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// search a book
const searchBook = async (req, res) => {
	try {
		const { name } = req.body;
		const regex = new RegExp(name, "i");
		const books = await Book.find({ name: { $regex: regex } });
		res.json(books);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// get a book
const getBook = async (req, res) => {
	try {
		const { id } = req.body;
		const bookData = await Book.findById(id);

		if (!bookData) {
			return res.status(500).json({ error: "Internal server error" });
		}

		bookData.clicks = bookData.clicks + 1;
		await bookData.save();

		res.json(bookData);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

// get all books
const getAllBooks = async (req, res) => {
	try {
		const books = await Book.find();
		res.json(books);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// get trending book
const trendingBooks = async (req, res) => {
	try {
		const mostClickedBooks = await Book.find().sort({ clicks: -1 }).limit(4);
		res.send(mostClickedBooks);
	} catch (error) {
		res.send(error);
	}
};

// delete books
const deleteBooks = async (req, res) => {
	try {
		const idsToDelete = req.body.data; // Assuming you are passing an array of IDs as 'ids' in the request body
		// Check if the Book with the provided IDs exist
		for (const id of idsToDelete) {
			const bookToDelete = await Book.findById(id);
			if (!bookToDelete) {
				return res.status(404).send({
					data: `Book with ID ${id} not found`,
				});
			}
			await bookToDelete.deleteOne();
		}
		res.send({
			data: "Book deleted successfully",
		});
	} catch (e) {
		console.error(e);
		res.status(500).send({
			data: "Internal server error",
		});
	}
};

// update a book
const updateBook = async (req, res) => {
	try {
		const bookId = req.body.id;
		const updates = req.body;

		// Find the book by its ID
		const book = await Book.findById(bookId);

		if (!book) {
			return res.status(404).json({ success: false, message: 'Book not found' });
		}

		// Update the book properties with the values from req.body
		if (updates.name) {
			book.name = updates.name;
		}
		if (updates.author) {
			book.author = updates.author;
		}
		if (updates.publisher) {
			book.publisher = updates.publisher;
		}
		if (updates.description) {
			book.description = updates.description;
		}
		if (updates.noOfPages) {
			book.noOfPages = updates.noOfPages;
		}
		if (updates.image) {
			book.image = updates.image;
		}
		if (updates.publishedDate) {
			book.publishedDate = updates.publishedDate;
		}
		if (updates.categories) {
			book.categories = updates.categories;
		}

		// Save the updated book to the database
		await book.save();

		return res.status(200).json({
			success: true,
			updatedBook: book,
		});
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

module.exports = {
	newBook,
	searchBook,
	getBook,
	getAllBooks,
	trendingBooks,
	deleteBooks,
	updateBook
};