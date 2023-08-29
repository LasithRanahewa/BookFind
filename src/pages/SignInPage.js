import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, FormControl, Typography, Link, Checkbox, FormControlLabel, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    form: {
        backgroundColor: '#142850',
        color: '#DAE1E7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    textField: {
        color: '#DAE1E7',
        margin: theme.spacing(1),
        width: '40ch',
    },
    button: {
        color: '#DAE1E7',
        margin: theme.spacing(1),
        width: '40ch',
    },
}));

const SignInPage = () => {
    const classes = useStyles();
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    return (
        <form className={classes.form}>
            <FormControl style={{ display: 'flex', flexDirection: 'column', color: '#DAE1E7'}}>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#DAE1E7'}}>
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
                            color="primary"
                        />
                    }
                    label="Remember Me"
                    style={{ marginLeft: '0' }}
                />
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Sign In
                </Button>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'center' }}>
                    No account? <Link href="/sign-up">Sign up here</Link>
                </Typography>
            </FormControl>
        </form>
    );
};

export default SignInPage;