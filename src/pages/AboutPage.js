import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "80%",
      margin: "auto",
    },
    heading: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: "1.5",
      textAlign: "center",
      maxWidth: "800px",
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Who We Are</h1>
        <p style={styles.paragraph}>
          Welcome to BookFind, a centralized website that transforms your book
          search experience. With BookFind, you can effortlessly check book
          availability across multiple stores, find the nearest options based on
          your location, and enjoy a hassle-free search process. Discover new
          reads and explore the world of literature with ease. Start your book
          journey with BookFind today! Launched in July 2023.
        </p>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;