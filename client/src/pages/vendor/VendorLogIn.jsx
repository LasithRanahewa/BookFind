import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import loginImage from "../../assets/loginpage.png";
import {
  TextField,
  Button,
  FormControl,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#00909E", 
      },
    },
  });

const VendorLogIn = () => {
  const [shouldRememberUser, setShouldRememberUser] = useState(false);

  const handleRememberMeChange = (event) => {
    setShouldRememberUser(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add form validation and submit logic
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
    rememberMe: {
      alignSelf: "center",
      color: "#DAE1E7",
      "&$checked": {
        color: "#18B1C8",
      },
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
        <div>
          <form onSubmit={handleSubmit} style={styles.root}>
            <FormControl style={styles.formControl}>
              <Typography variant="h4" gutterBottom style={styles.header}>
                Sign In
              </Typography>

              <TextField
                style={styles.input}
                label="Email"
                variant="outlined"
                type="email"
                required
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
              />

              <TextField
                style={styles.input}
                label="Password"
                variant="outlined"
                type="password"
                required
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
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={shouldRememberUser}
                    onChange={handleRememberMeChange}
                    name="rememberMe"
                    style={styles.rememberMe}
                    
                    // sx={{
                    //   "&$checked": {
                    //     color: "#18B1C8",
                    //   },
                    // }}
                  />
                }
                label="Remember Me"
                style={styles.rememberMe}
                color="primary"
              />

              {/* Submit button */}
              <Button
                style={styles.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign In
              </Button>

              {/* Sign up link */}
              <Typography variant="body1" gutterBottom style={styles.signUp}>
                No account?{" "}
                <Link href="/signup" style={styles.signUpLink}>
                  Sign up here
                </Link>
              </Typography>
            </FormControl>
          </form>
        </div>
      </Grid>
    </Grid>

  );
};

export default VendorLogIn;
