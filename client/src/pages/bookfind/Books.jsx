import { Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Button, Select, TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";
import { Link } from "react-router-dom";

// var books = [
//   {
//     id: 1,
//     title: "Book 1",
//     author: "Author 1",
//     description: "Description 1",
//     coverUrl: "https://via.placeholder.com/200x300",
//   },
//   {
//     id: 2,
//     title: "Book 2",
//     author: "Author 2",
//     description: "Description 2",
//     coverUrl: "https://via.placeholder.com/200x300",
//   },
//   {
//     id: 3,
//     title: "Book 3",
//     author: "Author 3",
//     description: "Description 3",
//     coverUrl: "https://via.placeholder.com/200x300",
//   },
//   {
//     id: 4,
//     title: "Book 4",
//     author: "Author 4",
//     description: "Description 4",
//     coverUrl: "https://via.placeholder.com/200x300",
//   },
//];

const Books = ({ instance }) => {
  const [inputText, setInputText] = useState("");
  const [booksArr, setBooksArr] = useState([]);

  const handleClose = () => {
    instance
      .post("/book/search", {
        name: inputText,
      })
      .then((obj) => {
        setBooksArr(obj.data);
      })
      .catch(() => {
        setBooksArr([
          {
            error: "Fetch error",
          },
        ]);
      });
  };

  useEffect(() => {
    handleClose();
  }, []);

  return (
    <>
      <Navbar />
      {/* <Typography variant="h4" color={"#DAE1E7"} sx={{p:"2rem"}}>
        Books
      </Typography> */}
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

            // alignSelf: "center",
          }}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => handleClose()}
          style={{
            // alignSelf: "center",
            backgroundColor: "#00909E",
            "&:hover": {
              backgroundColor: "#00909E",
            },
            padding: "0.5rem ",
          }}
        >
          Search
        </Button>
      </Grid>

      {/* Books */}
      <Grid container spacing={2} padding={5}>
        {booksArr.map((book) => (
          <Grid item xs={12} key={book.id}>
            <Link to={`/book?book=${book._id}`}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "15%", minWidth: "10rem", height: "auto" }}
                  image={book.coverUrl}
                  alt={book.name}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.publisher}
                  </Typography>
                  <Link to={`/availablebookstores?book=${book._id}`}>
                    {console.log(book)}
                    <Button variant="contained" size="small">
                      Find a Copy
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Books;
