import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const AvailableBookstores = ({ instance }) => {
  const styles = {
    heading: {
      // padding: "2rem",
      paddingTop: "2rem",
      color: "#DAE1E7",
      textAlign: "center",
      fontSize: "1.5rem",
    },
  };

  const [vendorsArr, setVendorsArr] = useState([]);
  const [selectedBookstore, setSelectedBookstore] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const [searchParams] = useSearchParams();
  useEffect(() => {
    instance
      .post("bookstore/", {
        id: searchParams.get("book"),
      })
      .then((obj) => {
        setVendorsArr(obj.data);
      })
      .catch(() => {
        setVendorsArr([
          {
            error: "Fetch error",
          },
        ]);
      });
  }, []);

  const handleReserveClick = (bookstore) => {
    setSelectedBookstore(bookstore);
    setOpenDialog(true);
  };

  const handleDialogClose = (confirmed) => {
    if (confirmed) {
      // Perform reservation logic here
      console.log("Reservation confirmed for", selectedBookstore.name);
    }
    setSelectedBookstore(null);
    setOpenDialog(false);
  };

  return (
    <>
      <Navbar />
      <div>
        {vendorsArr.length > 0 ? (
          <>
            <Typography variant="h4" style={styles.heading}>
              The following bookstores have the requested book in stock
            </Typography>
            {/* Bookstores */}
            <Grid container spacing={2} padding={5}>
              {vendorsArr.map((bookstore) => (
                <Grid item xs={12} sm={6} md={3} key={bookstore.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      sx={{ height: "15rem" }}
                      image={bookstore.image}
                      alt={bookstore.name}
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {bookstore.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {bookstore.location}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {bookstore.email}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleReserveClick(bookstore)}
                      >
                        Reserve
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Dialog open={openDialog} onClose={() => handleDialogClose(false)}>
              <DialogTitle>Confirm Reservation</DialogTitle>
              <DialogContent>
                <Typography variant="body1">
                  Bookstore: {selectedBookstore?.name}
                </Typography>
                <Typography variant="body1">
                  Book: {searchParams.get("book")}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleDialogClose(false)}>Cancel</Button>
                <Button onClick={() => handleDialogClose(true)}>Confirm</Button>
              </DialogActions>
            </Dialog>
          </>
        ) : (
          <Typography variant="h4" style={styles.heading}>
            Requested book is not available in any of the bookstores
          </Typography>
        )}
      </div>
    </>
  );
};

export default AvailableBookstores;