// importing modules
const mongoose = require("mongoose");

// creating user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    preferences: {
        type: [
            {
                type: String
            }
        ],
        required: true
    },

    isVendor: {
        type: Boolean,
        required: true
    },

    isAdmin: {
        type: Boolean,
        required: true
    },

    image: {
        type: String,
        required: true
    }
});

// export the user model
module.exports = mongoose.Schema.Types("User", userSchema);