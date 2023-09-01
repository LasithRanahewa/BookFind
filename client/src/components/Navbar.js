import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { useMediaQuery } from "@mui/material"

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const drawerItems = (
    <div
      sx={{
        position: "relative",
        width: "600px",
        backgroundColor: "#142850",
        height: "100vh",
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/" sx={{ color: "#DAE1E7", textDecoration: "none" }}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/books" sx={{ color: "#DAE1E7", textDecoration: "none" }}>
          <ListItemText primary="Books" />
        </ListItem>
        <ListItem button component={Link} to="/vendors" sx={{ color: "#DAE1E7", textDecoration: "none" }}>
          <ListItemText primary="Vendors" />
        </ListItem>
        <ListItem button component={Link} to="/about" sx={{ color: "#DAE1E7", textDecoration: "none" }}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to={isSignedIn ? "/profile" : "/sign-in"} sx={{ color: "#DAE1E7", textDecoration: "none" }}>
          <ListItemText primary={isSignedIn ? "Profile" : "Login"} />
        </ListItem>
      </List>
    </div>
  );

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: "none", border: "none", backgroundColor: "#142850" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            BookFind
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" sx={{ marginRight: 0 }} color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
                <FaBars />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                {drawerItems}
              </Drawer>
            </>
          ) : (
            <>
            <div>
              <Button color="inherit" component={Link} to="/" sx={{ color: "#DAE1E7", textDecoration: "none" }}>
                Home
              </Button>
              <Button color="inherit" component={Link} to="/books" sx={{ color: "#DAE1E7", textDecoration: "none" }}>
                Books
              </Button>
              <Button color="inherit" component={Link} to="/vendors" sx={{ color: "#DAE1E7", textDecoration: "none" }}>
                Vendors
              </Button>
              <Button color="inherit" component={Link} to="/about" sx={{ color: "#DAE1E7", textDecoration: "none" }}>
                About
              </Button>
              <Button color="inherit" component={Link} to={isSignedIn ? "/profile" : "/sign-in"} sx={{ color: "#DAE1E7", textDecoration: "none" }}>
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
