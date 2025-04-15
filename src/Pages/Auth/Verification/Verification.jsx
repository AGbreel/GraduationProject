"use client";

import { Box, Button, TextField, Typography, Avatar, Paper, Container, Alert, Divider } from "@mui/material";
import { LockOutlined, EmailOutlined, PersonOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Verification.module.css";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../Context/userContext";


export default function Verification() {

  const [apiError, setApiError] = useState(null)
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();
  let { setUserData } = useContext(UserContext);

  //! Function to handle form submission
  const handleRegister = async (values) => {
    try {
      setLoading(true);
      let {data} = await axios.post("http://localhost:5000/api/auth/register", values);
      console.log(data);
      localStorage.setItem("userToken", data.token);
      setUserData(data.token);
      navigate("/login");
      setLoading(false);

    } catch (error) {
      console.log("Error Occured: ", error.response.data.error);
      setApiError(error.response.data.error);
      setLoading(false);
    }
  }

  //! Validation schema for form inputs
  let validationSchema = Yup.object().shape({
    username: Yup.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters").required("Username is required"),
    email: Yup.string().email("Invalid email address").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address").required("email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Password must contain at least one letter and one number").required("Password is required"),
  })

  //! Formik configuration
  let formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleRegister
  })

  return (
    // <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh", bgcolor: "#eeede9", flexDirection: "column" }}>
    //   <Avatar sx={{ bgcolor: "#4b5e4b", width: 70, height: 70, mb: 2 }}>
    //     📖
    //   </Avatar>

    //   <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4b5e4b" }}>
    //     UniHub
    //   </Typography>

    //   <Typography variant="body2" sx={{ color: "#4b5e4b", mb: 3 }}>
    //     Growing Minds, Nurturing Knowledge
    //   </Typography>

    //   <Container maxWidth="sm" >
    //     <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, textAlign: "center", bgcolor: "#ffffff", width: "100%" }}>
    //       <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4b5e4b", mb: 2, textAlign: "left" }}>
    //         Get Your Credentials
    //       </Typography>

    //       <Typography variant="body2" sx={{ color: "gray", mb: 2, textAlign: "left" }}>
    //         Enter your institutional email to receive your login credentials.
    //       </Typography>

    //       <Box onSubmit={formik.handleSubmit} component="form" sx={{ mt: 1 }}>
    //         <TextField
    //           name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
    //           fullWidth margin="normal" variant="outlined" label="Institutional Email" placeholder="your.name@institution.edu"
    //           InputProps={{ startAdornment: <EmailOutlined sx={{ color: "gray", mr: 1 }} /> }} />
    //         {formik.touched.email && formik.errors.email && <Alert severity="error">{formik.errors.email}</Alert>}

    //         <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: "#4b5e4b", color: "#eeede9", mt: 2, '&:hover': { bgcolor: "#3d4d3d" } }}>
    //           Request Credentials →
    //         </Button>
    //       </Box>

    //       <Typography variant="body2" sx={{ mt: 2, color: "#4b5e4b" }}>
    //         <Link to="/login" style={{ color: "#4b5e4b", textDecoration: "none", fontWeight: "bold" }}>
    //           Back to Login
    //         </Link>
    //       </Typography>
    //     </Paper>
    //   </Container>
    // </Box>




    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh", flexDirection: "column" }}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <Avatar sx={{ bgcolor: "#4b5e4b", width: 70, height: 70, mb: 1, mx: "auto" }}> 📖 </Avatar>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4b5e4b", textAlign: "center" }}> UniHub </Typography>
          <Typography variant="body2" sx={{ color: "#4b5e4b", mb: 1, textAlign: "center" }}> Growing Minds, Nurturing Knowledge </Typography>
          <Divider sx={{ backgroundColor: "#4b5e4b", mb: 3, height: 2, width: "60%", mx: "auto" }} />

          <form onSubmit={formik.handleSubmit}>
            {/* <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4b5e4b", mb: 1, textAlign: "left" }}>
              Get Your Credentials
            </Typography>

            <Typography variant="body2" sx={{ color: "gray", mb: 2, textAlign: "left" }}>
              Enter your institutional email to receive your login credentials.
            </Typography> */}

            {apiError && <Alert sx={{ mt: 0, py: 0, borderRadius: "40px" }} severity="error">{apiError}</Alert>}

            <div className="username">
              <div className={styles.inputBox}>
                <div className="relative">
                  <input className={styles.input} placeholder="Username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" variant="outlined" label="Username" type="text" />
                  <label className={styles.label} htmlFor="username">Username</label>
                  <PersonOutlined sx={{ color: "gray", mr: 1, position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }} />
                </div>
                {formik.touched.username && formik.errors.username && <Alert sx={{ mt: 1, py: 0, borderRadius: "40px" }} severity="error">{formik.errors.username}</Alert>}
              </div>
            </div>

            <div className="email">
              <div className={styles.inputBox}>
                <div className="relative">
                  <input className={styles.input} placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" variant="outlined" label="Email" type="email" />
                  <label className={styles.label} htmlFor="email">Email</label>
                  <EmailOutlined sx={{ color: "gray", mr: 1, position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }} />
                </div>
                {formik.touched.email && formik.errors.email && <Alert sx={{ mt: 1, py: 0, borderRadius: "40px" }} severity="error">{formik.errors.email}</Alert>}
              </div>
            </div>

            <div className="password">
              <div className={styles.inputBox}>
                <div className="relative">
                  <input className={styles.input} placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" variant="outlined" label="Password" type="password" />
                  <label className={styles.label} htmlFor="password">Password</label>
                  <LockOutlined sx={{ color: "gray", mr: 1, position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }} />
                </div>
                {formik.touched.password && formik.errors.password && <Alert sx={{ mt: 1, py: 0, borderRadius: "40px" }} severity="error">{formik.errors.password}</Alert>}
              </div>
            </div>

            <div className={styles.additional}>
              {loading ?
               <button type="submit" className={styles.btn}>  <i className="fas fa-spinner fa-spin-pulse"></i> </button>
               :<button type="submit" className={styles.btn}>  Request Credentials → </button>
               }

              <Typography variant="body2" sx={{ mt: 2, color: "#4b5e4b", textAlign: "center" }}>
                <Link to="/login" style={{ color: "#4b5e4b", textDecoration: "none", fontWeight: "bold" }}>  Back to Login </Link>
              </Typography>
            </div>
          </form>
        </div>

        {[...Array(50)].map((_, i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
      </div>
    </Box>
  );
}
