const express = require("express");
const router = express.Router();

const {
    getUser,
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");

router.get("/:id", (res, req) => getUser(req, res));

router.get("/all", (req, res) => getAllUsers(req, res));

router.post("/add", (req, res) => addUser(req, res));

router.post("/update/:id", (req, res) => updateUser(req, res));

router.post("/delete/:id", (req, res) => deleteUser(req, res));

module.exports = router;