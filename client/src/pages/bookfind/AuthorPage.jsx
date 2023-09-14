import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

// import Rating from "@mui/material/Rating";

// import Button from "@mui/material/Button";

import Navbar from "../../components/bookfind-components/Navbar";

const AuthorPage = ({ instance }) => {

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
      padding: "0rem 3.5rem",
    },
    content:{
      // padding: " 0rem 4rem",
      color: "#DAE1E7",
      textAlign: "justify",
    },
    image:{
      width:"65%",
      justifyContent: "center",
      // paddingLeft: "4rem",
      // paddingTop: "4rem",
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
      paddingTop: "2rem",
      color: "#DAE1E7",
    },
    rating:{
      color:"#DAE1E7"
    },
  };


  const [searchParams] = useSearchParams();
  const [authorData, setAuthorData] = useState({});

  useEffect(() => {
    instance
      .post("/author/get", {
        id: searchParams.get("author"),
      })
      .then((obj) => {
        setAuthorData(obj.data);
      })
      .catch(() => {
        setAuthorData([
          {
            error: "Fetch error",
          },
        ]);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Grid container style={styles.container}>
        <Grid item xs={12} sm={4} style={styles.left}>
          {/* Content for the left side */}
          <img
            src={authorData.image}
            alt="Author Image"
            style={styles.image}
          />
        </Grid>
        <Grid item xs={12} sm={8} style={styles.right}>
          {/* Content for the right side */}
          <Typography variant="h4" gutterBottom style={styles.name}>
            {authorData.name}
          </Typography>
          <Typography variant="h6" gutterBottom style={styles.author}>
            {authorData.contactNo}
          </Typography>

          {/* <Rating name="book-rating" value={4.2} precision={0.01} readOnly /> */}
          <Typography variant="h6" gutterBottom style={styles.rating}>
            {authorData.email}
          </Typography>

          <Typography variant="body1" gutterBottom style={styles.span}>Description</Typography>
          <Typography variant="body1" gutterBottom style={styles.content}>
            {/* <Span style={styles.span}>Description</Span> */}
            
            
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            possimus vel cupiditate, iusto qui culpa quo pariatur suscipit?
            Architecto nam quisquam officia autem commodi, aliquid maxime veniam
            hic molestias soluta. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste veritatis quod non modi odio, natus sequi!
            Labore dolore similique animi illo alias officiis sunt ex, nesciunt,
            voluptas, pariatur beatae corrupti! */}

            {authorData.description}
          </Typography>

          {/* <Link to={`/availablebookstores?book=${bookData._id}`}>
            <Button variant="contained" color="primary" style={styles.button}>
              Find a Copy
            </Button>
          </Link> */}
        </Grid>
      </Grid>
    </>
  );
};

export default AuthorPage;
