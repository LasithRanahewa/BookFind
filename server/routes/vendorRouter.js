// import modules
const express = require("express");
const router = express.Router();

// import functions from controller
const {
    registerVendor,
	searchVendors,
	getVendor,
	getAllVendors,
	deleteVendor
} = require("../controllers/vendorController");

router.post("/new", (req, res) => registerVendor(req, res));

router.post("/search", (req, res) => searchVendors(req, res));

router.post("/get", (req, res) => getVendor(req, res));

router.get("/all", (req, res) => getAllVendors(req, res));

router.post("/delete", (req, res) => deleteVendor(req, res));

module.exports = router;