const express = require("express");
const router = express.Router();

const {
    findACopy
} = require("../controllers/findACopyController");

router.post("/", (req, res) => findACopy(req, res));

module.exports = router;