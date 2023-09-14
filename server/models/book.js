// import modules
const mongoose = require("mongoose");

// define the book schema
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    author: {
        type: String,
        required: true
    },
    
    publisher: {
        type: String,
        required: true
    },
    
    clicks: {
      type: Number,
      required: false,
      default: 0
    },

    description: {
        type: String,
        required: true
    },

    noOfPages: {
        type: Number,
        required: false
    },

    copies: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Copy",
            },
        ],
        required: false
    },

    isbn: {
        type: String,
        required: false
    },

    categories: {
        type: [
            { 
                type: String,
            }
        ],
        required: false
    },

    rating: {
        type: Number,
        required: false,
        default: 5.0
    },

    unitPrice: {
        type: Number,
        required: false
    },

    publishedDate: {
        type: Date,
        required: false
    },

    image: {
        type: String,
        required: false
    }
});

// export the book model
module.exports = mongoose.model("Book", bookSchema);
