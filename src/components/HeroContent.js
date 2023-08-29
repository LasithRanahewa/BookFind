import React from "react";
import { Grid, TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Hero_Img from "../assets/heropage.png";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#142850",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  herotext: {
    marginTop: "10%",
    color: "#DAE1E7",
  },
  textField: {
    margin: theme.spacing(1),
    width: '40ch',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#00909E',
        },
        '&:hover fieldset': {
            borderColor: '#00909E',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#00909E',
        },
    },
    '& .MuiFormLabel-root': {
        color: '#DAE1E7',
    },
    '& .MuiInputBase-input': {
        color: '#DAE1E7',
    },
},
}));

const HeroContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={8}>
          <div className={classes.herotext}>
            <h2>e-Books Galore | Explore | Discover</h2>
            <h1 >IT'S NOT JUST A <br />BOOKSTORE.</h1>
            <h2>It's a universe.</h2>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <TextField className={classes.textField}
                label="Find a book"
                variant="outlined"
                size="small"
                sx={{ mr: 1, borderRadius: "100%" }}
              />
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={4} >
          <img src={Hero_Img} alt="hero" />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroContent;
