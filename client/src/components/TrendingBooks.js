import React from "react";
import { Grid } from "@material-ui/core";
import TrendingCard from "./TrendingCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(4),
    padding: theme.spacing(4),
    paddingBottom: "4%",
    backgroundColor: "#DAE1E7",
  },
  item: {
    container: {
      direction: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

const TrendingBooks = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
