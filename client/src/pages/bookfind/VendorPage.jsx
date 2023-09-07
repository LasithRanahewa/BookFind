import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Select, TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";
import _ from "lodash";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const VendorPage = ({ instance }) => {
  const styles = {
    heading: {
      // textShadow: "0.07rem 0.07rem 0.5rem #176B87",
      color: "#142850",
      textAlign: "center",
      fontSize: "3.5rem",
      letterSpacing: "0.06rem",
      fontWeight: "bold",
    },
    content: {
      backgroundColor: "#EEEEEE",
    },
    name: {
      fontSize: "1.6rem",
      textShadow: "0.02rem 0.02rem 0.13rem #176B87",
      color: "#053B50",
      fontWeight: "bold",
    },
    author: {
      color: "#176B87",
    },
    publisher: {
      color: "#176B87",
      paddingBottom: "1rem",
    },
    view: {
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
    },
  };

  const [selectedBookstore, setSelectedBookstore] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const [searchParams] = useSearchParams();

  const [vendor, setVendorArr] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    console.log("params", searchParams.get("vendor"));
    instance
      .post("vendor/get", {
        id: searchParams.get("vendor"),
      })
      .then((obj) => {
        setVendorArr(obj.data);
        setBooks(obj.data.availableBooks);
        // console.log(obj.data.availableBooks);
      })
      .catch(() => {
        setVendorsArr([
          {
            error: "Fetch error",
          },
        ]);
      });
  }, []);

  const handleSearch = (value) => {
    const filteredBooks = _.filter(books, (book) => {
      return book.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredBooks(filteredBooks);
  };

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

      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
          width: "100%",
        }}
      >
        {/* Vendor details */}
        <Paper
          sx={{
            width: "100%",
            m: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& .MuiTypography-root": {
              color: "#142850",
            },
            p: "2rem 0",
            backgroundColor: "#DAE1E7",
          }}
        >
          {/* <Typography variant="h4" gutterBottom>
            Bookstore Info
          </Typography> */}
          <Typography variant="h4" style={styles.heading}>
            {vendor.name}
          </Typography>
          <img
            src="https://via.placeholder.com/200x200"
            alt="Bookstore Pic"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              margin: "1rem 0",
            }}
          />

          <Typography variant="h6" gutterBottom>
            {vendor.email}
          </Typography>
        </Paper>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
          width: "100%",
        }}
      >
        {/* Available books */}
        <Typography
          variant="h4"
          style={{
            textShadow: "0.07rem 0.07rem 0.5rem #176B87",
            paddingTop: "2rem",
            color: "#DAE1E7",
            textAlign: "center",
            fontSize: "3rem",
            letterSpacing: "0.12rem",
            fontWeight: "bold",
          }}
        >
          AVAILABLE BOOKS
        </Typography>

        {/* Search bar */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
            width: "100%",
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#18B1C8",
                  borderWidth: "0.1rem",
                },
                "&:hover fieldset": {
                  borderColor: "#00909E",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#00909E",
                },
              },
              "& .MuiFormLabel-root": {
                color: "#00909E",
              },
              "& .MuiInputBase-input": {
                color: "#00909E",
              },
              width: "70%",
              maxWidth: "50rem",
              marginBottom: "2rem",
            }}
            onChange={(e) => {
              handleSearch(e.target.value);
              setSearchText(e.target.value);
            }}
          />
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              handleSearch();
            }}
            style={{
              // alignSelf: "center",
              backgroundColor: "#00909E",
              "&:hover": {
                backgroundColor: "#00909E",
              },
              padding: "0.5rem ",
              marginBottom: "2rem",
            }}
          >
            Search
          </Button>
        </Grid>

        {/* Books */}
        <Grid container spacing={2} padding={5}>
          {searchText &&
            searchText != "" &&
            filteredBooks.map((book) => (
              <Grid item xs={12} key={book.id}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "15%", minWidth: "10rem", height: "auto" }}
                    image={book.image}
                    alt={book.name}
                  />
                  <CardContent sx={{ flex: 1 }} style={styles.content}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={styles.name}
                    >
                      {book.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={styles.author}
                    >
                      {book.author}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={styles.publisher}
                    >
                      {book.publisher}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleReserveClick(book)}
                      style={styles.view}
                    >
                      Reserve
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          {searchText == "" &&
            books.map((book) => (
              <Grid item xs={12} key={book.id}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "15%", minWidth: "10rem", height: "auto" }}
                    image={book.image}
                    alt={book.name}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Link
                      to={`/book?book=${book._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={styles.name}
                      >
                        {book.name}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={styles.author}
                    >
                      {book.author}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={styles.publisher}
                    >
                      {book.publisher}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleReserveClick(book)}
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
              Bookstore: {searchParams.get("book")}
            </Typography>
            <Typography variant="body1">
              Book: {selectedBookstore?.name}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleDialogClose(false)}>Cancel</Button>
            <Button onClick={() => handleDialogClose(true)}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
};

export default VendorPage;
