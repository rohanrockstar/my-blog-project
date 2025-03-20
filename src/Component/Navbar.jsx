import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1E1E2F", boxShadow: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        {/* Logo / Branding */}
        <Typography variant="h5" fontWeight="bold">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            My Blog
          </Link>
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          {["Home", "Upload Video"].map((text, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={text === "Home" ? "/" : `/${text.toLowerCase().replace(" ", "-")}`}
              sx={{
                mx: 1,
                fontSize: "16px",
                textTransform: "none",
                transition: "0.3s",
                borderRadius: "8px",
                padding: "6px 16px",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              {text}
            </Button>
          ))}

          {/* Login Button (Royal Blue) */}
          <Button
            variant="contained"
            component={Link}
            to="/login"
            sx={{
              mx: 1,
              fontSize: "16px",
              textTransform: "none",
              boxShadow: 2,
              borderRadius: "8px",
              padding: "6px 16px",
              background: "linear-gradient(90deg, #2D46B9 0%, #1B3A91 100%)",
              color: "white",
              transition: "0.3s",
              "&:hover": {
                background: "linear-gradient(90deg, #344CB7 0%, #243B8D 100%)",
                boxShadow: "0px 4px 12px rgba(45, 70, 185, 0.5)",
              },
            }}
          >
            Login
          </Button>

          {/* Sign Up Button (Deep Purple) */}
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            sx={{
              mx: 1,
              fontSize: "16px",
              textTransform: "none",
              boxShadow: 2,
              borderRadius: "8px",
              padding: "6px 16px",
              background: "linear-gradient(90deg, #512DA8 0%, #311B92 100%)",
              color: "white",
              transition: "0.3s",
              "&:hover": {
                background: "linear-gradient(90deg, #5E35B1 0%, #4527A0 100%)",
                boxShadow: "0px 4px 12px rgba(81, 45, 168, 0.5)",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
