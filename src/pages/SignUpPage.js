import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, FormControl, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    textField: {
        margin: theme.spacing(1),
        width: '40ch',
    },
    button: {
        margin: theme.spacing(1),
        width: '40ch',
    },
}));

const SignUpPage = () => {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <FormControl>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
                    Sign Up
                </Typography>
                <TextField
                    className={classes.textField}
                    label="Name"
                    variant="outlined"
                    type="text"
                    required
                />
                <TextField
                    className={classes.textField}
                    label="Email"
                    variant="outlined"
                    type="email"
                    required
                />
                <TextField
                    className={classes.textField}
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                />
                <TextField
                    className={classes.textField}
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    required
                />
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Sign Up
                </Button>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'center' }}>
                    Already have an account? <a href="/sign-in">Sign in here</a>
                </Typography>
            </FormControl>
        </form>
    );
};

export default SignUpPage;