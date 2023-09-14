// import models
const mongoose = require("mongoose");

// define the author schema
const authorShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false,
        default: ""
    },

    contactNo: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: false
    },

    writtenBooks: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Book",
        },
    ]
});