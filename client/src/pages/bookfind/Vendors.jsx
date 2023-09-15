import { Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";
import { Link } from "react-router-dom";

const vendorsArr = [
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

const Vendors = ({ instance }) => {
  const styles = {
    heading: {
      textShadow: "0.07rem 0.07rem 0.5rem #176B87",
      paddingTop: "3rem",
      color: "#DAE1E7",
      textAlign: "center",
      fontSize: "3rem",
      letterSpacing: "0.12rem",
      fontWeight: "bold",
    },
    name: {
      fontSize: "1.57rem",
      textShadow: "0.02rem 0.02rem 0.13rem #176B87",
      color: "#053B50",
      fontWeight: "bold",
    },
    address: {
      paddingTop: "1rem",
      color: "#176B87",
    },
    email: {
      color: "#176B87",
      paddingBottom: "1rem",
      paddingTop: "1rem",
    },
    view: {
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
    },
    content: {
      backgroundColor: "#EEEEEE",
    },
  };

  const [inputText, setInputText] = useState("");
  const [vendorsArr, setVendorsArr] = useState([]);

  const handleSearch = () => {
    instance
      .post("vendor/search", {
        name: inputText,
      })
      .then((obj) => {
        console.log(obj);
        setVendorsArr(obj.data);
      })
      .catch(() => {
        setVendorsArr([
          {
            error: "Fetch error",
          },
        ]);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <Navbar />
      <Typography variant="h4" style={styles.heading}>
        VENDORS
      </Typography>
      {/* <Typography variant="h4">Vendors</Typography> */}
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
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          variant="contained"
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

      {/* Bookstores */}
      <Grid container spacing={2} padding={5}>
        {vendorsArr.map((vendor) => (
          <Grid item xs={12} sm={6} md={3} key={vendor.id}>
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={styles.name}
                >
                  {vendor.name.toUpperCase()}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={styles.address}
                >
                  {vendor.location}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={styles.email}
                >
                  {vendor.email}
                </Typography>
                <Link style={{textDecoration: 'none'}} to={`/bookstore?vendor=${vendor._id}`}>
                  <Button
                    variant="contained"
                    size="small"
                    style={styles.view}
                    sx={{
                      display: "block",
                      margin: "auto",
                      marginLeft: "auto",
                    }}
                  >
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

export default Vendors;
