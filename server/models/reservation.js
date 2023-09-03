// import modules
const mongoose = require("mongoose");

// define reservation schema
const reservationSchema = new mongoose.Schema({
    reservationDate: {
        type: Date,
        required: true
    },

    copy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
});

// export the reservatin model
module.exports = mongoose.model("Reservation", reservationSchema);