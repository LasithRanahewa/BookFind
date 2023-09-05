import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/bookfind-components/Navbar";
import TrendingBookCard from "../../components/bookfind-components/TrendingBookCard";
import Footer from "../../components/bookfind-components/Footer";
import { Button } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link as L } from "@mui/material/";
import Effect from "../../components/Effect";
import '../../App.css';

const Home = ({ instance }) => {
  const [trendingBooksArr, setTrendingBooksArr] = useState([]);

  useEffect(() => {
    instance
      .get("/book/trending")
      .then((obj) => {
        setTrendingBooksArr(obj.data);
      })
      .catch(() => {
        setTrendingBooksArr([
          {
            error: "Fetch error",
          },
        ]);
      });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Navbar />
      <Grid container minHeight={"100vh"}>
        <Grid container>
          <Grid item className="homeImage" sx={{ height: 'auto', width: 'auto' }} xs={12} sm={12} lg={6}>
            <img
              src="https://via.placeholder.com/300x400.png?text=Image"
              alt="Book Cover"
              width="50%" 
            />
          </Grid>
          <Grid item className="homeContent" xs={12} sm={6} >
            <Typography variant="h5" align="left" sx={{ color: "#DAE1E7" }}>
              <span className="firstLine">Explore | Discover | Acquire</span>
              <br />
              <span className="secondLine">IT'S NOT JUST A <br />
              BOOKSTORE.
              <br /></span>
              <span className="thirdLine">It's a universe.</span>
            </Typography>
            <br />
            {/* <TextField
              label="Find a book"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            /> */}
            <Link to={`/books`}>
              <Button variant="contained" size="small"
              style={{
                // alignSelf: "center",
                backgroundColor: "#00909E",
                "&:hover": {
                  backgroundColor: "#00909E",
                },
                padding: "0.5rem ",
                margin: "2rem 0 4rem 0",
              }}>
                Search for Books
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container xs={12} xm={12} lg={12}>       */}
        {/* Trending Books */}
        <Typography className="BigText" variant="h4" align="center">
          <span>Trending</span>
        </Typography>
        <Typography className="trendbooks" variant="h4" align="center">
          <span>Trending Books</span>
        </Typography>
      {/* </Grid> */}

      <Grid className="cards" container spacing={2}>
        {trendingBooksArr.map((book) => (
          <Grid item lg={3} sm={6} xs={12}>
            <Link to="/book">
              <TrendingBookCard book={book} />
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Featured Book */}
      <Typography className="featuredbooks" variant="h4" align="center">
      <span>Featured Book</span>
      </Typography>
      <Grid container>
        <Grid item className="featuredImage" xs={12} xm={6} lg={6}>
          <img
            src="https://via.placeholder.com/300x400.png?text=Image"
            alt="Book Cover"
            width="50%"
          />
        </Grid>
        <Grid item sx={{ itemAlign: 'center'}} xs={12} xm={6} lg={6}>
          <Typography variant="h5" sx={{ textAlign: 'justify', m: 1, 
          position: 'relative', left: '0', color: '#DAE1E7' }}>
            Book Content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ea nostrum enim cum quasi nobis qui odio eos, quis temporibus
            architecto rem mollitia omnis nesciunt officiis quas quidem pariatur
            accusamus nihil? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nemo explicabo veritatis odio voluptatibus inventore earum,
            eos dolorem totam libero, quisquam quidem doloribus voluptatem vitae
            ipsum, hic nulla corporis! Suscipit, officiis!
          </Typography>

          <Typography sx={{position: 'relative', paddingTop: '2rem'}} variant="body1">
            <L href="/book">Learn more...</L>
          </Typography>
        </Grid>

        {/* Footer */}
        <Footer />
      </Grid>
      <Effect></Effect>
    </>
  );
};

export default Home;