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

const VendorPage = ({ instance }) => {

  const styles={
    head1:{
      color: "#DAE1E7",
      fontSize: "2.5rem",
    },
    head2:{
      color: "#DAE1E7",
      fontSize: "2.5rem",
    },
    name: {
      paddingBottom: 0,
      color: "#DAE1E7",
      fontSize: "1.75rem",
      textAlign: "left",
    },
    email:{
      paddingTop: 0,
      color: "#DAE1E7",
      textAlign: "left",
    },
    image:{
      paddingBottom: "2rem"
    }
  };



  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

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
              <Typography variant="h4" gutterBottom style={styles.head1}>
                Bookstore Info
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="Bookstore Pic"
                  style={styles.image}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom style={styles.name}>
                {vendor.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom style={styles.email}>
                {vendor.email}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9}>
            {/* Content for the right side */}
            <Typography variant="h4" gutterBottom style={styles.head2}>
              Available Books
            </Typography>

            <TextField
              label="Search"
              variant="outlined"
              size="small"
              sx={{ mr: 1 ,
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
                
              }}
              onChange={(e) => {
                handleSearch(e.target.value);
                setSearchText(e.target.value);
              }}
            />
            <Select
              label="Category"
              variant="outlined"
              size="small"
              sx={{ mr: 1 , color: "#00909E", border: "0.1rem solid #18B1C8", height:"2.5rem"}}
              defaultValue="all"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="fiction">Fiction</MenuItem>
              <MenuItem value="nonfiction">Nonfiction</MenuItem>
            </Select>
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
              }}
            >
              Search
            </Button>

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
                        <Link to={`/book?book=${book._id}`}>
                          <Typography gutterBottom variant="h5" component="div">
                            {book.name}
                          </Typography>
                        </Link>
                        <Typography variant="body2" color="text.secondary">
                          {book.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {book.publisher}
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
