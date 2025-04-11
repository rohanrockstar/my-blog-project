import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  Snackbar,
  Alert,  
  Card,
  CardMedia,
  CardActions,
  IconButton,
  CircularProgress,
  Chip,
  TextField,
  Grid2,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const UploadPage = () => {
  const [files, setFiles] = useState(() => {
    const savedFiles = localStorage.getItem("uploadedFiles");
    return savedFiles ? JSON.parse(savedFiles) : [];
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    localStorage.setItem("uploadedFiles", JSON.stringify(files));
  }, [files]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
      caption: "",
      tags: [], // ✅ Tags Array
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    event.target.value = "";
  };

  const handleUpload = () => {
    if (files.length > 0) {
      setUploading(true);
      setTimeout(() => {
        setSnackbarMessage("Files uploaded successfully!");
        setSnackbarSeverity("success");
        setUploading(false);
        setOpenSnackbar(true);
      }, 2000);
    } else {
      setSnackbarMessage("Please select at least one file to upload.");
      setSnackbarSeverity("warning");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
      return updatedFiles;
    });
  };

  const handleCaptionChange = (index, newCaption) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.map((file, i) =>
        i === index ? { ...file, caption: newCaption } : file
      );
      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
      return updatedFiles;
    });
  };

  const handleTagAdd = (index, tag) => {
    if (tag.trim() === "") return;
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.map((file, i) =>
        i === index ? { ...file, tags: [...file.tags, tag] } : file
      );
      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
      return updatedFiles;
    });
  };

  const handleTagDelete = (index, tagToRemove) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.map((file, i) =>
        i === index ? { ...file, tags: file.tags.filter((tag) => tag !== tagToRemove) } : file
      );
      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
      return updatedFiles;
    });
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" justifyContent="center" alignItems="center">
      <Container maxWidth="md" sx={{ textAlign: "center", flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Upload Your Photos & Videos
        </Typography>
        <input
          accept="video/*,image/*"
          type="file"
          multiple
          style={{ display: "none" }}
          id="file-upload"
          onChange={handleFileChange}
        />
        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          <label htmlFor="file-upload">
            <Button variant="contained" color="primary" component="span">
              Select Files
            </Button>
          </label>
          <Button variant="contained" color="secondary" onClick={handleUpload} disabled={uploading}>
            {uploading ? <CircularProgress size={24} color="inherit" /> : "Upload"}
          </Button>
        </Stack>

        {files.length > 0 && (
          <Grid2 container spacing={2} mt={3} justifyContent="center">
            {files.map((file, index) => (
              <Grid2 item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden", position: "relative", p: 2 }}>
                  {file.type === "video" ? (
                    <CardMedia component="video" controls src={file.url} sx={{ height: 200, borderRadius: "8px" }} />
                  ) : (
                    <CardMedia component="img" src={file.url} sx={{ height: 200, objectFit: "cover", borderRadius: "8px" }} />
                  )}
                  <Box sx={{ mt: 1 }}>
                    <Typography
                      contentEditable
                      suppressContentEditableWarning
                      sx={{
                        fontSize: "14px",
                        color: "gray",
                        minHeight: "20px",
                        cursor: "text",
                        "&:focus": { outline: "none" },
                      }}
                      onBlur={(e) => handleCaptionChange(index, e.target.textContent)}
                    >
                      {file.caption || "Add a caption..."}
                    </Typography>
                  </Box>

                  {/* ✅ Tags Section */}
                  <Box mt={1}>
                    {file.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        onDelete={() => handleTagDelete(index, tag)}
                        sx={{ m: 0.5 }}
                      />
                    ))}
                    <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                      <TextField
                        size="small"
                        variant="outlined"
                        placeholder="Add tag..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleTagAdd(index, e.target.value);
                            e.target.value = "";
                          }
                        }}
                        sx={{ flex: 1 }}
                      />
                      <IconButton color="primary" onClick={() => handleTagAdd(index, "New Tag")}>
                        <AddIcon />
                      </IconButton>
                    </Stack>
                  </Box>

                  <CardActions sx={{ position: "absolute", top: 8, right: 8 }}>
                    <IconButton color="error" onClick={() => handleDelete(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        )}
      </Container>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UploadPage;
