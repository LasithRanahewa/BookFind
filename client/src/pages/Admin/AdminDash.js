import React, { useState } from "react";
import {
    MenuItem,
    IconButton,
    Typography,
    Grid,
    Paper,
} from "@mui/material";
import { FaBook, FaStore, FaUser, FaSignOutAlt } from "react-icons/fa";
import BooksContent from "../../components/admin-components/BooksContent";

const useStyles = {
    container: {
        margin: (theme) => theme.spacing(4),
        padding: (theme) => theme.spacing(4),
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
};

const AdminDash = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("books");

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const renderSection2Content = () => {
        switch (selectedMenuItem) {
            case "books":
                return <BooksContent />;

            case "bookstores":
                return <Paper>Bookstores content</Paper>;
            case "users":
                return <Paper>Users content</Paper>;
            default:
                return null;
        }
    };

    return (
        <>
            <div sx={{...useStyles.title}}>
                <Typography variant="h6">
                    Admin Dashboard
                </Typography>
            </div>
            <Grid container spacing={2} sx={{...useStyles.bd}}>
                <Grid item xs={3} >
                    <MenuItem onClick={() => handleMenuItemClick("books")} sx={{...useStyles.item}}>
                        <IconButton sx={{...useStyles.icon}}>
                            <FaBook />
                        </IconButton>
                        <Typography sx={{...useStyles.txt}}>Books</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("bookstores")} sx={{...useStyles.item}}>
                        <IconButton sx={{...useStyles.icon}}>
                            <FaStore />
                        </IconButton>
                        <Typography sx={{...useStyles.txt}}>Bookstores</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("users")} sx={{...useStyles.item}}>
                        <IconButton sx={{...useStyles.icon}}>
                            <FaUser />
                        </IconButton>
                        <Typography sx={{...useStyles.txt}}>Users</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick(null)} sx={{...useStyles.item}}>
                        <IconButton sx={{...useStyles.icon}}>
                            <FaSignOutAlt />
                        </IconButton>
                        <Typography sx={{...useStyles.txt}}>Logout</Typography>
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
