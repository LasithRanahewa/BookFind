import React from 'react';
import { Grid } from "@mui/material"
import login_img from "../assets/loginpage.png"
import { TextField, Button, FormControl, Typography } from "@mui/material"

const SignUpPage = () => {
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
            <div sx={{
                backgroundColor: '#142850',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
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
                '& .MuiButton-containedPrimary': {
                    margin: 'theme.spacing(1)',
                    width: '40ch',
                    alignSelf: 'center',
                    backgroundColor: '#18B1C8',
                    '&:hover': {
                        backgroundColor: '#18B1C8',
                    },
                },
                '& .MuiTypography-h4': {
                    textAlign: 'center',
                    color: '#DAE1E7',
                },
                '& .MuiTypography-body1': {
                    textAlign: 'center',
                },
                '& a': {
                    color: '#18B1C8',
                },
                '& .MuiTextField-root': {
                    margin: 'theme.spacing(1)',
                    width: '40ch',
                },
            }}>
        <form onSubmit={handleSubmit}>
            <FormControl style={{ display: 'flex', flexDirection: 'column', color: '#DAE1E7'}}>
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <TextField
                    label="Name"
                    variant="outlined"
                    type="text"
                    required
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    required
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                />
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    required
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Sign Up
                </Button>
                <Typography variant="body1" gutterBottom>
                    Already have an account? <a href="/sign-in">Sign in here</a>
                </Typography>
            </FormControl>
        </form>
        </div>
        </Grid>
        </Grid>
    );
};

export default SignUpPage;