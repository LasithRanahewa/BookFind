// impport modules
const express = require("express");
const router = express.Router();

// import functions from controller
const {
    getReservation,
    getAllReservations,
    newReservation,
    deleteReservation
} = require("../controllers/reservationController");

router.get("/getAll", (req, res) => getAllReservations(req, res));

router.get("/get/:id", (req, res) => getReservation(req, res));

router.post("/new", (req, res) => newReservation(req, res));

router.post("/delete", (req, res) => deleteReservation(req, res));