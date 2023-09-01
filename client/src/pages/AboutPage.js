import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import BI from "../assets/aboutusbg.png";

const AboutUsPage = () => {
  const styles = {
    // bg: {
    //   backgroundImage: `url(${BI})`, // Set BI as background image
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   height: "100vh",
    //   width: "100vw",
    //   position: "fixed",
    //   zIndex: -1,
    //   backgroundColor: "Transparent",
    //   // opacity: 0.5,
    // },
    container: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: 1, // Allow content to grow and fill remaining space
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%", // Set width to 100%
      margin: "auto",
      color: "#DAE1E7",
    },
    heading: {
      fontSize: "60px",
      letterSpacing: "0.8px",
      paddingTop: "4.6875rem",
    },
    paragraph: {
      fontSize: "1.2rem",
      lineHeight: "1.5",
      textAlign: "center",
      maxWidth: "800px",
    },
    line: {
      width: "60%",
      // color: "#DAE1E7",
      borderColor: "#DAE1E7",
      margin: "2rem 0 4rem 0",
    },
    
  };

  return (
    // <div style={styles.bg}>
    <>
      {/* <div style={styles.bg}> */}
      <Navbar />
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.heading}>Who We Are</h1>
          <p style={styles.paragraph}>
            Welcome to BookFind, a centralized website that transforms your book
            search experience. With BookFind, you can effortlessly check book
            availability across multiple stores, find the nearest options based on
            your location, and enjoy a hassle-free search process. Discover new
            reads and explore the world of literature with ease. Start your book
            journey with BookFind today! Launched in July 2023.
          </p>
          <hr style={styles.line} />
        </div>
        <div style={{position:"absolute", bottom:0, width:"100%"}}>
        <Footer />
        </div>
        
      </div>
      {/* </div> */}
    </>
  );
};

export default AboutUsPage;
