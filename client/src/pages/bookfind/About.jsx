import React from "react";
import Footer from "../../components/bookfind-components/Footer";
import Navbar from "../../components/bookfind-components/Navbar";
import { Typography } from "@mui/material";



const About = () => {
  const styles={
    container: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      // flex: 1, // Allow content to grow and fill remaining space
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%", // Set width to 100%
      margin: "auto",
      color: "#DAE1E7",
      paddingTop: "3rem",
    },
    heading: {
      padding: 0,
      textShadow: "0.2rem 0.2rem 1rem #176B87",
      fontSize: "4.5rem",
      fontWeight: "1100",
      letterSpacing: "0.1rem",
      paddingTop: "0rem",
      textAlign: "center",
    },
    paragraph: {
      padding: "0rem 2rem 2rem 2rem",
      fontSize: "1.2rem",
      textAlign: "center",
      maxWidth: "50rem",
    },
    line: {
      width: "60%",
      // color: "#DAE1E7",
      borderColor: "#DAE1E7",
      margin: "2rem 0 4rem 0",
    },
    para:{
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <>
      <div style={{height:"85vh"}}>
        <Navbar />
        <div style={styles.container}>
          <div style={styles.content}>
            <h1 style={styles.heading}><b>WHO WE ARE</b></h1>
            <div style={styles.para}>
            <p style={styles.paragraph}>
            Welcome to BookFind, a centralized website that transforms your book
            search experience. With BookFind, you can effortlessly check book
            availability across multiple stores, find the nearest options based on
            your location, and enjoy a hassle-free search process. Discover new
            reads and explore the world of literature with ease. Start your book
            journey with BookFind today! Launched in July 2023.
            </p>
            </div>
            <hr style={styles.line} />
          </div>
        </div>
        <div style={{position:"absolute", bottom:0, width:"100%"}}> 
          <Footer />
        </div>
      </div>
      



        {/* <h2 style={styles.heading}>WHO WE ARE</h2>
        <p style={styles.paragraph}>
        Welcome to BookFind, the centralized website that transforms your book search experience. With BookFind, you can 
          effortlessly check book availability across multiple stores, find the nearest options based on your location, and 
          enjoy a hassle-free search process. Discover new reads and explore the world of literature with ease. Start your 
          book journey with BookFind today!Launched in July 2023.
        </p>

        <hr style={styles.line} /> */}
        
      {/* <Footer /> */}
    </>
  );
};

export default About;
