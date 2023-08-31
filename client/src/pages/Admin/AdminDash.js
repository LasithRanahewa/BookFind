import React, { useState } from "react";
import {
    MenuItem,
    IconButton,
    Typography,
    makeStyles,
    Grid,
    Paper,
} from "@material-ui/core";
import { FaBook, FaStore, FaUser, FaSignOutAlt } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(4),
        padding: theme.spacing(4),
        // paddingBottom: "4%",
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
}));

const AdminDash = () => {
    const classes = useStyles();
    const [selectedMenuItem, setSelectedMenuItem] = useState("books");

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const renderSection2Content = () => {
        switch (selectedMenuItem) {
            case "books":
                return <Paper>Books content</Paper>;
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
            <div className={classes.title} >
                <Typography variant="h6">
                    Admin Dashboard
                </Typography>
            </div>
            <Grid container spacing={2} className={classes.bd}>
                <Grid item xs={3} >
                    <MenuItem onClick={() => handleMenuItemClick("books")} >
                        <IconButton className={classes.icon}>
                            <FaBook />
                        </IconButton>
                        <Typography className={classes.txt}>Books</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("bookstores")}>
                        <IconButton className={classes.icon}>
                            <FaStore />
                        </IconButton>
                        <Typography className={classes.txt}>Bookstores</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("users")}>
                        <IconButton className={classes.icon}>
                            <FaUser />
                        </IconButton>
                        <Typography className={classes.txt}>Users</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick(null)}>
                        <IconButton className={classes.icon}>
                            <FaSignOutAlt />
                        </IconButton>
                        <Typography className={classes.txt}>Logout</Typography>
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
