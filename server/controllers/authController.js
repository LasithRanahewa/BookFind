// import modules
const passport = require("passport");
const { User } = require("../models/user");

// register a user
const registerUser = async (req, res) => {
	console.log(req.body);
	try {
		const existingUser = await User.findOne({ email: req.body.email });

// 		if (existingUser) {
// 			return res.status(403).json({ success: false, message: "User already exists" });
// 		}

// 		const newUser = new User(req.body);
// 		newUser.setPassword(req.body.password);

// 		const savedUser = await newUser.save();

// 		return res.status(201).json({ success: true, user: savedUser });
// 	} catch (err) {
// 		return res.status(400).json({ success: false, err });
// 	}
// };

const registerUser = async(req, res) => {
	try {
		const { name, email, password } = req.body;

		if( !name || !email || !password) {
			res.status(400);
			throw new Error("Please fill all the fields");

		}

		const userExists = await User.findOne({ email: email });
		console.log("OK!");

		if(userExists) {
			res.status(400);
			throw new Error("User already exists");
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = await User.create({
			name,
			email,
			hashedPassword
		});

		if(user) {
			res.status(201).json({
				_id: user._id,
				name: user.name,
				email: user.email,
				password: user.password
			});
		}
	} catch(err) {
		console.log(req.body);
		return res.status(400).json({ success: false, err });
	}
};

// login a local user
const loginLocalUser = async(req, res) => {
	try {
		const user = await User.findOne({email : req.body.email});
		
		if(!user) {
			return res.status(404).json({success : false, message : "User not found"});
		}
		if(!user.isValidPassword(req.body.password)) {
			return res.status(401).json({success: false, message: "Password incorrect"});
		}
		passport.authenticate("local", (err, user, info) => {
		req.logIn(user, (err) => {
			if(err) {
				throw err;
			}
			return res.status(200).json({
				success: true,
				user
			});
		});
		})(req, res, next);
	} catch(err) {
		return res.status(500).json({ success: false, err });
	}
};

// login a google user
// const loginGoogleUser = async (req, res) => {
//     passport.authenticate("google", { scope: ["profile"] });
// };

// // rediret a google user
// const redirectGoogleUser = async(req, res) => {
//     passport.authenticate("google", { failureRedirect: "/login" }, 
//     function(req, res) {
//         res.redirect("/");
//     });
// };

// // login a facebook user
// const loginFacebookUser = async (req, res) => {
//     passport.authenticate("facebook", { scope: ["profile  "] });
// };

// // rediret a facebook user
// const redirectFacebookUser = async(req, res) => {
//     passport.authenticate("facebook", { failureRedirect: "/login" }, 
//     function(req, res) {
//         res.redirect("/");
//     });
// };

// logout a user
const logoutUser = async (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
    return res.status(200).json({success: true, message: "User logged out"});
}

module.exports = {
    registerUser,
    loginLocalUser,
    // loginGoogleUser,
    // redirectGoogleUser,
    // loginFacebookUser,
    // redirectFacebookUser,
    logoutUser
};