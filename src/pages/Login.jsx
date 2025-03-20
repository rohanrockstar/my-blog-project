import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with: ", email, password);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Container maxWidth="sm" sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Box>
      </Container>

     
    </Box>
  );
};

export default Login;
