import React from "react";
import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
          <p>Search</p>
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


    </div>
  );
};

export default App;
