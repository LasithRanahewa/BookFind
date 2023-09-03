import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleLogout = () => {
    setIsSignedIn(false);
    setAnchorEl(null);
  };

  const drawerItems = (
    <div
      sx={{
        position: "relative",
        width: "100vw",
        backgroundColor: "#142850",
        height: "100vh",
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List sx={{ width: "100vw"}} >
        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ color: "#DAE1E7", textDecoration: "none" }}
          >
            Home
          </Button>
        </ListItem>

        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/books"
            sx={{ color: "#DAE1E7", textDecoration: "none" }}
          >
            Books
          </Button>
        </ListItem>

        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/vendors"
            sx={{ color: "#DAE1E7", textDecoration: "none" }}
          >
            Vendors
          </Button>
        </ListItem>

        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ color: "#DAE1E7", textDecoration: "none" }}
          >
            About
          </Button>
        </ListItem>

        {isSignedIn ? (
          <>
            <ListItem>
              <Button
                to ="/profile"
                component={Link}
                color="inherit"
                // onClick={(event) => setAnchorEl(event.currentTarget)}
                sx={{ color: "#DAE1E7", textDecoration: "none" }}
              >
                Profile
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{ color: "#DAE1E7", textDecoration: "none" }}
              >
                Logout
              </Button>
            </ListItem>
          </>
        ) : (
          <ListItem>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{ color: "#DAE1E7", textDecoration: "none" }}
            >
              Login
            </Button>
          </ListItem>
        )}
      </List>
    </div>
  );

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ boxShadow: "none", border: "none", backgroundColor: "#142850" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#DAE17" }}>
            BookFind
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                sx={{ marginRight: 0 }}
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
                sx={{ width: "100vw" }}
              >
                {drawerItems}
              </Drawer>
            </>
          ) : (
            <div sx={{ display: "flex", alignItems: "center" }}>
              <Button
                color="inherit"
                component={Link}
                to="/"
                sx={{
                  color: "#DAE1E7",
                  textDecoration: "none",
                  marginRight: "16px",
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/books"
                sx={{
                  color: "#DAE1E7",
                  textDecoration: "none",
                  marginRight: "16px",
                }}
              >
                Books
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/vendors"
                sx={{
                  color: "#DAE1E7",
                  textDecoration: "none",
                  marginRight: "16px",
                }}
              >
                Vendors
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/about"
                sx={{
                  color: "#DAE1E7",
                  textDecoration: "none",
                  marginRight: "16px",
                }}
              >
                About
              </Button>
              {isSignedIn ? (
                <Button
                  color="inherit"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                  sx={{ color: "#DAE1E7", textDecoration: "none" }}
                >
                  <AccountCircle />
                </Button>
              ) : (
                <Button
                  color="inherit"
                  component={Link}
                  to="/login"
                  sx={{ color: "#DAE1E7", textDecoration: "none" }}
                >
                  Login
                </Button>
              )}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={() => setAnchorEl(null)}
                >
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
