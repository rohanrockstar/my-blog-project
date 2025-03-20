import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{
      backgroundColor: "#1976d2",
      color: "white",
      py: 3,
      mt: 4,
      textAlign: "center",
      width: "99vw",
      overflowY:"hidden"
    }}>
      <Container maxWidth="xl">
        <Typography variant="body1">© {new Date().getFullYear()} Blogging App. All rights reserved.</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>Privacy Policy</Link>
          |
          <Link href="#" color="inherit" sx={{ mx: 1 }}>Terms of Service</Link>
          |
          <Link href="#" color="inherit" sx={{ mx: 1 }}>Contact Us</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;