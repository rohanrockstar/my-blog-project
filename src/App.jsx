import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogDetail from "./pages/BlogDetail";
import VideoUpload from "./pages/VideoUpload";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <Router>
      <Box
        sx={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/upload-video" element={<VideoUpload />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
