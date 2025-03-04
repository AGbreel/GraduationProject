"use client";

import { Box, Button, TextField, Typography, Avatar, Paper, Container, Alert } from "@mui/material";
import { LockOutlined, EmailOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";


export default function Verification() {

  //! Function to handle form submission
  const handleRegister = (values) => {
    console.log(values);
  }

  //! Validation schema for form inputs
  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address").required("email is required"),
  })

  //! Formik configuration
  let formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleRegister
  })

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh", bgcolor: "#eeede9", flexDirection: "column" }}>
      <Avatar sx={{ bgcolor: "#4b5e4b", width: 70, height: 70, mb: 2 }}>
        📖
      </Avatar>

      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4b5e4b" }}>
        UniHub
      </Typography>

      <Typography variant="body2" sx={{ color: "#4b5e4b", mb: 3 }}>
        Growing Minds, Nurturing Knowledge
      </Typography>

      <Container maxWidth="sm" >
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, textAlign: "center", bgcolor: "#ffffff", width: "100%" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4b5e4b", mb: 2, textAlign: "left" }}>
            Get Your Credentials
          </Typography>

          <Typography variant="body2" sx={{ color: "gray", mb: 2, textAlign: "left" }}>
            Enter your institutional email to receive your login credentials.
          </Typography>

          <Box onSubmit={formik.handleSubmit} component="form" sx={{ mt: 1 }}>
            <TextField
              name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
              fullWidth margin="normal" variant="outlined" label="Institutional Email" placeholder="your.name@institution.edu"
              InputProps={{ startAdornment: <EmailOutlined sx={{ color: "gray", mr: 1 }} /> }} />
            {formik.touched.email && formik.errors.email && <Alert severity="error">{formik.errors.email}</Alert>}

            <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: "#4b5e4b", color: "#eeede9", mt: 2, '&:hover': { bgcolor: "#3d4d3d" } }}>
              Request Credentials →
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 2, color: "#4b5e4b" }}>
            <Link to="/login" style={{ color: "#4b5e4b", textDecoration: "none", fontWeight: "bold" }}>
              Back to Login
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
