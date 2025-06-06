import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // Clear alerts on change
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    // For now, simulate sending with a mailto link
    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )} (${email})`;

    window.location.href = mailtoLink;
    setSuccess("Message opened in email client.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 600,
        mx: "auto",
        backgroundColor: "#1e1e1e",
        borderRadius: 2,
        color: "white",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Your Name"
              variant="outlined"
              value={form.name}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#aaa" } }}
              InputProps={{ style: { color: "white" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="email"
              label="Your Email"
              type="email"
              variant="outlined"
              value={form.email}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#aaa" } }}
              InputProps={{ style: { color: "white" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="message"
              label="Your Message"
              multiline
              rows={4}
              variant="outlined"
              value={form.message}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#aaa" } }}
              InputProps={{ style: { color: "white" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              sx={{ backgroundColor: "#00bcd4", ":hover": { backgroundColor: "#0097a7" } }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Contact;
