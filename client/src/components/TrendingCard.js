import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardcont: {
    backgroundColor: "#27496D",
    color: "#DAE1E7",
  },
}));

const TrendingCard = () => {
  const classes = useStyles();

  const rating = 4; 
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>&#9733;</span>);
  }

  return (
    <Card style={{ width: '80%' }}>
      <CardMedia
        component="img"
        height="300"
        image="https://source.unsplash.com/aZ_MmSmAcjg"
        alt="Book cover"
      />
      <CardContent className={classes.cardcont}>
        <Typography  component="div">
          Book Title
        </Typography>
        <Typography  component="div">
          Author
        </Typography>
        <div>{stars}</div>
        <Typography variant="body2" color="text.secondary">
          Book description
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrendingCard;