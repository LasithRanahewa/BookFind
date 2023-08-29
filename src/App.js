import React from "react";
import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from "./components/Footer";
import TrendingBooks from "./components/TrendingBooks";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <div style={{ position: "relative", top: 0, left: 0, height: "100vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div className="hero">
              <h2>e-Books Galore | Explore | Discover</h2>
              <h1 className="herotext2">
                IT'S NOT JUST A <br />
                BOOKSTORE.
              </h1>
              <h2>It's a universe.</h2>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <TextField
                  label="Find a book"
                  variant="outlined"
                  size="small"
                  sx={{ mr: 1, borderRadius: "100%" }}
                />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p>img</p>
          </Grid>
        </Grid>
      </div>

      <TrendingBooks />

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <p>img</p>
        </Grid>
        <Grid item xs={12} md={8}>
          <div>
            <p>
              In the heart of a bustling city, amidst the chaos of rushing
              pedestrians and honking cars, a small bookstore stood quietly on a
              narrow street corner. Its weathered facade boasted faded letters
              spelling out its name, "Whispering Pages." Inside, the air was
              filled with the intoxicating scent of old books, each telling its
              own story.
            </p>
            <Link to="/books">Learn more...</Link>
          </div>
        </Grid>
      </Grid>

      <Footer style={{ position: "fixed", bottom: 0, width: "100%" }} />
    </div>
  );
};

export default App;
