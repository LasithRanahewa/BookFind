import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/bookfind-components/Navbar";
import TrendingBookCard from "../../components/bookfind-components/TrendingBookCard";
import Footer from "../../components/bookfind-components/Footer";

import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link as L } from "@mui/material/";

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
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" align="left" sx={{ color: "#DAE1E7" }}>
              e-Books Galore | Explore | Discover
              <br />
              IT'S NOT JUST A <br />
              BOOKSTORE.
              <br />
              It's a universe.
            </Typography>
            <br />
            <TextField
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://via.placeholder.com/300x400.png?text=Image"
              alt="Book Cover"
              width="50%"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Tranding Books */}
      <div>
        <Typography variant="h4" align="center">
          Trending Books
        </Typography>

        <Grid container spacing={2} >
          {trendingBooksArr.map((book) => (
            <Grid item xs={12} sm={6} lg={3} >
              <Link to="/book">
                <TrendingBookCard book={book} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Featured Book */}
      <Typography variant="h4" align="center">
        Featured Book
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <img
            src="https://via.placeholder.com/300x400.png?text=Image"
            alt="Book Cover"
            width="50%"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">
            Book Content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ea nostrum enim cum quasi nobis qui odio eos, quis temporibus
            architecto rem mollitia omnis nesciunt officiis quas quidem pariatur
            accusamus nihil? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nemo explicabo veritatis odio voluptatibus inventore earum,
            eos dolorem totam libero, quisquam quidem doloribus voluptatem vitae
            ipsum, hic nulla corporis! Suscipit, officiis!
          </Typography>

          <Typography variant="body1">
            <L href="/book">Learn more...</L>
          </Typography>
        </Grid>

        {/* Footer */}
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
