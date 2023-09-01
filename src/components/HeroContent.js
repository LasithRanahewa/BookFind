import React from "react";
import { Grid, TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import img2 from "../images/bookshop.png";
import '../index.css';

const useStyles = makeStyles((theme) => ({
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
          <div className="content">
              <Grid item xs={12} md={8}><img src = {img2} /></Grid>
              <p className="para1"> Explore | Discover | Acquire </p>
              <h1 className="heading1">IT'S NOT JUST A<br></br>BOOKSTORE.</h1>
              <p className="para2">It's a universe.</p>
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
      </Grid>
    </div>
  );
};

export default HeroContent;
