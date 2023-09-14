// import modules
const passport = require("passport");
const User = require("../models/user.js");
const bcrypt = require("bcrypt")

// register a user
const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(403).json({ success: false, message: "User already exists" });
		}

		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = User.create({ name: name, email: email, password: hashedPassword });

		return res.status(201).json({ success: true, message: "User added successfully" });
	} catch (err) {
		return res.status(400).json({ success: false, err });
	}
};

// login a local user
const loginLocalUser = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		const match = await bcrypt.compare(req.body.password, user.password)
		if (!match) {
			console.log("password error");
			return (res.status(401).json({ success: false, message: "Password incorrect" }))
		}
		console.log(req.body, match);

		req.login(user, (err) => {
			if (err) {
				return res.status(500).json({ success: false, err });
			}
			return res.status(200).json({ success: true, user });
		});
	} catch (err) {
		return res.status(500).json({ success: false, err });
	}
};

// logout a user
const logoutUser = async (req, res, next) => {
	req.logout((err) => {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
	// return res.status(200).json({success: true, message: "User logged out"});
}

module.exports = {
	registerUser,
	loginLocalUser,
	logoutUser
};