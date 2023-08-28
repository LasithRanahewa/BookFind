import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const TrendingCard = () => {
  const rating = 4; // replace with rating value
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book Title
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
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