import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Who We Are</h1>
      <p>
        Welcome to BookFind, the centralized website that transforms your book
        search experience. With BookFind, you can effortlessly check book
        availability across multiple stores, find the nearest options based on
        your location, and enjoy a hassle-free search process. Discover new
        reads and explore the world of literature with ease. Start your book
        journey with BookFind today! Launched in July 2023.
      </p>
      <Footer/>
    </div>
  );
};

export default AboutUsPage;
