// import modules
const mongoose = require("mongoose");

// define the bookstore schema
const bookstoreSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true
    },

    userAccount: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    rating: {
        type: Double,
        required: true
    },

    copies: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Copy"
            }
        ],
        required: false
    },

    brn: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
});

// export the bookstore model
module.exports = mongoose.model("Bookstore", bookstoreSchema);