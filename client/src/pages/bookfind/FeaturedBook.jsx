import React from 'react';
import featured from "../../assets/Featuredbook.jpg";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Navbar from "../../components/bookfind-components/Navbar";


const FeaturedBook = () => {

  const styles={
    button:{
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
      marginTop: "4rem",
    },
    container:{
      paddingTop:"2rem",
    },
    left:{
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "3rem"
    },
    right:{
      padding: "4rem 3.5rem",
    },
    content:{
      color: "#DAE1E7",
      textAlign: "justify",
    },
    image:{
      width:"65%",
      justifyContent: "center",
    },
    name:{
      // color:"#DAE1E7",
      color: "#64CCC5",
      fontWeight: "bold",
      textShadow: "0.2rem 0.2rem 1rem #176B87",
      
    },
    author:{
      color:"#DAE1E7",
      fontWeight: "bold",
      fontSize: "1.6rem",   

    },
    span:{
      fontSize: "1.6rem",   
      paddingTop: "3rem",
      color: "#DAE1E7",
    },
    
  };


  return (
    <>
      <Navbar />
      <Grid container style={styles.container}>
        <Grid item xs={12} sm={4} style={styles.left}>
          {/* Content for the left side */}
          <img
            src={featured}
            alt="Book Cover"
            style={styles.image}
          />
        </Grid>
        <div class="vl"></div>
        <Grid item xs={12} sm={8} style={styles.right}>
          {/* Content for the right side */}
          <Typography variant="h4" gutterBottom style={styles.name}>
            SPARE
          </Typography>
          <Typography variant="h6" gutterBottom style={styles.author}>
            Prince Harry
          </Typography>
          <Rating name="book-rating" value={4.2} precision={0.01} readOnly />
          <Typography variant="body1" gutterBottom style={styles.span}>Description</Typography>
          <Typography variant="body1" gutterBottom style={styles.content}>
            {/* <Span style={styles.span}>Description</Span> */}
            
            Spare is a memoir by Prince Harry, Duke of Sussex, which was released on 10 January 2023. It was ghostwritten
            by J. R. Moehringer and published by Penguin Random House. It is 416 pages long and available in digital, paperback, 
            and hardcover formats and has been translated into fifteen languages. There is also a 15-hour audiobook edition, which 
            Harry narrates himself.
            Spare received generally mixed reviews from critics, some who praised Harry's openness but were critical of the inclusion
             of too many personal details. According to Guinness World Records, Spare became "the fastest selling non-fiction book of 
             all time" on the date of its release.
          </Typography>

        </Grid>
      </Grid>
    </>
  );
 
};

export default FeaturedBook;
