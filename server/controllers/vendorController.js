const express = require("express");
const router = express.Router();

const vendor = require("../models/vendor.js");

// Create new vendor
//  {
//   "name": "Books R Us",
//   "location": "123 Book Street, Libraryville",
//   "contact": {
//     "phone": "555-123-4567",
//     "email": "info@booksrus.com"
//   },
//   "availableBooks": ["64f0b94793998140be652e03","64f0b9a38451bcaa0840c758"],
//   "image": "https: //example.com/vendor-image.jpg"
// }

router.post("/new", async (req, res) => {
  const { name, location, contact, availableBooks, image } = req.body;

  const newVendor = new vendor({
    name,
    location,
    email,
    availableBooks,
    image,
  });

  try {
    await newVendor.save();
    res.send({
      data: "Add successfull",
    });
  } catch (e) {
    console.log(e);
  }
  console.log("New vendor added to DB");
});

// Search vendors
router.post("/search", async (req, res) => {
  const { name } = req.body;

  try {
    const regex = new RegExp(name, "i");
    vendor.find({ name: { $regex: regex } }).then((data) => {
      res.send(data);
    });
  } catch (e) {
    res.send({
      data: "No vendors are available by that name",
    });
  }
});

// Get specific vendor
router.post("/get", async (req, res) => {
  const { id } = req.body;

  try {
    vendor.find({ id }).then((data) => {
      res.send(data);
    });
  } catch (e) {
    res.send({
      data: "No vendor is available by that id",
    });
  }book
});

// Get all vendors
router.all("/all", async (req, res) => {
  const { name } = req.body;

  try {
    vendor.find().then((data) => {
      res.send(data);
    });
  } catch (e) {
    res.send({
      data: "Error fetching all vendors list",
    });
  }
});

module.exports = router;
