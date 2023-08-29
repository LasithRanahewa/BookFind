import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import login_img from "../assets/loginpage.png"
import { TextField, Button, FormControl, Typography, Link, Checkbox, FormControlLabel } from '@material-ui/core';

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
    checkbox: {
        color: '#18B1C8',
        '&$checked': {
            color: '#18B1C8',
        },
    },
    checked: {},
}));

const SignInPage = () => {
    const classes = useStyles();
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    return (
        <Grid container spacing={2}>
            <Grid container item xs={12} md={6} justifyContent='center' alignContent='center'>
                <img src={login_img} style={{maxWidth: '50%', maxHeight: '50%' }}></img>
            </Grid>
            <Grid item xs={12} md={6}>
            <div>
            <form className={classes.form}>
            <FormControl style={{ display: 'flex', flexDirection: 'column', color: '#DAE1E7'}}>
                <Typography variant="h4" gutterBottom style={{ textAlign: 'center', color: '#DAE1E7'}}>
                    Sign In
                </Typography>
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
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                            name="rememberMe"
                            classes={{
                                root: classes.checkbox,
                                checked: classes.checked,
                            }}
                        />
                    }
                    label="Remember Me"
                    style={{ marginLeft: '0' }}
                />
                <Button
                    className={classes.button}
                    variant="contained"
                    color="#18B1C8"
                    type="submit"
                >
                    Sign In
                </Button>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'center' }}>
                    No account? <Link href="/sign-up" style={{ color: '#18B1C8' }}>Sign up here</Link>
                </Typography>
            </FormControl>
            </form>
            </div>
            </Grid>
        </Grid>
    );
};

export default SignInPage;