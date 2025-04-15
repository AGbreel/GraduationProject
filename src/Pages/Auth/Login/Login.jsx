'use client';

import { Box, Button, TextField, Typography, Avatar, Paper, Container, Alert, Divider } from "@mui/material";
import { PersonOutlined, LockOutlined, EmailOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'
import styles from "./Login.module.css"
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../../Context/userContext";


export default function Login() {

  const [apiError, setApiError] = useState(null)
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();
  let { setUserData } = useContext(UserContext);

  //! Function to handle form submission
  const handleLogin = async (values) => {
    try {
      setLoading(true)
      let { data } = await axios.post("http://localhost:5000/api/auth/login", values);
      console.log(data);
      localStorage.setItem("userToken", data.token);
      setUserData(data.token);
      navigate("/");
      setLoading(false)

    } catch (error) {
      console.log("Error Occured: ", error.response.data.error);
      setApiError(error.response.data.error);
      setLoading(false)
    }
  }

  //! Validation schema for form inputs
  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Password must contain at least one letter and one number").required("Password is required"),
  })

  //! Formik configuration
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleLogin
  })

  return (
    // <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh", flexDirection: "column" }}>
    //   <Avatar sx={{ bgcolor: "#4b5e4b", width: 70, height: 70, mb: 2 }}> 📖 </Avatar>

    //   <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4b5e4b" }}> UniHub </Typography>

    //   <Typography variant="body2" sx={{ color: "#4b5e4b", mb: 3 }}> Growing Minds, Nurturing Knowledge </Typography>

    //   <Container maxWidth="sm" >
    //     <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, textAlign: "center", bgcolor: "#ffffff", width: "100%" }}>
    //       <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4b5e4b", mb: 2, textAlign: "left" }}> Welcome back </Typography>

    //       <Box onSubmit={formik.handleSubmit} component="form" sx={{ mt: 1 }}>
    //         <TextField name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth margin="normal" variant="outlined" label="Username" type="text" InputProps={{ startAdornment: <PersonOutlined sx={{ color: "gray", mr: 1 }} /> }} />
    //         {formik.touched.username && formik.errors.username && <Alert severity="error">{formik.errors.username}</Alert>}

    //         <TextField name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth margin="normal" variant="outlined" label="Password" type="password" InputProps={{ startAdornment: <LockOutlined sx={{ color: "gray", mr: 1 }} /> }} />
    //         {formik.touched.password && formik.errors.password && <Alert severity="error">{formik.errors.password}</Alert>}

    //         <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: "#4b5e4b", color: "#eeede9", mt: 2, '&:hover': { bgcolor: "#3d4d3d" } }}>Sign in</Button>
    //       </Box>

    //       <Typography variant="body2" sx={{ mt: 2, color: "#4b5e4b" }}>
    //         Need your credentials?
    //         <Link to="/verification" style={{ color: "#4b5e4b", textDecoration: "none", fontWeight: "bold" }}>Get them here</Link>
    //       </Typography>
    //     </Paper>
    //   </Container>
    // </Box>





    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh", flexDirection: "column" }}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <Avatar sx={{ bgcolor: "#4b5e4b", width: 60, height: 60, mb: 1, mx: "auto" }}> 📖 </Avatar>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4b5e4b", textAlign: "center" }}> UniHub </Typography>
          <Divider sx={{ backgroundColor: "#4b5e4b", mb: 1, height: 3, width: "25%", mx: "auto" }} />

          <form onSubmit={formik.handleSubmit}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4b5e4b", textAlign: "left" }}> Welcome back </Typography>

            {apiError && <Alert sx={{ mt: 0, py: 0, borderRadius: "40px" }} severity="error">{apiError}</Alert>}

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
              <div className={styles.forgetPass}> <Link to="/changePassword" href="#">Forget Password</Link> </div>

              {loading ? <button type="submit" className={styles.btn}>  <i className="fas fa-spinner fa-spin-pulse"></i> </button>
                : <button type="submit" className={styles.btn}> Sign in </button>}


              <Typography variant="body2" sx={{ mt: 2, color: "#4b5e4b", textAlign: "center" }}>
                Need your credentials?
                <Link to="/verification" style={{ color: "#4b5e4b", textDecoration: "none", fontWeight: "bold", marginLeft: "5px" }}>Get them here</Link>
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
