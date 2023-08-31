import React from 'react'
import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'


const BookRec = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <p>img</p>
        </Grid>
        <Grid item xs={12} md={8}>
          <div>
            <p>
              In the heart of a bustling city, amidst the chaos of rushing
              pedestrians and honking cars, a small bookstore stood quietly on a
              narrow street corner. Its weathered facade boasted faded letters
              spelling out its name, "Whispering Pages." Inside, the air was
              filled with the intoxicating scent of old books, each telling its
              own story.
            </p>
            <Link to="/books">Learn more...</Link>
          </div>
        </Grid>
      </Grid>
  )
}

export default BookRec