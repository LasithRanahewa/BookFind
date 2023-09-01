import React from 'react'
import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { Button } from "@mui/material"

const BookMini = () => {
    return (
        <Card sx={{ display: 'flex', margin: { xs: '1rem', sm: '1rem 10%' }}}>
            <CardMedia
                component="img"
                sx={{ width: 101, width: 151 }}
                image="https://via.placeholder.com/150*100"
                alt="Book Cover"
            />
            <CardContent sx={{ flex: '1 0 auto', margin: 'auto', backgroundColor: '#18B1C8', width: '16ch', alignSelf: 'center', "&:hover": { backgroundColor: '#18B1C8' } }}>
                <h1>Book Title</h1>
                <h2>Author</h2>
                <p>rating and published year</p>
                <Button variant="contained" color="primary" sx={{ backgroundColor: '#18B1C8', "&:hover": { backgroundColor: '#18B1C8' } }}>Find a copy</Button>
            </CardContent>
        </Card>
    )
}

export default BookMini