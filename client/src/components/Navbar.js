import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { useMediaQuery } from '@material-ui/core';

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
  nav: {
    boxShadow: "none",
    border: "none",
    backgroundColor: "#142850",
  },
  txt: {
    color: "#DAE1E7",
    textDecoration: "none"
  },
  drawer: {
    position: "relative",
    width: "600px",
    backgroundColor: "#142850",
    height: "100vh",
  },
  mobileTitle: {
    flexGrow: 1,
    textAlign: "center",
  },
  mobileMenuButton: {
    marginRight: theme.spacing(0),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const drawerItems = (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/" className={classes.txt}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/books" className={classes.txt}>
          <ListItemText primary="Books" />
        </ListItem>
        <ListItem button component={Link} to="/vendors" className={classes.txt}>
          <ListItemText primary="Vendors" />
        </ListItem>
        <ListItem button component={Link} to="/about" className={classes.txt}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to={isSignedIn ? "/profile" : "/sign-in"} className={classes.txt}>
          <ListItemText primary={isSignedIn ? "Profile" : "Login"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BookFind
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <FaBars />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerItems}
              </Drawer>
            </>
          ) : (
            <>
            <div>
              <Button color="inherit" component={Link} to="/" className={classes.txt}>
                Home
              </Button>
              <Button color="inherit" component={Link} to="/books" className={classes.txt}>
                Books
              </Button>
              <Button color="inherit" component={Link} to="/vendors" className={classes.txt}>
                Vendors
              </Button>
              <Button color="inherit" component={Link} to="/about" className={classes.txt}>
                About
              </Button>
              <Button color="inherit" component={Link} to={isSignedIn ? "/profile" : "/sign-in"} className={classes.txt}>
                {isSignedIn ? "Profile" : "Login"}
              </Button>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
