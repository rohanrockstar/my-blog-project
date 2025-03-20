import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Button, Box, Grid, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="xl"> {/* ✅ Large width set kiya */}
      {/* Hero Section */}
      <Box
        textAlign="center"
        py={6}
        borderRadius={3}
        boxShadow={3}
        sx={{
          background: "linear-gradient(135deg, #ECE9E6 0%, #FFFFFF 100%)",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom color="#2E3B55">
          Welcome to My Blog
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Explore amazing blogs and share your thoughts with the world!
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #4B79A1 0%, #283E51 100%)",
            color: "white",
            "&:hover": { background: "linear-gradient(90deg, #283E51 0%, #4B79A1 100%)" },
          }}
          component={Link}
          to="/signup"
          size="large"
        >
          Get Started
        </Button>
      </Box>

      {/* Blog Listing */}
      <Grid2 container spacing={4} mt={4} justifyContent="center"> {/* ✅ Center align kiya */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((post) => (
          <Grid2 item xs={12} sm={6} md={4} lg={4} key={post}> {/* ✅ Fixed grid */}
            <Card
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                boxShadow: 5,
                overflow: "hidden",
                backgroundColor: "#F8F9FA",
                "&:hover": { boxShadow: 8, transform: "scale(1.03)" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={`https://source.unsplash.com/400x300/?technology,writing&sig=${post}`}
                alt="Blog Thumbnail"
                sx={{
                  filter: "brightness(90%)",
                  transition: "0.3s",
                  "&:hover": { filter: "brightness(100%)" },
                }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="#2E3B55">
                  Blog Title {post}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Short description of the blog post. Read more to explore.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  component={Link}
                  to={`/blog/${post}`}
                  sx={{
                    background: "linear-gradient(90deg, #2C3E50 0%, #4CA1AF 100%)",
                    color: "white",
                    "&:hover": { background: "linear-gradient(90deg, #4CA1AF 0%, #2C3E50 100%)" },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Home;
