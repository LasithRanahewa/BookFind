import React, { useState } from "react";
import {
    MenuItem,
    IconButton,
    Typography,
    Grid,
    Paper,
} from "@mui/material"
import { FaBook, FaStore, FaCheck, FaSignOutAlt } from "react-icons/fa";

const useStyles = () => ({
    container: {
        margin: 4,
        padding: 4,
    },
    item: {
        container: {
            direction: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    title: {
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#DAE1E7"
    },
    txt:{
        color: "#DAE1E7"
    },
    icon: {
        color: "#DAE1E7"
    },
    bd: {
        borderLeft: "solid 2px #DAE1E7",
        minHeight: "100vh"
    }
});

const AdminDash = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("books");

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const renderSection2Content = () => {
        switch (selectedMenuItem) {
            case "profile":
                return <Paper>Vendor Profile</Paper>;
            case "books":
                return <Paper>Books content</Paper>;
            case "reservations":
                return <Paper>Reservations</Paper>;
            default:
                return null;
        }
    };

    return (
        <>
            <div sx={useStyles().title} >
                <Typography variant="h6">
                    Vendor Dashboard
                </Typography>
            </div>
            <Grid container spacing={2} sx={useStyles().bd}>
                <Grid item xs={3} >
                <MenuItem onClick={() => handleMenuItemClick("profile")}>
                        <IconButton sx={useStyles().icon}>
                            <FaStore />
                        </IconButton>
                        <Typography sx={useStyles().txt}>Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("books")} >
                        <IconButton sx={useStyles().icon}>
                            <FaBook />
                        </IconButton>
                        <Typography sx={useStyles().txt}>Books</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("reservations")}>
                        <IconButton sx={useStyles().icon}>
                            <FaCheck />
                        </IconButton>
                        <Typography sx={useStyles().txt}>Reservations</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick(null)}>
                        <IconButton sx={useStyles().icon}>
                            <FaSignOutAlt />
                        </IconButton>
                        <Typography sx={useStyles().txt}>Logout</Typography>
                    </MenuItem>
                </Grid>
                <Grid item xs={9}>
                    {renderSection2Content()}
                </Grid>
            </Grid>
        </>
    );
};

export default AdminDash;
