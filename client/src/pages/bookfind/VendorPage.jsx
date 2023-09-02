import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Select, TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";

var books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    description: "Description 1",
    coverUrl: "https://via.placeholder.com/200x300",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
    description: "Description 2",
    coverUrl: "https://via.placeholder.com/200x300",
  },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
    description: "Description 3",
    coverUrl: "https://via.placeholder.com/200x300",
  },
  {
    id: 4,
    title: "Book 4",
    author: "Author 4",
    description: "Description 4",
    coverUrl: "https://via.placeholder.com/200x300",
  },
];

const VendorPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleReserveClick = (book) => {
    setSelectedBook(book);
    setShowConfirmation(true);
  };

  const handleConfirmClick = () => {
    // Handle the confirmation logic here, such as sending a request to the server
    setShowConfirmation(false);
  };

  const handleCancelClick = () => {
    setSelectedBook(null);
    setShowConfirmation(false);
  };

  return (
    <>
      <Navbar />
      <Grid container spacing={0} margin={4}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            {/* Content for the left side */}

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Bookstore Info
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="Bookstore Pic"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Name: ABC Bookstore
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Email: abc@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9}>
            {/* Content for the right side */}
            <Typography variant="h4" gutterBottom>
              Available Books
            </Typography>

            <TextField
              label="Search"
              variant="outlined"
              size="small"
              sx={{ mr: 1 }}
            />
            <Select
              label="Category"
              variant="outlined"
              size="small"
              sx={{ mr: 1 }}
              defaultValue="all"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="fiction">Fiction</MenuItem>
              <MenuItem value="nonfiction">Nonfiction</MenuItem>
            </Select>
            <Button variant="contained" size="small">
              Search
            </Button>

            {/* Books */}
            <Grid container spacing={2} padding={5}>
              {books.map((book) => (
                <Grid item xs={12} key={book.id}>
                  <Card sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: "15%", minWidth: "10rem", height: "auto" }}
                      image={book.coverUrl}
                      alt={book.title}
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {book.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {book.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {book.description}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleReserveClick(book)}
                      >
                        Reserve
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Confirmation dialog */}
      {showConfirmation && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "0.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Confirm Reservation
            </Typography>
            <Typography variant="body1" gutterBottom>
              Are you sure you want to reserve "{selectedBook?.title}"?
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained" onClick={handleConfirmClick}>
                Yes
              </Button>
              <Button variant="contained" onClick={handleCancelClick}>
                No
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VendorPage;
