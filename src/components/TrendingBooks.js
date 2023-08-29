import React from "react";
import { Grid } from "@material-ui/core";
import TrendingCard from "./TrendingCard";

const TrendingBooks = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Trending This Week</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <TrendingCard />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TrendingCard />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TrendingCard />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TrendingCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default TrendingBooks;
