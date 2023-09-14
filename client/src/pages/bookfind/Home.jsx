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
// import Effect from "../../components/Effect";
import featureImg from "../../assets/Featuredbook.jpg";
import homeImg from "../../assets/home-img.png";
// import '../../App.css';
import "./stars.css";
import loginImage from "../../assets/loginpage.png";

const stars = [];

for (let i = 0; i < 100; i++) {
  stars.push(
    <div
      className="star"
      key={i}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  );
}

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

  const styles = {
    container: {
      display: "flex",
      // height: "95vh",
      minHeight: "100vh",
      alignItems: "center",
    },
    root: {
      backgroundColor: "#142850",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // height: "100vh",
    },
    
  };
  

  return (
    <>
      {/* Hero Section */}
      <div>
        <Navbar />

        <Grid container spacing={2} style={styles.container}>
          {stars}
          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignContent="center"
            style={{ order: 1 }}
          >
            {/* Left grid content */}
            <div style={{ margin: "0 2rem" }}>
              <Typography variant="h4" align="left" sx={{ color: "#DAE1E7" }}>
                <span className="firstLine">Explore | Discover | Acquire</span>
                <br />
                <span class="secondLine">
                  IT'S NOT JUST A <br />
                  BOOKSTORE.
                  <br />
                </span>
                <span className="thirdLine">It's a universe.</span>
              </Typography>
              <Link to={`/books`}>
                <Button
                  variant="contained"
                  size="small"
                  style={{
                    // alignSelf: "center",
                    backgroundColor: "#00909E",
                    "&:hover": {
                      backgroundColor: "#00909E",
                    },
                    padding: "0.5rem ",
                    margin: "2rem 0 4rem 0",
                  }}
                >
                  Search for Books
                </Button>
              </Link>
            </div>
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignContent="center"
            style={{ order: window.innerWidth <= 960 ? -1 : 2 }}
          >
            {/* Right grid content */}
            <img
              src={loginImage}
              alt="Book Cover"
              width="60%"
              className="swing"
              style={{
                width: "60%",
                height: "auto",
                paddingBottom: "0",
                "@media (min-width: 960px)": {
                  width: "70%",
                  height: "70%",
                  margin: 0,
                },
              }}
            />
          </Grid>
        </Grid>

        {/* <Grid container minHeight={"100vh"}>
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
            <br /> */}
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
        {/* <Link to={`/books`}>
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
          </Grid> */}

        {/* <Grid item className="homeImage" sx={{ height: 'auto', width: 'auto' }} xs={12} sm={12} lg={6}>
            <img
              src={homeImg}
              alt="Book Cover"
              width="50%" 
            />
          </Grid>
        </Grid>
      </Grid> */}

        {/* <Grid container xs={12} xm={12} lg={12}>       */}
        {/* Trending Books */}
        {/* <Typography className="BigText" variant="h4" align="center">
        <span>Trending</span>
      </Typography> */}

        {/* <Typography className="trendbooks" variant="h4" align="center">
        <span>Trending Books</span>
      </Typography> */}
        {/* </Grid> */}

        <div style={{ padding: "3rem 0", backgroundColor: "#00909E" }}>
          <Typography variant="h4" class="h-trending heading" align="center">
            Trending Books
          </Typography>

          <Grid
            className="cards"
            container
            spacing={2}
            sx={{ padding: "2rem" }}
          >
            {trendingBooksArr.map((book) => (
              <Grid item lg={3} sm={6} xs={12}>
                <Link to="/book" style={{ textDecoration: "none" }}>
                  <TrendingBookCard book={book} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>

        {/* Featured Book */}
        {/* <Typography className="featuredbooks" variant="h4" align="center">
        <span>Featured Book</span>
      </Typography>
      <Grid container>
        <Grid item className="featuredImage" xs={12} xm={6} lg={6}>
          <img src={featureImg} alt="Book Cover" width="50%" />
        </Grid>
        <Grid
          item
          sx={{ itemAlign: "center", padding: "2rem" }}
          xs={12}
          xm={6}
          lg={5}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "justify",
              m: 1,
              position: "relative",
              left: "0",
              color: "#DAE1E7",
            }}
          >
            It was one of the most searing images of the twentieth century: two
            young boys, two princes, walking behind their mother's coffin as the
            world watched in sorrow and horror. As Princess Diana was laid to
            rest, billions wondered what Prince William and Prince Harry must be
            thinking and feeling and how their lives would play out from that
            point on.<br></br>
            <br></br>
            For Harry, this is that story at last.
          </Typography>

          <Typography
            sx={{ position: "relative", paddingTop: "2rem" }}
            variant="body1"
          >
            <L href="/featuredbook">Learn more...</L>
          </Typography>
        </Grid> */}

        <div style={{ padding: "2rem 0" }}>
          <Typography variant="h4" class="h-featured heading" align="center" py={2}>
            Featured Book
          </Typography>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              // height: "100vh",
              alignItems: "center",
            }}
          >
            <Grid
              container
              item
              xs={12}
              md={5}
              justifyContent="center"
              alignContent="center"
            >
              <img src={featureImg} alt="Book Cover" width="60%" />
            </Grid>

            <Grid
              container
              item
              xs={12}
              md={7}
              justifyContent="center"
              alignContent="center"
              px={6}
            >
              <Typography
                variant="h5"
                sx={{
                  // textAlign: "justify",
                  mr: 0,
                  ml: 6,
                  // position: "relative",
                  // left: "0",
                  color: "#DAE1E7",
                  fontSize: "1.4rem",
                }}
                align="justify"
              >
                It was one of the most searing images of the twentieth century:
                two young boys, two princes, walking behind their mother's
                coffin as the world watched in sorrow and horror. As Princess
                Diana was laid to rest, billions wondered what Prince William
                and Prince Harry must be thinking and feeling and how their
                lives would play out from that point on.<br></br>
                <br></br>
                For Harry, this is that story at last.
                <br />
                <br />
                <L class="learnmore" href="/featuredbook">Learn more...</L>
              </Typography>

              <Typography
                sx={{ position: "relative", paddingTop: "2rem" }}
                variant="body1"
              ></Typography>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      {/* </Grid> */}
      {/* <Effect></Effect> */}
    </>
  );
};

export default Home;
