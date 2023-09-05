import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/bookfind-components/Navbar";
import TrendingBookCard from "../../components/bookfind-components/TrendingBookCard";
import Footer from "../../components/bookfind-components/Footer";
import { Button } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link as L } from "@mui/material/";
import Effect from "../../components/Effect";
import featureImg from "../../assets/Featuredbook.jpg";
import homeImg from "../../assets/home-img.png";
import '../../App.css';

const Home = ({ instance }) => {
  const [trendingBooksArr, setTrendingBooksArr] = useState([]);

  useEffect(() => {
    instance
      .get("/book/trending")
      .then((obj) => {
        setTrendingBooksArr(obj.data);
      })
      .catch(() => {
        setTrendingBooksArr([
          {
            error: "Fetch error",
          },
        ]);
      });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Navbar />
      <Grid container minHeight={"100vh"}>
        <Grid container>
          <Grid item className="homeContent" xs={12} sm={6} >
            <Typography variant="h5" align="left" sx={{ color: "#DAE1E7" }}>
              <span className="firstLine">Explore | Discover | Acquire</span>
              <br />
              <span className="secondLine">IT'S NOT JUST A <br />
              BOOKSTORE.
              <br /></span>
              <span className="thirdLine">It's a universe.</span>
            </Typography>
            <br />
            {/* <TextField
              label="Find a book"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            /> */}
            <Link to={`/books`}>
              <Button variant="contained" size="small"
              style={{
                // alignSelf: "center",
                backgroundColor: "#00909E",
                "&:hover": {
                  backgroundColor: "#00909E",
                },
                padding: "0.5rem ",
                margin: "2rem 0 4rem 0",
              }}>
                Search for Books
              </Button>
            </Link>
          </Grid>
          <Grid item className="homeImage" sx={{ height: 'auto', width: 'auto' }} xs={12} sm={12} lg={6}>
            <img
              src={homeImg}
              alt="Book Cover"
              width="50%" 
            />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container xs={12} xm={12} lg={12}>       */}
        {/* Trending Books */}
        <Typography className="BigText" variant="h4" align="center">
          <span>Trending</span>
        </Typography>
        <Typography className="trendbooks" variant="h4" align="center">
          <span>Trending Books</span>
        </Typography>
      {/* </Grid> */}

      <Grid className="cards" container spacing={2}>
        {trendingBooksArr.map((book) => (
          <Grid item lg={3} sm={6} xs={12}>
            <Link to="/book">
              <TrendingBookCard book={book} />
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Featured Book */}
      <Typography className="featuredbooks" variant="h4" align="center">
      <span>Featured Book</span>
      </Typography>
      <Grid container>
        <Grid item className="featuredImage" xs={12} xm={6} lg={6}>
          <img
            src={featureImg}
            alt="Book Cover"
            width="50%"
          />
        </Grid>
        <Grid item sx={{ itemAlign: 'center'}} xs={12} xm={6} lg={5}>
          <Typography variant="h5" sx={{ textAlign: 'justify', m: 1, 
          position: 'relative', left: '0', color: '#DAE1E7' }}>
            It was one of the most searing images of the twentieth century: 
            two young boys, two princes, walking behind their mother's coffin
            as the world watched in sorrow and horror. As Princess Diana was laid to rest,
            billions wondered what Prince William and Prince Harry must be thinking and 
            feeling and how their lives would play out from that point on.<br></br>
            <br></br>
            For Harry, this is that story at last.
          </Typography>

          <Typography sx={{position: 'relative', paddingTop: '2rem'}} variant="body1">
            <L href="/book">Learn more...</L>
          </Typography>
        </Grid>

        {/* Footer */}
        <Footer />
      </Grid>
      <Effect></Effect>
    </>
  );
};

export default Home;