// importing modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
        required: false,
        default: ""
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
        required: false,
        default: ""
    },

    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },

    image: {
        type: String,
        required: false,
        default: ""
    }
});

// method to hash and set the password
userSchema.statics.setPassword = function(password) {
    bcrypt.hash(password, saltRounds, function(err, hash) {
        this.password = hash;
    });
};

// method to check whether a password is correct or not
userSchema.statics.isValidPassword = function(password) {
    bcrypt.compare(password, this.password, function(err, result) {
        return result === true;
    });
};

// export the user model
const User = mongoose.model("User", userSchema);

module.exports = User;