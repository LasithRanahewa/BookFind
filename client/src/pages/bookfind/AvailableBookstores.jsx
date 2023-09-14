import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
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
    name: {
      fontSize: "1.6rem",
      textShadow: "0.02rem 0.02rem 0.13rem #176B87",
      color: "#053B50",
      fontWeight: "bold",
    },
    location: {
      color: "#176B87",
    },
    email: {
      color: "#176B87",
      paddingBottom: "1rem",
    },
    content: {
      backgroundColor: "#EEEEEE",
    },
    view: {
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
    },
    button: {
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
      marginTop: "2rem",
    },
  };

  const [vendorsArr, setVendorsArr] = useState([]);
  const [selectedBookstore, setSelectedBookstore] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogBoxBook, setDialogBoxBook] = useState("");

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

    instance
      .post("/book/get", {
        id: searchParams.get("book"),
      })
      .then((obj) => {
        setDialogBoxBook(obj.data.name);
      })
      .catch(() => {
        setVendorsArr([
          {
            error: "Fetch error",
          },
        ]);
      });

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
                    <CardContent sx={{ flex: 1 }} style={styles.content}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={styles.name}
                      >
                        {bookstore.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={styles.location}
                      >
                        {bookstore.location}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={styles.email}
                      >
                        {bookstore.email}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleReserveClick(bookstore)}
                        style={styles.view}
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
                  Book: {dialogBoxBook == "" ? "" : dialogBoxBook}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    handleDialogClose(false);
                    setDialogBoxBook("");
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={() => handleDialogClose(true)}>Confirm</Button>
              </DialogActions>
            </Dialog>
          </>
        ) : (
          <Grid container spacing={2} padding={5} justifyContent={"center"}>
            <Typography variant="h4" style={styles.heading}>
              Requested book is not available in any of the bookstores
            </Typography>
            <Grid item xs={12} display={"flex"} justifyContent={"center"}> 
            <Button to="/" size="large" variant="contained" component={RouterLink} style={styles.button}>
            Go to Home
          </Button>
            </Grid>
            
          </Grid>
        )}
      </div>
    </>
  );
};

export default AvailableBookstores;
