import React from "react";
import { Grid, TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HI from "../assets/heroimg.png";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    top: 0,
    left: 0,
    height: "100vh",
    color: "DAE1E7",
  },
  h1: {
    color: "white",
  },
  h2: {
    color: "white",
  },
  textField: {
    margin: theme.spacing(1),
    width: "40ch",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#18B1C8",
      },
      "&:hover fieldset": {
        borderColor: "#18B1C8",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#18B1C8",
      },
    },
    "& .MuiFormLabel-root": {
      color: "#DAE1E7",
    },
    "& .MuiInputBase-input": {
      color: "#DAE1E7",
    },
  },
}));

const HeroContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={2} flexDirection={{ xs: "column-reverse", md: "row" }}>
        <Grid item xs={12} md={8}>
          <div>
            <h2 className={classes.h2}>e-Books Galore | Explore | Discover</h2>
            <h1 className={classes.h1}>
              IT'S NOT JUST A <br />
              BOOKSTORE.
            </h1>
            <h2 className={classes.h2}>It's a universe.</h2>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <TextField
                label="Find a book"
                variant="outlined"
                size="small"
                sx={{ mr: 1, borderRadius: "100%" }}
                className={classes.textField}
              />
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={HI} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroContent;
