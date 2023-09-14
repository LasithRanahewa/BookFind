// import book model
const Book = require("../models/book.js");
const Copy = require("../models/copy.js");
const path = require("path"); // Import the 'path' module

// new book
const newBook = async (req, res) => {
  console.log(req.body);
  try {
    const { name, author, publisher, description, image } = req.body;
    if (!name || !author || !publisher || !description) {
      return res.status(401).json({ error: "Incomplete book data" });
    }

    const newBook = new Book({ name, author, publisher, description, image });
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
    books.forEach((book) => {
      const imagePath = path.join(__dirname, "../uploads", book.image);
      // Assuming you want to add the imagePath to the bookData object
      book.image = imagePath;
    });
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

    const imagePath = path.join(__dirname, "..", "uploads", bookData.image);
    var correctedPath = path.normalize(imagePath);
    // Assuming you want to add the imagePath to the bookData object
    bookData.image = imagePath;
    console.log(bookData);

    res.json(bookData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateBookImages = (books) => {
  return books.map((book) => {
    console.log(book.image);
    const imagePath = path.join(__dirname, "..", "uploads", book.image);
    // Assuming you want to add the imagePath to the bookData object
    var correctedPath = path.normalize(imagePath);
    console.log(correctedPath);
    return { ...book, image: correctedPath };
  });
};

// Define your getAllBooks method
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    const booksWithImages = updateBookImages(books);
    res.json(booksWithImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get trending book
const trendingBooks = async (req, res) => {
  try {
    const mostClickedBooks = await Book.find().sort({ clicks: -1 }).limit(4);
    mostClickedBooks.map((book) => {
      console.log(book.image);
      const imagePath = path.join(__dirname, "..", "uploads", book.image);
      // Assuming you want to add the imagePath to the bookData object

      console.log(imagePath);
      return { ...book, image: imagePath };
    });
    console.log(mostClickedBooks);
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

module.exports = {
  newBook,
  searchBook,
  getBook,
  getAllBooks,
  trendingBooks,
  deleteBooks,
};
