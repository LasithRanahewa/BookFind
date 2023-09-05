// import modules
const mongoose = require("mongoose");

// define the bookstore schema
const vendorSchema = new mongoose.Schema ({
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

    location: {
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
        type: Number,
        required: true
    },

    availableBooks: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Book",
        },
      ],

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
module.exports = mongoose.model("Vendor", vendorSchema);