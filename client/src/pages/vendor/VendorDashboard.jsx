import * as React from "react";
import {
  Grid,
  Drawer,
  List,
  ListItem,
  IconButton,
  useMediaQuery,
  Button,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import ReservationsDataGrid from "../../components/admin-components/ReservationsDataGrid";
import BooksGrid from "../../components/vendor-components/BooksGrid";
import VendorProfile from "../../components/vendor-components/VendorProfile";

const drawerWidth = 240;

const VendorDashboard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = React.useState(!isMobile);
  const [activeButton, setActiveButton] = React.useState("bookstore");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    {
      isMobile && toggleDrawer();
    }
  };

  const drawer = (
    <div style={{ width: drawerWidth }}>
      <List>
        <ListItem>
          <Button onClick={() => handleButtonClick("bookstore")} sx={{color: "#142850"}}>
            Bookstore Info
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => handleButtonClick("books")} sx={{color: "#142850"}}>Books</Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => handleButtonClick("reservations")} sx={{color: "#142850"}}>
            Reservations
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => handleButtonClick("logout")} sx={{color: "#142850"}}>Log Out</Button>
        </ListItem>
      </List>
    </div>
  );

  let rightGridComponent;
  switch (activeButton) {
    case "bookstore":
      rightGridComponent = <VendorProfile />;
      break;
    case "books":
      rightGridComponent = <BooksGrid />;
      break;
    case "reservations":
      rightGridComponent = <ReservationsDataGrid />;
      break;
    case "logout":
      rightGridComponent = <div>Log Out</div>;
      break;
    default:
      rightGridComponent = <div>Unknown button clicked</div>;
  }

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          padding: "1rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Typography variant="h4" sx={{color: "#142850"}}>Vendor Dashboard</Typography>
        </div>
        <Grid container sx={{ border: "1px solid black" }}>
          {!isMobile && (
            <Grid item xs={12} sm={4} sx={{ minHeight: "85vh" }}>
              {drawer}
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={isMobile ? 12 : 8}
            sx={{ outline: "1px solid black", minHeight: "85vh" }}
          >
            {isMobile && (
              <IconButton onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
            {rightGridComponent}
          </Grid>
          {isMobile && (
            <Drawer
              anchor="left"
              open={open}
              onClose={toggleDrawer}
              sx={{ width: drawerWidth }}
            >
              {drawer}
            </Drawer>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default VendorDashboard;
