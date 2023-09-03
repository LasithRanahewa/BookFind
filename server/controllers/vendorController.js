const express = require("express");
const router = express.Router();

const vendor = require("../models/vendor.js");
const Book = require("../models/book.js");

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
    contact,
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

  vendor
    .findById(id)
    .populate("availableBooks") // Populate the availableBooks field
    .then(function (vendor) {
      res.send(vendor);
      console.log(vendor);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

// Get all vendors
router.get("/all", async (req, res) => {
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

// Delete a vendor by ID
router.post("/delete", async (req, res) => {
  try {
    const idsToDelete = req.body.data; // Assuming you are passing an array of IDs as 'ids' in the request body
    // Check if the vendor with the provided IDs exist
    for (const id of idsToDelete) {
      const vendorToDelete = await vendor.findById(id);
      if (!vendorToDelete) {
        return res.status(404).send({
          data: `Vendor with ID ${id} not found`,
        });
      }
      await vendorToDelete.deleteOne();
    }
    res.send({
      data: "Vendors deleted successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      data: "Internal server error",
    });
  }
});

module.exports = router;
