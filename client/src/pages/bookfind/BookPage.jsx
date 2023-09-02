import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";

import Button from "@mui/material/Button";

import Navbar from "../../components/bookfind-components/Navbar";

const BookPage = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={4}>
          {/* Content for the left side */}
          <img
            src="https://via.placeholder.com/200"
            alt="Book Cover"
            style={{ width: "50%" }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          {/* Content for the right side */}
          <Typography variant="h4" gutterBottom>
            Book Title
          </Typography>
          <Typography variant="h6" gutterBottom>
            Author
          </Typography>
          <Rating name="book-rating" value={4.2} precision={0.01} readOnly />
          <Typography variant="body1" gutterBottom>
            Description
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            possimus vel cupiditate, iusto qui culpa quo pariatur suscipit?
            Architecto nam quisquam officia autem commodi, aliquid maxime veniam
            hic molestias soluta. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste veritatis quod non modi odio, natus sequi!
            Labore dolore similique animi illo alias officiis sunt ex, nesciunt,
            voluptas, pariatur beatae corrupti!
          </Typography>
          
          <Link to="/availablebookstores">
            <Button variant="contained" color="primary">
              Find a Copy
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default BookPage;
