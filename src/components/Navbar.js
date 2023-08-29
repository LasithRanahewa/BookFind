import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

const sty = createMuiTheme({
  palette: {
    primary: {
      main: '#142850',
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className={classes.root}> 
      <ThemeProvider theme={sty}>
        <AppBar position="static" style={{ boxShadow: 'none', border: 'none' }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              BookFind
            </Typography>
            <Button color="inherit" >
              <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="/books" style={{ textDecoration: "none" }}>Books</Link>
            </Button>
            <Button color="inherit">
              <Link to="/vendors" style={{ textDecoration: "none" }}>Vendors</Link>
            </Button>
            <Button color="inherit">
              <Link to="/about" style={{ textDecoration: "none" }}>About</Link>
            </Button>
            <Button color="inherit">
              {isSignedIn ? (
                <Link to="/profile" style={{ textDecoration: "none" }}>Profile</Link>
              ) : (
                <Link to="/sign-in" style={{ textDecoration: "none" }}>Login</Link>
              )}
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Navbar;

