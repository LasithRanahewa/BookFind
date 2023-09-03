// import modules
const mongoose = require("mongoose");

// define the copy schema
const copySchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    bookstore: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    isAvailable: {
        type: Boolean,
        required: true
    }
});

// export the copy model
module.exports = mongoose.model("Copy", copySchema);