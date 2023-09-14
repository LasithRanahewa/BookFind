// import vendor model
const passport = require("passport");
const bcrypt = require("bcrypt")
const Vendor = require("../models/vendor.js");

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

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	try {
		await Vendor.create({ name: name, email: email, phoneNumber: phoneNumber, location: location, brn: brn, password: hashedPassword });
		res.send({
			data: "Add successfull",
		});
	} catch (e) {
		console.log(e);
	}
	console.log("New vendor added to DB");
};

// login vendor
const loginVendor = async (req, res, next) => {
	try {
		const vendor = await Vendor.findOne({ email: req.body.email });

		if (!vendor) {
			return res.status(404).json({ success: false, message: "vendor not found" });
		}

		const match = await bcrypt.compare(req.body.password, vendor.password)
		if (!match) {
			console.log("password error");
			return (res.status(401).json({ success: false, message: "Password incorrect" }))
		}
		console.log(req.body, match);

		req.login(vendor, (err) => {
			if (err) {
				return res.status(500).json({ success: false, err });
			}
			return res.status(200).json({ success: true, vendor });
		});
	} catch (err) {
		return res.status(500).json({ success: false, err });
	}
};

// search vendors
const searchVendors = async (req, res) => {
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
const getVendor = async (req, res) => {
	const { id } = req.body;

	Vendor
		.findById(id)
		.populate("availablevendors") // Populate the availablevendors field
		.then(function (vendor) {
			res.send(vendor);
			console.log(vendor);
		})
		.catch(function (err) {
			res.status(500).send(err);
		});
};

// get all vendors
const getAllVendors = async (req, res) => {
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
const deleteVendor = async (req, res) => {
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

// update vendor
const updateVendor = async (req, res) => {
	try {
		const vendorId = req.params.id;
		const updates = req.body;

		// Find the vendor by its ID
		const vendor = await Vendor.findById(vendorId);

		if (!vendor) {
			return res.status(404).json({ success: false, message: 'vendor not found' });
		}

		// Update the vendor properties with the values from req.body
		if (updates.image) {
			vendor.image = updates.image;
		}
		if (updates.name) {
			vendor.name = updates.name;
		}
		if (updates.email) {
			vendor.email = updates.email;
		}
		if (updates.password) {
			const salt = await bcrypt.genSalt(10)
			const hashedPassword = await bcrypt.hash(updates.password, salt)
			vendor.password = hashedPassword;
		}
		if (updates.address) {
			vendor.address = updates.address;
		}
		if (updates.phoneNumber) {
			vendor.phoneNumber = updates.phoneNumber;
		}
		if (updates.brn) {
			vendor.brn = updates.brn;
		}
		if (updates.description) {
			vendor.description = updates.description;
		}

		// Save the updated vendor to the database
		await vendor.save();

		return res.status(200).json({
			success: true,
			updatedvendor: vendor,
		});
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

// export controller functions
module.exports = {
	registerVendor,
	loginVendor,
	searchVendors,
	getVendor,
	getAllVendors,
	deleteVendor,
	updateVendor
};
