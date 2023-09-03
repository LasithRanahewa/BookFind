// import modules
const Reservation = require("../models/reservation");
const Copy = require("../models/copy");

// get a specific reservation
const getReservation = async(req, res) => {
    try {
        const { id } = req.body;
        const reservationData = await Reservation.findById(id);

        if(!reservationData) {
            return res.status(500).json({ error: "Internal Server Error" });
        }

        await book.save();

        return res.json(reservationData);
    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// get all the reservations
const getAllReservations = async(req, res) => {
    try {
        const reservations = await Reservation.find();
        return res.json(reservations);
    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// new reservation
const newReservation = async(req, res) => {
    try {
        const {reservationDate, copyid, quantity} = req.body;
        var copy = Copy.findById(copyid);

        if(!reservationDate || !copyid || !quantity) {
            return res.json({ error: "Incomplete Reservation Data" });
        } else if(copy.quantity < quantity) {
            return res.json({ error: "Not Enough Copies" });
        }

        copy.quantity -= quantity;
        if(copy.quantity === 0) {
            copy.isAvailable = false;
        }

        const newReservation = new Reservation({ reservationDate, copyid, quantity });
        await newReservation.save();
        return res.status(201).json({ message: "Book added successfully" });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// delete reservation
const deleteReservation = async(req, res) => {
    try {
        const id = req.body;
        const existingReservation = await Reservation.findById(id);
    
        if (!existingReservation) {
          return res.status(404).send({ data: "Reservation not found" });
        }
        // delete the reservation
        await existingReservation.remove();
        return res.send({ data: "Reservation deleted successfully" });
      } catch (err) {
        console.error(err);
        return res.status(500).send({ data: "Error deleting vendor" });
      }
};

module.exports = {
    getReservation,
    getAllReservations,
    newReservation,
    deleteReservation
};
