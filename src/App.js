import React from "react";
import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from "./components/Footer";
import TrendingCard from "./components/TrendingCard";


const App = () => {
  return (
    <div>
      <Navbar />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <h2>e-Books Galore | Explore | Discover</h2>
          <h1>
            IT'S NOT JUST A <br />
            BOOKSTORE.
          </h1>
          <h2>It's a universe.</h2>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <TextField
              label="Find a book"
              variant="outlined"
              size="small"
              sx={{ mr: 1, borderRadius: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <p>img</p>
        </Grid>
      </Grid>

      <h1 style={{ textAlign: "center" }}>Trending This Week</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={3}>
          <TrendingCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <TrendingCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <TrendingCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <TrendingCard />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <p>img</p>
        </Grid>
        <Grid item xs={12} md={8}>
          <p>
            In the heart of a bustling city, amidst the chaos of rushing
            pedestrians and honking cars, a small bookstore stood quietly on a
            narrow street corner. Its weathered facade boasted faded letters
            spelling out its name, "Whispering Pages." Inside, the air was
            filled with the intoxicating scent of old books, each telling its
            own story.
          </p>
          <a>Learn more...</a>
        </Grid>
      </Grid>

      <Footer style={{ position: "fixed", bottom: 0, width: "100%" }} />
    </div>
  );
};

export default App;