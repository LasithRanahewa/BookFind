import { Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Button, TextField, Avatar } from "@mui/material";
import { Card, CardContent, Grid } from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";
import { Link } from "react-router-dom";



const Authors = ({ instance }) => {
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
      color: "#176B87",
    },
    email: {
      color: "#176B87",
      paddingBottom: "1rem",
    },
    view: {
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
    },
    content: {
      backgroundColor: "#EEEEEE",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
      borderRadius: "0.5rem",
      overflow: "hidden",
    },
    avatar: {
      width: "5rem",
      height: "5rem",
      margin: "0 auto",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  };

  const [authorsArr, setAuthorsArr] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSearch = () => {
    instance
      .post("author/search", {
        name: inputText,
      })
      .then((obj) => {
        console.log(obj);
        setAuthorsArr(obj.data);
      })
      .catch(() => {
        setAuthorsArr([
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
        AUTHORS
      </Typography>
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

      <Grid container spacing={2} padding={5}>
        {authorsArr.map((author) => (
          <Grid item xs={12} sm={6} md={3} key={author.id}>
            {/* <Link
              to={`/author?author=${author._id}`}
              style={{ textDecoration: "none" }}
            > */}
              <Card style={styles.card}>
                <CardContent style={styles.content}>
                  <Avatar
                    alt={author.name}
                    src={author.avatarUrl}
                    style={styles.avatar}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={styles.name}
                  >
                    {author.name.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={styles.address}
                  >
                    {author.contactNo}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={styles.email}
                  >
                    {author.email}
                  </Typography>
                </CardContent>
              </Card>
            {/* </Link> */}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Authors;