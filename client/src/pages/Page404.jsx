// import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Button, Container, Typography } from "@mui/material";
import image from "../assets/404image.png";


// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  maxHeight : "100vh",
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  
  const styles={
    body:{
      backgroundColor:"#021734",
    },
    // container:{
    //   backgroundColor:"#021734",
    // },
    heading:{
      color: "#64CCC5",
      fontSize: "4rem",
    },
    text:{
      color: "#DAE1E7",
    },
    button:{
      backgroundColor: "#00909E",
      "&:hover": {
        backgroundColor: "#00909E",
      },
    },
    image:{
      padding: 0,
      marginTop: 0,
      marginBottom: "4rem",
    },
  };


  return (
    <>
      {/* <Helmet>
        <title> 404 Page Not Found</title>
      </Helmet> */}

      <Container style={styles.container}>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph style={styles.heading}>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }} style={styles.text}>
            Sorry, we couldn't find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
            spelling.
          </Typography>

          <Box
            component="img"
            // src="https://via.placeholder.com/260x260"
            src={image}
            sx={{ height: 350, mx: 'auto', my: { xs: 5, sm: 10 } }}
            style={styles.image}
          />

          <Button to="/" size="large" variant="contained" component={RouterLink} style={styles.button}>
            Go to Home
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}
