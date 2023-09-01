// importing modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// creating user schema
const UserSchema = new mongoose.Schema({
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
    
});