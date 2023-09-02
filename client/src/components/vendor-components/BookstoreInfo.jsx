import React from "react";
import { Grid, Typography } from "@mui/material";

const BookstoreInfo = () => {
  return (
    <Grid container spacing={0} margin={4}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" gutterBottom>
          Bookstore Info
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <img src="https://via.placeholder.com/200x200" alt="Bookstore Pic" />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          Name: ABC Bookstore
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          Email: abc@gmail.com
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          Address: 123, ABC Street
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          Phone Number: 12345678
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          BRN: 12345678
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          Rating: 1
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          Description: Description 1
        </Typography>
      </Grid>
      
    </Grid>
  );
};

export default BookstoreInfo;
