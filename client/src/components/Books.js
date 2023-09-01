// import React, { useState } from 'react';
// import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import img from '../images/Book1.jpg'
// import { Button } from '@material-ui/core';
// import Table from './BookTable';

const useStyles = makeStyles((theme) => ({
  button: {
      margin: theme.spacing(1),
      width: '20ch',
      backgroundColor: ' #fc7100',
      '&:hover': {
          backgroundColor: ' #fc7100',
      },
  },
}));

const BookPage = (props) => {
  const classes = useStyles();
  const [rememberMe, setRememberMe] = useState(false);
  const rating = 4; // replace with rating value
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>&#9733;</span>);
  }
  return (
    <div>
      <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className='bookPgimg'>
              <img src={img}></img>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='bookPg'>
              <h1>Can you<br></br> love<br></br> someone<br></br> you can<br></br> never<br></br>touch</h1>
              <h2 className='title'>FIVE FEET APART</h2>
              <h2 className='author'>Rachel Lippincott | <span>{stars}</span></h2>
              <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Find A Copy
                </Button>
              {/* <p className = "BookPgpara">
                //Book Details
              </p> */}
              <Table></Table>
            </div>
          </Grid>
        </Grid>
      </div>
  )
}

export default BookPage