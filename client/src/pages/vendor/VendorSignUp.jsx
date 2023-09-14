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
  width: "60%",
});

const ButtonWrapper = styled(Button)({
  margin: "16px",
});

const VendorSignUp = () => {
  const [formData, setFormData] = useState({
    bookstoreName: "",
    email: "",
    phoneNumber: "",
    address: "",
    brn: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    profilePicture: null,
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form data:", formData);
    // Handle form submission here
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const ButtonWrapper = styled(Button)({
    margin: "16px",
    backgroundColor: "#27496D",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#193A5E",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={8} sx={{ backgroundColor: "#DAE1E7" }}>
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
                name="bookstoreName"
                value={formData.bookstoreName}
                onChange={onChange}
              />
              <TextFieldWrapper
                label="Email"
                name="email"
                value={formData.email}
                onChange={onChange}
              />
              <TextFieldWrapper
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={onChange}
              />
              <TextFieldWrapper
                label="Address"
                name="address"
                value={formData.address}
                onChange={onChange}
              />
              <TextFieldWrapper
                label="BRN"
                name="brn"
                value={formData.brn}
                onChange={onChange}
              />
              <TextFieldWrapper
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={onChange}
              />
              <TextFieldWrapper
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={onChange}
              />
              <TextFieldWrapper
                sx={{
                  margin: "8px",
                  width: "60%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      // borderColor: "#27496D",
                      borderWidth: "0.1rem",
                    },
                    "&:hover fieldset": {
                      // borderColor: "#27496D",
                    },
                    "&.Mui-focused fieldset": {
                      // borderColor: "#27496D",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    // color: "#27496D",
                  },
                  "& .MuiInputBase-input": {
                    // color: "#27496D",
                  },
                  "& .MuiInputBase-input[type=file]": {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    opacity: "0",
                    zIndex: "2",
                  },
                  "& .MuiInputBase-root": {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: "1",
                  },
                  "& .MuiInputBase-root::before": {
                    // color: "#27496D",
                    // content: '"Choose File"',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "0",
                  },
                }}
                label="Profile Picture"
                type="file"
                name="profilePicture"
                onChange={onChange}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    cchecked={formData.agreeTerms}
                    onChange={onChange}
                    name="agreeTerms"
                  />
                }
                label="I agree to the terms and conditions"
              />

              <ButtonWrapper
                variant="contained"
                type="submit"
                disabled={!formData.agreeTerms}
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
