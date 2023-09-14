// import author model
const Author = require("../models/author");

// new author
const newAuthor = async (req, res) => {
	console.log(req.body)
	try {
		const { name, email, description, contactNo, image } = req.body;
		if (!name || !email || !description || !contactNo || !image) {
			return res.status(401).json({ error: "Incomplete author data" });
		}

		const newAuthor = new Author({ 
			name: name, 
			email: email, 
			description: description, 
			contactNo: contactNo,
			image: image 
		});
		await newAuthor.save();
		
		res.status(201).json({ message: "Author added successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// search an author
const searchAuthor = async (req, res) => {
	try {
		const { name } = req.body;
		const regex = new RegExp(name, "i");
		const authors = await Author.find({ name: { $regex: regex } });
		res.json(authors);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// get an author
const getAuthor = async (req, res) => {
	try {
		const { id } = req.body;
		const authorData = await Author.findById(id);

		if (!authorData) {
			return res.status(500).json({ error: "Internal server error" });
		}

		await authorData.save();

		res.json(authorData);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

// get all authors
const getAllAuthors = async (req, res) => {
	try {
		const auhtors = await Author.find();
		res.json(auhtors);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// delete authors
const deleteAuthors = async (req, res) => {
	try {
		const idsToDelete = req.body.data; // Assuming you are passing an array of IDs as 'ids' in the request body
		// Check if the Author with the provided IDs exist
		for (const id of idsToDelete) {
			const authorToDelete = await Author.findById(id);
			if (!authorToDelete) {
				return res.status(404).send({
					data: `Auhtor with ID ${id} not found`,
				});
			}
			await authorToDelete.deleteOne();
		}
		res.send({
			data: "Author deleted successfully",
		});
	} catch (e) {
		console.error(e);
		res.status(500).send({
			data: "Internal server error",
		});
	}
};

// update a author
const updateAuthor = async (req, res) => {
	try {
		const authorId = req.params.id;
		const updates = req.body;

		// Find the author by its ID
		const author = await Author.findById(authorId);

		if (!author) {
			return res.status(404).json({ success: false, message: 'Author not found' });
		}

		// Update the author properties with the values from req.body
		if (updates.name) {
			author.name = updates.name;
		}
		if (updates.email) {
			author.email = updates.email;
		}
		if (updates.description) {
			author.description = updates.description;
		}
		if (updates.contactNo) {
			author.contactNo = updates.contactNo;
		}
		if (updates.image) {
			author.image = updates.image;
		}

		// Save the updated author to the database
		await author.save();

		return res.status(200).json({
			success: true,
			updatedauthor: author,
		});
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

module.exports = {
	newAuthor,
	searchAuthor,
	getAuthor,
	getAllAuthors,
	deleteAuthors,
	updateAuthor
};