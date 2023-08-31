import React from "react";
import { Grid } from "@mui/material"
import TrendingCard from "./TrendingCard";

const TrendingBooks = () => {
  return (
    <div sx={{
      margin: 4,
      padding: 4,
      paddingBottom: "4%",
      backgroundColor: "#DAE1E7",
      }}>
      <h1 style={{ textAlign: "center" }}>Trending This Week</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {[...Array(4)].map((_, index) => (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            key={index}
            item
            xs={12}
            sm={6}
            md={3}
            rowSpacing={1} 
            columnSpacing={1}
          >
            <TrendingCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TrendingBooks;
