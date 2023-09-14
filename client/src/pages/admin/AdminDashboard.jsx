import * as React from "react";
import {
  Grid,
  List,
  ListItem,
  Button,
  Typography,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import BookstoresDataGrid from "../../components/admin-components/BookstoresDataGrid";
import ReservationsDataGrid from "../../components/admin-components/ReservationsDataGrid";
import UsersDataGrid from "../../components/admin-components/UsersDataGrid";
import AuthorsGrid from "../../components/admin-components/AuthorsGrid";

const AdminDashboard = ({ instance }) => {
  const [activeButton, setActiveButton] = React.useState("bookstores");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  let rightGridComponent;
  switch (activeButton) {
    case "bookstores":
      rightGridComponent = <BookstoresDataGrid instance={instance} />;
      break;
    case "authors":
      rightGridComponent = <AuthorsGrid instance={instance} />;
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

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 60,
    height: 60,
    margin: "auto",
    marginBottom: theme.spacing(2),
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#142850",
    color: "white",
    "&:hover": {
      backgroundColor: "#1f4068",
    },
  }));

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          padding: "1rem",
        }}
      >
        <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
          <StyledAvatar alt="Admin" src="/static/images/avatar/1.jpg" />
          <Typography variant="h4" sx={{ textAlign: "center", color: "#142850" }}>
            Admin Dashboard
          </Typography>
        </Grid>
        <Grid container sx={{ border: "1px solid #d3d3d3", borderRadius: "10px" }}>
          <Grid
            item
            xs={12}
            sx={{ outline: "1px solid #d3d3d3", minHeight: "85vh" }}
          >
            <Box sx={{ padding: "1rem" }}>
              <StyledButton onClick={() => handleButtonClick("bookstores")} sx={{ marginRight: "1rem" }}>
                Bookstores
              </StyledButton>
              <StyledButton onClick={() => handleButtonClick("authors")} sx={{ marginRight: "1rem" }}>
                Authors
              </StyledButton>
              <StyledButton onClick={() => handleButtonClick("reservations")} sx={{ marginRight: "1rem" }}>
                Reservations
              </StyledButton>
              <StyledButton onClick={() => handleButtonClick("users")} sx={{ marginRight: "1rem" }}>
                Users
              </StyledButton>
              <StyledButton onClick={() => handleButtonClick("logout")}>Log Out</StyledButton>
            </Box>
            <Divider />
            <Box sx={{ padding: "1rem" }}>{rightGridComponent}</Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminDashboard;
