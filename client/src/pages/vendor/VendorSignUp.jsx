import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27496D", // Change the primary color to red
    },
  },
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "32px",
});

const TextFieldWrapper = styled(TextField)({
  margin: "8px",
  width: "25ch",
});

const ButtonWrapper = styled(Button)({
  margin: "16px",
});

const VendorSignUp = () => {
  const [bookstoreName, setBookstoreName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [brn, setBrn] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const Form = styled("form")({
    // margin: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginTop: "32px",
    backgroundColor: "#DAE1E7", 
    minHeight: "100vh",
  });

  const TextFieldWrapper = styled(TextField)({
    margin: "8px",
    width: "60%",

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#27496D",
        borderWidth: "0.1rem",
      },
      "&:hover fieldset": {
        borderColor: "#27496D",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#27496D",
      },
    },
    "& .MuiFormLabel-root": {
      color: "#27496D",
    },
    "& .MuiInputBase-input": {
      color: "#27496D",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={8}>
            <Form onSubmit={handleSubmit}>
              <Typography
                variant="h3"
                sx={{ marginTop: "2rem", fontSize: "2rem" }}
              >
                SIGN UP AS
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: "2rem", marginBottom: "1rem" }}
              >
                A <span style={{ color: "#27496D" }}>VENDOR</span>
              </Typography>

              <TextFieldWrapper
                label="Bookstore Name"
                value={bookstoreName}
                onChange={(event) => setBookstoreName(event.target.value)}
              />
              <TextFieldWrapper
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextFieldWrapper
                label="Phone Number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
              <TextFieldWrapper
                label="Address"
                value={address}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
              <TextFieldWrapper
                label="BRN"
                value={brn}
                onChange={(event) => setBrn(event.target.value)}
              />
              <TextFieldWrapper
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <TextFieldWrapper
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreeTerms}
                    onChange={(event) => setAgreeTerms(event.target.checked)}
                    //   color="primary"
                  />
                }
                label="I agree to the terms and conditions"
              />
              <ButtonWrapper
                variant="contained"
                //   color="primary"
                type="submit"
                disabled={!agreeTerms}
              >
                Sign Up
              </ButtonWrapper>
            </Form>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default VendorSignUp;
