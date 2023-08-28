import { Grid } from "@mui/material";

function Footer() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        Company
      </Grid>
      <Grid item xs={12} md={4}>
        Work with us
      </Grid>
      <Grid item xs={12} md={4}>
        Contact
      </Grid>
    </Grid>
  );
}

export default Footer;