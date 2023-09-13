import { Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";
import { Link } from "react-router-dom";





const Authors = ({instance}) => {
  const styles={
    heading:{
      textShadow: "0.07rem 0.07rem 0.5rem #176B87",
      paddingTop: "3rem",
      color: "#DAE1E7",
      textAlign: "center",
      fontSize: "3rem",
      letterSpacing: "0.12rem",
      fontWeight: "bold",
    },
    name:{
      fontSize: "1.57rem",
      textShadow: "0.02rem 0.02rem 0.13rem #176B87",
      color: "#053B50",
      fontWeight: "bold",
    },
    address:{
      color: "#176B87",
    },
    email:{
      color: "#176B87",
      paddingBottom: "1rem",
    },
    view:{
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
    },
    content:{
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
      <Typography variant="h4" style={styles.heading}>AUTHORS</Typography>
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

            <Card style={{height:'100%'}}>


              <CardMedia
                component="img"
                sx={{ height: "15rem" }}
                image={vendor.image}
                alt={vendor.name}
              />
              <CardContent sx={{ flex: 1 }} style={styles.content}>
                <Typography gutterBottom variant="h5" component="div" style={styles.name}>
                  {vendor.name.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={styles.address}>
                  {vendor.location}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={styles.email}>
                  {vendor.email}
                </Typography>
                <Link to={`/bookstore?vendor=${vendor._id}`}>
                  <Button variant="contained" size="small" style={styles.view}>
                    View Books
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

export default Authors;
