import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const ReservationConfirmation = ({ open, onClose, selectedBookstore, book }) => {
  const handleDialogClose = (confirmed) => {
    if (confirmed) {
      // Perform reservation logic here
      console.log("Reservation confirmed for", selectedBookstore.name);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={() => handleDialogClose(false)}>
      <DialogTitle>Confirm Reservation</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Bookstore: {selectedBookstore?.name}
        </Typography>
        <Typography variant="body1">Book: {book}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleDialogClose(false)}>Cancel</Button>
        <Button onClick={() => handleDialogClose(true)}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReservationConfirmation;