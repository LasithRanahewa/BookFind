// import user model
const { User } = require("../models/user");

// get a specific user
const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

// get all the users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ isAdmin: false });

        return res.status(200).json({
            success: true,
            usersList: users,
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

// add a user
const addUser = async (req, res) => {
    try {
        const newUser = req.body;

        const existingUser = await User.findOne({ email: newUser.email });
        if (existingUser) {
            return res.status(403).json({ success: false, message: "User already exists" });
        }

        const user = new User(newUser);
        user.setPassword(newUser.password);
        await user.save();

        return res.status(201).json({
            success: true,
            user,
        });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

// // update a user
// const updateUser = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const updatedUser = req.body;

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         user.set(updatedUser);
//         user.setPassword(updatedUser.password);
//         await user.save();

//         return res.status(200).json({
//             success: true,
//             updatedUser: user,
//         });
//     } catch (error) {
//         return res.status(400).json({ success: false, error: error.message });
//     }
// };

// delete a user
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({
            success: true,
            deletedUser: user,
        });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

// update user
const updateUser = async (req, res) => {
	try {
		const userId = req.params.id;
		const updates = req.body;

		// Find the user by its ID
		const user = await user.findById(userId);

		if (!user) {
			return res.status(404).json({ success: false, message: 'user not found' });
		}

		// Update the user properties with the values from req.body
		if (updates.image) {
			user.image = updates.image;
		}
		if (updates.name) {
			user.name = updates.name;
		}
		if (updates.email) {
			user.email = updates.email;
		}
		if (updates.password) {
			user.password = updates.password;
		}
		if (updates.address) {
			user.address = updates.address;
		}
		if (updates.preferences) {
			user.preferences = updates.preferences;
		}

		// Save the updated user to the database
		await user.save();

		return res.status(200).json({
			success: true,
			updateduser: user,
		});
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

module.exports = {
    getUser,
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
};