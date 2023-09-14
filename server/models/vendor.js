// import modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// define the bookstore schema
const vendorSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
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
        required: false,
        default: ""
    },

    phoneNumber: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        required: false,
        default: 5.0
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
        required: false
    }
});

// method to hash and set the password
// vendorSchema.methods.setPassword = function(password) {
//     bcrypt.hash(password, saltRounds, function(err, hash) {
//         this.password = hash;
//     });
// };

// method to check whether a password is correct or not
// vendorSchema.methods.isValidPassword = function(password) {
//     bcrypt.compare(password, this.password, function(err, result) {
//         return result === true;
//     });
// };

// export the bookstore model
module.exports = mongoose.model("Vendor", vendorSchema);