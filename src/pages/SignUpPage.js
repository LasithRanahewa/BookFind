import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import login_img from "../assets/loginpage.png"
import { TextField, Button, FormControl, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    form: {
        backgroundColor: '#142850',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    textField: {
        margin: theme.spacing(1),
        width: '40ch',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#18B1C8',
            },
            '&:hover fieldset': {
                borderColor: '#18B1C8',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#18B1C8',
            },
        },
        '& .MuiFormLabel-root': {
            color: '#DAE1E7',
        },
        '& .MuiInputBase-input': {
            color: '#DAE1E7',
        },
    },
    button: {
        margin: theme.spacing(1),
        width: '40ch',
        backgroundColor: '#18B1C8',
        '&:hover': {
            backgroundColor: '#18B1C8',
        },
    },
}));

const SignUpPage = () => {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
    };

    return (
        <Grid container spacing={2}>
            <Grid container item xs={12} md={6} justifyContent='center' alignContent='center'>
                <img src={login_img} style={{maxWidth: '50%', maxHeight: '50%' }}></img>
            </Grid>
            <Grid item xs={12} md={6}>
            <div>
        <form className={classes.form} onSubmit={handleSubmit}>
            <FormControl style={{ display: 'flex', flexDirection: 'column', color: '#DAE1E7'}}>
                <Typography variant="h4" gutterBottom style={{ textAlign: 'center', color: '#DAE1E7'}}>
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
                    Already have an account? <a href="/sign-in" style={{ color: '#18B1C8' }}>Sign in here</a>
                </Typography>
            </FormControl>
        </form>
        </div>
        </Grid>
        </Grid>
    );
};

export default SignUpPage;