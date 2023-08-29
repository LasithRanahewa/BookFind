import React from "react";
import { Grid, TextField, Box } from "@material-ui/core";

const HeroContent = () => {
  return (
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
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
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
  );
};

export default HeroContent;
