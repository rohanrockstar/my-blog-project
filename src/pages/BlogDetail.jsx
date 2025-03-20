import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardContent, CardMedia } from "@mui/material";

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <Container>
      <Card sx={{ mt: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={`https://source.unsplash.com/random/800x600?sig=${id}`}
          alt="Blog Image"
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Blog Title {id}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec 
            erat erat. Integer blandit nulla ut turpis pellentesque, a posuere 
            velit facilisis.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogDetail;