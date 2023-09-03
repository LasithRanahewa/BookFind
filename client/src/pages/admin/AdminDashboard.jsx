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

import BookstoresDataGrid from "../../components/admin-components/BookstoresDataGrid";
import ReservationsDataGrid from "../../components/admin-components/ReservationsDataGrid";
import UsersDataGrid from "../../components/admin-components/UsersDataGrid";

const AdminDashboard = ({ instance }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = React.useState(!isMobile);
  const [activeButton, setActiveButton] = React.useState("bookstores");

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
    <div style={{ width: "100vw" }}>
      <List>
        <ListItem>
          <Button onClick={() => handleButtonClick("bookstores")}>
            Bookstores
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => handleButtonClick("reservations")}>
            Reservations
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => handleButtonClick("users")}>Users</Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => handleButtonClick("logout")}>Log Out</Button>
        </ListItem>
      </List>
    </div>
  );

  let rightGridComponent;
  switch (activeButton) {
    case "bookstores":
      rightGridComponent = <BookstoresDataGrid instance={instance} />;
      break;
    case "reservations":
      rightGridComponent = <ReservationsDataGrid instance={instance} />;
      break;
    case "users":
      rightGridComponent = <UsersDataGrid instance={instance} />;
      break;
    case "logout":
      rightGridComponent = <div>Log Out</div>;
      break;
    default:
      rightGridComponent = <div>Unknown button clicked</div>;
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">Admin Dashboard</Typography>
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
          <Drawer anchor="left" open={open} onClose={toggleDrawer}>
            {drawer}
          </Drawer>
        )}
      </Grid>
    </>
  );
};

export default AdminDashboard;
