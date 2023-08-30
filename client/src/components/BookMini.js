import React from 'react'
import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    btn: {
        margin: theme.spacing(1),
        width: "16ch",
        alignSelf: "center",
        backgroundColor: "#18B1C8",
        "&:hover": {
          backgroundColor: "#18B1C8",
        },
      },
}));

const BookMini = () => {
    const classes = useStyles();
    return (
        <Card sx={{ display: 'flex', margin: { xs: '1rem', sm: '1rem 10%' }}}>
            <CardMedia
                component="img"
                sx={{ width: 101, width: 151 }}
                image="https://via.placeholder.com/150*100"
                alt="Book Cover"
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <h1>Book Title</h1>
                <h2>Author</h2>
                <p>rating and published year</p>
                <Button variant="contained" color="primary" className={classes.btn}>Find a copy</Button>
            </CardContent>
        </Card>
    )
}

export default BookMini