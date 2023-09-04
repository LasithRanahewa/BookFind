import React from "react";
import { Grid } from "@mui/material";
import loginImage from "../../assets/loginpage.png";
import { TextField, Button, FormControl, Typography } from "@mui/material";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submit logic here
  };

  const styles = {
    root: {
      backgroundColor: "#142850",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    formControl: {
      display: "flex",
      flexDirection: "column",
      color: "#DAE1E7",
      textAlign: "center",
    },
    header: {
      textAlign: "center",
      color: "#DAE1E7",
    },
    input: {
      margin: "1rem",
      width: "40ch",
      alignSelf: "center",
    },
    button: {
      margin: "1rem",
      width: "40ch",
      alignSelf: "center",
      backgroundColor: "#18B1C8",
      "&:hover": {
        backgroundColor: "#18B1C8",
      },
    },
    signUp: {
      textAlign: "center",
    },
    signUpLink: {
      color: "#18B1C8",
    },
  };

  return (
    <Grid container spacing={2}>
      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent="center"
        alignContent="center"
      >
        <img
          src={loginImage}
          style={{
            // maxWidth: "50%",
            // maxHeight: "50%",
            width: "50%",
            height: "auto",
            margin: "1rem 0 1rem 0",
            "@media (min-width: 960px)": {
              width: "70%",
              height: "70%",
              margin: 0,
            },
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={styles.root}>
          <form onSubmit={handleSubmit}>
            <FormControl
              style={styles.formControl}
              sx={{
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
              }}
            >
              <Typography variant="h4" gutterBottom style={styles.header}>
                Sign Up
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                type="text"
                required
                style={styles.input}
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                required
                style={styles.input}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                required
                style={styles.input}
              />
              <TextField
                label="Confirm Password"
                variant="outlined"
                type="password"
                required
                style={styles.input}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={styles.button}
              >
                Sign Up
              </Button>
              <Typography variant="body1" gutterBottom style={styles.signUp}>
                Already have an account?{" "}
                <a href="/Login" style={styles.signUpLink}>
                  Sign in here
                </a>
              </Typography>
            </FormControl>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
