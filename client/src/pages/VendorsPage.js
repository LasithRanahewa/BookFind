import React from "react";
import Navbar from "../components/Navbar";
import { TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import StoreMini from "../components/StoreMini";

const VendorsPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Navbar />
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <TextField
          label="Find a book"
          variant="outlined"
          size="small"
          sx={{
            mr: 1,
            borderRadius: "100%",
            margin: 1,
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
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: 1,
            width: "14ch",
            alignSelf: "center",
            backgroundColor: "#18B1C8",
            "&:hover": {
              backgroundColor: "#18B1C8",
            },
          }}
        >
          Search
        </Button>
      </div>

      <div style={{ height: "2rem" }}></div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <StoreMini />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StoreMini />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StoreMini />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StoreMini />
        </Grid>
      </Grid>
    </div>
  );
};

export default VendorsPage;