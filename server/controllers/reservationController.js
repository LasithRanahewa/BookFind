// import modules
const Reservation = require("../models/reservation");
// const Copy = require("../models/copy");

// get a specific reservation
const getReservation = async(req, res) => {
    try {
        const { id } = req.body;
        const reservationData = await Reservation.findById(id);

        if(!reservationData) {
            return res.status(500).json({ error: "Internal Server Error" });
        }

        await reservation.save();

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
        const { vendorId, reservationId, reservationDate } = req.body;
        // const copy = await Copy.findById(copyid);

        if(!reservationDate || !vendorId || !reservationId) {
            return res.json({ error: "Incomplete Reservation Data" });
        } 

        // copy.quantity -= quantity;
        // if(copy.quantity === 0) {
        //     copy.isAvailable = false;
        // }
        // await copy.save();

        const newReservation = new Reservation({ reservationDate, copyid, quantity });
        await newReservation.save();
        return res.status(201).json({ message: "reservation added successfully" });
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

// update reservation
const updateReservation = async (req, res) => {
	try {
		const reservationId = req.body.id;
		const updates = req.body;

		// Find the reservation by its ID
		const reservation = await Reservation.findById(reservationId);

		if (!reservation) {
			return res.status(404).json({ success: false, message: 'reservation not found' });
		}

		// Update the reservation properties with the values from req.body
		if (updates.reservationDate) {
			reservation.reservationDate = updates.reservationDate;
		}
		
		// Save the updated reservation to the database
		await reservation.save();

		return res.status(200).json({
			success: true,
			updatedreservation: reservation,
		});
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

module.exports = {
    getReservation,
    getAllReservations,
    newReservation,
    deleteReservation,
    updateReservation
};
