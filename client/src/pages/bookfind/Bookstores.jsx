import { Typography } from "@mui/material";
import React from "react";
import { Button, TextField } from "@mui/material";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";
import { Link } from "react-router-dom";

const bookstores = [
  {
    id: 1,
    name: "Bookstore 1",
    address: "Address 1",
    contact: "Contact 1",
    coverUrl: "https://via.placeholder.com/200x300",
  },
  {
    id: 2,
    name: "Bookstore 2",
    address: "Address 2",
    contact: "Contact 2",
    coverUrl: "https://via.placeholder.com/200x300",
  },
  {
    id: 3,
    name: "Bookstore 3",
    address: "Address 3",
    contact: "Contact 3",
    coverUrl: "https://via.placeholder.com/200x300",
  },
  {
    id: 4,
    name: "Bookstore 4",
    address: "Address 4",
    contact: "Contact 4",
    coverUrl: "https://via.placeholder.com/200x300",
  },
  {
    id: 5,
    name: "Bookstore 5",
    address: "Address 5",
    contact: "Contact 5",
    coverUrl: "https://via.placeholder.com/200x300",
  },
];

const Bookstores = () => {

  const styles={
    search:{
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
      padding: "0.5rem ",
      textAlign: "center",

    },
    heading:{
      padding: "3rem",
      color: "#DAE1E7",
      textAlign: "center",
      fontSize: "3rem",
      letterSpacing: "0.12rem",
      fontWeight: "bold",
    },
    view:{
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
    },
    name:{
      color: "#053B50",
      fontWeight: "bold",
    },
    address:{
      color: "#176B87",
    },
    contact:{
      color: "#176B87",
      paddingBottom: "1rem",
    },
    content:{
      backgroundColor: "#EEEEEE",
    },
  };



  return (
    <>
      <Navbar />
      <Typography variant="h4" style={styles.heading}>BOOKSTORES</Typography>
      {/* <TextField
        label="Search"
        variant="outlined"
        size="small"
        sx={{ mr: 1 }}
      /> */}
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

            // alignSelf: "center",
          }}
          onChange={(e) => setInputText(e.target.value)}
        />
      <Button variant="contained" size="small" style={styles.search}>
        Search
      </Button>

      {/* Bookstores */}
      <Grid container spacing={2} padding={5}>
        {bookstores.map((bookstore) => (
          <Grid item xs={12} sm={6} md={3} key={bookstore.id}>
            <Card>
              <CardMedia
                component="img"
                sx={{ height: "15rem"}}
                image={bookstore.coverUrl}
                alt={bookstore.name}
              />
              <CardContent sx={{ flex: 1}} style={styles.content}>
                <Typography gutterBottom variant="h5" component="div" style={styles.name}>
                  {bookstore.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={styles.address}>
                  {bookstore.address}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={styles.contact}>
                  {bookstore.contact}
                </Typography>
                <Link to="/bookstore">
                  <Button variant="contained" size="small" style={styles.view}>
                    View Available Books
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Bookstores;
