// import vendor model
const Vendor = require("../models/vendor.js");
const Book = require("../models/book.js");

// register a new vendor
const registerVendor = async (req, res) => {
	const { name, email, phoneNumber, location, brn, password } = req.body;

	const newVendor = new Vendor({
		name,
		email,
		phoneNumber,
		location,
		brn
	});
	newVendor.setPassword(password);

	try {
		await newVendor.save();
		res.send({
			data: "Add successfull",
		});
	} catch (e) {
		console.log(e);
	}
	console.log("New vendor added to DB");
};

// search vendors
const searchVendors = async(req, res) => {
	const { name } = req.body;

	try {
		const regex = new RegExp(name, "i");
		Vendor.find({ name: { $regex: regex } }).then((data) => {
			res.send(data);
		});
	} catch (e) {
		res.send({
			data: "No vendors are available by that name",
		});
	}
};

// get a specific vendor
const getVendor = async(req, res) => {
	const { id } = req.body;

	Vendor
		.findById(id)
		.populate("availableBooks") // Populate the availableBooks field
		.then(function (vendor) {
			res.send(vendor);
			console.log(vendor);
		})
		.catch(function (err) {
			res.status(500).send(err);
		});
};

// get all vendors
const getAllVendors = async(req, res) => {
	try {
		Vendor.find().then((data) => {
			res.send(data);
		});
		} catch (e) {
			res.send({
				data: "Error fetching all vendors list",
			});
		}
};

// delete vendors
const deleteVendor = async(req, res) => {
	try {
		const idsToDelete = req.body.data; // Assuming you are passing an array of IDs as 'ids' in the request body
		// Check if the vendor with the provided IDs exist
		for (const id of idsToDelete) {
			const vendorToDelete = await Vendor.findById(id);
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
};

// export controller functions
module.exports = {
	registerVendor,
	searchVendors,
	getVendor,
	getAllVendors,
	deleteVendor
};
