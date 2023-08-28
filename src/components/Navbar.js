import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BookFind
          </Typography>
          <Button color="inherit"><Link to="/">Home</Link></Button>
          <Button color="inherit"><Link to="/books">Books</Link></Button>
          <Button color="inherit"><Link to="/vendors">Vendors</Link></Button>
          <Button color="inherit"><Link to="/about">About</Link></Button>
          <Button color="inherit">{isSignedIn ? <Link to="/profile">Profile</Link>: <Link to="/sign-in">Login</Link>}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
