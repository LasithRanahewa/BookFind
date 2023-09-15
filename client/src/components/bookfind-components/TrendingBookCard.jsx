import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import Rating from "@mui/material/Rating";

const TrendingBookCard = ({ book }) => {

  const styles = {
    name: {
      fontSize: "1.6rem",
      textShadow: "0.02rem 0.02rem 0.13rem #176B87",
      color: "#053B50",
      fontWeight: "bold",
    },
    author: {
      color: "#176B87",
    },
    publisher: {
      color: "#176B87",
      paddingBottom: "1rem",
    },
    content: {
      backgroundColor: "#EEEEEE",
    },
    
  };
  return (
    <Card style={{height: '100%'}}>
      <CardMedia
        component="img"
        height="auto"
        image={book.image}
        alt="Book cover"
      />
      <CardContent style={styles.content}>
        <Typography gutterBottom variant="h5" component="div" style={styles.name}>
          {book.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.author}>
          {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.publisher}>
          {book.publisher}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating name="read-only" value={4.3} precision={0.01} readOnly />
          <Typography sx={{ display: "flex" }} variant="body2" color="text.secondary">
            4.3 (120 reviews)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrendingBookCard;