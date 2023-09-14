// importing modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// creating user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },

    email: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: false
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
        required: false
    },

    isAdmin: {
        type: Boolean,
        // required: true,
        default: false
    },

    image: {
        type: String,
        required: false
    }
});

// method to hash and set the password
userSchema.methods.setPassword = function(password) {
    bcrypt.hash(password, saltRounds, function(err, hash) {
        this.password = hash;
    });
};

// method to check whether a password is correct or not
userSchema.methods.isValidPassword = function(password) {
    bcrypt.compare(password, this.password, function(err, result) {
        return result === true;
    });
};

// export the user model
module.exports = mongoose.model("User", userSchema);