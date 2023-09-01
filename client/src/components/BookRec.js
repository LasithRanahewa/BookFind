<<<<<<< HEAD:src/components/BookRec.js
import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import img from '../images/Book1.jpg'
import "../index.css";
=======
import React from 'react'
import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'

>>>>>>> 39c8a363b3ecc85a2bfab90ac1fd68b4bf2ef9b9:client/src/components/BookRec.js

const BookRec = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className='bookImage'>
            <img src={img}></img>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='bookPara'>
            <h1>THE<br></br> AWARD<br></br> WINNING<br></br> BEST<br></br> SELLER</h1>
            <p className = "BookRecord">
              "In the heart of a bustling city,<br></br> amidst the chaos of rushing<br></br>
              pedestrians and honking cars, a small<br></br> bookstore<br></br> stood quietly on a
              narrow street corner.<br></br> Its weathered facade<br></br> boasted faded letters
              spelling out its<br></br> name,<br></br> "Whispering Pages." Inside, the air<br></br> was
              filled with the<br></br> intoxicating scent of old books, <br></br>each telling its
              own story."
            </p>
            <Link className='learnMore' to="/Books">Learn more...</Link>
          </div>
        </Grid>
      </Grid>
  )
}

export default BookRec