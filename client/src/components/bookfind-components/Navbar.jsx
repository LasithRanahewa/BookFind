import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

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
      <List sx={{ width: "100vw" }}>
        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              color: location.pathname === "/" ? "#00909E" : "#DAE1E7",
              fontWeight: location.pathname === "/" ? "bold" : "normal",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Home
          </Button>
        </ListItem>

        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/books"
            sx={{
              color: location.pathname === "/books" ? "#00909E" : "#DAE1E7",
              fontWeight: location.pathname === "/books" ? "bold" : "normal",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Books
          </Button>
        </ListItem>

        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/vendors"
            sx={{
              color: location.pathname === "/vendors" ? "#00909E" : "#DAE1E7",
              fontWeight: location.pathname === "/vendors" ? "bold" : "normal",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Vendors
          </Button>
        </ListItem>

        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              color: location.pathname === "/about" ? "#00909E" : "#DAE1E7",
              fontWeight: location.pathname === "/about" ? "bold" : "normal",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            About
          </Button>
        </ListItem>

        {isSignedIn ? (
          <>
            <ListItem>
              <Button
                color="inherit"
                component={Link}
                to="/profile"
                sx={{
                  color:
                    location.pathname === "/profile" ? "#00909E" : "#DAE1E7",
                    fontWeight: location.pathname === "/profile" ? "bold" : "normal",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Profile
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{
                  color: "#DAE1E7",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
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
              sx={{
                color: location.pathname === "/login" ? "#00909E" : "#DAE1E7",
                fontWeight: location.pathname === "/login" ? "bold" : "normal",
                textDecoration: "none",
                fontSize: "1rem",
              }}
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
                PaperProps={{
                  sx: {
                    backgroundColor: "#142850",
                  },
                }}
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
                  color: location.pathname === "/" ? "#00909E" : "#DAE1E7",
                  fontWeight: location.pathname === "/" ? "bold" : "normal",
                  fontSize: "1rem",
                  textDecoration: "none",
                  marginRight: "1.5rem",
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/books"
                sx={{
                  color: location.pathname === "/books" ? "#00909E" : "#DAE1E7",
                  fontWeight: location.pathname === "/books" ? "bold" : "normal",
                  fontSize: "1rem",
                  textDecoration: "none",
                  marginRight: "1.5rem",
                }}
              >
                Books
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/vendors"
                sx={{
                  color:
                    location.pathname === "/vendors" ? "#00909E" : "#DAE1E7",
                    fontWeight: location.pathname === "/vendors" ? "bold" : "normal",
                  fontSize: "1rem",
                  textDecoration: "none",
                  marginRight: "1.5rem",
                }}
              >
                Vendors
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/about"
                sx={{
                  color: location.pathname === "/about" ? "#00909E" : "#DAE1E7",
                  fontWeight: location.pathname === "/about" ? "bold" : "normal",
                  fontSize: "1rem",
                  textDecoration: "none",
                  marginRight: "1rem",
                  fontSize: "1rem",
                }}
              >
                About
              </Button>
              {isSignedIn ? (
                <Button
                  color="inherit"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                  sx={{
                    color: "#DAE1E7",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  <AccountCircle />
                </Button>
              ) : (
                <Button
                  color="inherit"
                  component={Link}
                  to="/login"
                  sx={{
                    color:
                      location.pathname === "/login" ? "#00909E" : "#DAE1E7",
                      fontWeight: location.pathname === "/login" ? "bold" : "normal",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  Login
                </Button>
              )}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                PaperProps={{
                  sx: {
                    backgroundColor: "#00909E",
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={() => setAnchorEl(null)}
                  sx={{
                    color:
                      location.pathname === "/profile" ? "#142850" : "#DAE1E7",
                    fontWeight: location.pathname === "/profile" ? "bold" : "normal",
                    textDecoration: "none",
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={handleLogout}
                  sx={{ color: "#DAE1E7", textDecoration: "none" }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
