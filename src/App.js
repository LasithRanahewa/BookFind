import React from "react";
import Navbar from "./components/Navbar";

// import { Grid } from "@material-ui/core";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

import HeroContent from "./components/HeroContent";
import BookRec from "./components/BookRec";

import Footer from "./components/Footer";
import TrendingBooks from "./components/TrendingBooks";
// import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <TrendingBooks />
      <BookRec />
      <Footer style={{ position: "fixed", bottom: 0, width: "100%" }} />
    </div>
  );
};

export default App;
