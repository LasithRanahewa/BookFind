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
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

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
        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ color: "#DAE1E7", textDecoration: "none" }}
          >
            <Typography
              variant="button"
              sx={{ color: "#DAE1E7", textDecoration: "none" }}
            >
              Home
            </Typography>
          </Button>
        </ListItem>

        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/books"
            sx={{ color: "#DAE1E7", textDecoration: "none" }}
          >
            <Typography
              variant="button"
              sx={{ color: "#DAE1E7", textDecoration: "none" }}
            >
              Books
            </Typography>
          </Button>
        </ListItem>
        
        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/bookstores"
            sx={{ color: "#DAE1E7", textDecoration: "none" }}
          >
            <Typography
              variant="button"
              sx={{ color: "#DAE1E7", textDecoration: "none" }}
            >
              Vendors
            </Typography>
          </Button>
        </ListItem>

        <ListItem>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ color: "#DAE1E7", textDecoration: "none" }}
          >
            <Typography
              variant="button"
              sx={{ color: "#DAE1E7", textDecoration: "none" }}
            >
              About
            </Typography>
          </Button>
        </ListItem>

        <ListItem
          button
          component={Link}
          to={isSignedIn ? "/profile" : "/login"}
          sx={{ color: "#DAE1E7", textDecoration: "none" }}
        >
          <ListItemText primary={isSignedIn ? "Profile" : "Login"} />
        </ListItem>
      </List>
    </div>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ boxShadow: "none", border: "none", backgroundColor: "#142850" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 , color:"#DAE17"}}>
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
              >
                {drawerItems}
              </Drawer>
            </>
          ) : (
            <>
              <div>
                <Button
                  color="inherit"
                  component={Link}
                  to="/"
                  sx={{ color: "#DAE1E7", textDecoration: "none" }}
                >
                  <Typography
                    variant="button"
                    sx={{ color: "#DAE1E7", textDecoration: "none" }}
                  >
                    Home
                  </Typography>
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/books"
                  sx={{ color: "#DAE1E7", textDecoration: "none" }}
                >
                  <Typography
                    variant="button"
                    sx={{ color: "#DAE1E7", textDecoration: "none" }}
                  >
                    Books
                  </Typography>
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/bookstores"
                  sx={{ color: "#DAE1E7", textDecoration: "none" }}
                >
                  <Typography
                    variant="button"
                    sx={{ color: "#DAE1E7", textDecoration: "none" }}
                  >
                    Vendors
                  </Typography>
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/about"
                  sx={{ color: "#DAE1E7", textDecoration: "none" }}
                >
                  <Typography
                    variant="button"
                    sx={{ color: "#DAE1E7", textDecoration: "none" }}
                  >
                    About
                  </Typography>
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to={isSignedIn ? "/profile" : "/login"}
                  sx={{ color: "#DAE1E7", textDecoration: "none" }}
                >
                  <Typography
                    variant="button"
                    sx={{ color: "#DAE1E7", textDecoration: "none" }}
                  >
                    {isSignedIn ? "Profile" : "Login"}
                  </Typography>
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
