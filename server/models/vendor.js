const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const vendorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  // contact: {
  //   phone: {
  //     type: String,
  //     required: false,
  //   },
  //   email: {
  //     type: String,
  //     required: false,
  //   },
  // },

  email: {
    type: String,
    required: false,
  },

  availableBooks: [
    {
      type: Types.ObjectId,
      ref: "Book",
    },
  ],
  image: {
    type: String,
    required: false,
  },
});

const vendor = mongoose.model("Vendor", vendorSchema);

module.exports = vendor;
