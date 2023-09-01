import React from 'react'
import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { Button } from "@mui/material"

const styles = {
    btn: {
        margin: "1rem",
        width: "16ch",
        alignSelf: "center",
        backgroundColor: "#18B1C8",
        "&:hover": {
          backgroundColor: "#18B1C8",
        },
      },
};

const BookMini = () => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', margin: { xs: '1rem', sm: '1rem 10%' }, alignItems: 'center'}}>
            <CardMedia
                component="img"
                sx={{ width: 101, width: 151, pt: 3 }}
                image="https://via.placeholder.com/150"
                alt="Book Cover"
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <h1>Book Title</h1>
                <h2>Author</h2>
                <p>rating and published year</p>
                <Button variant="contained" color="primary" sx={styles.btn}>Find a copy</Button>
            </CardContent>
        </Card>
    )
}

export default BookMini