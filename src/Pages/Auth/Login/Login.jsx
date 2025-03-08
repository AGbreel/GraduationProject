'use client';

import { Box, Button, TextField, Typography, Avatar, Paper, Container, Alert, Divider } from "@mui/material";
import { PersonOutlined, LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'
import styles from "./Login.module.css"


export default function Login() {

  //! Function to handle form submission
  const handleLogin = (values) => {
    console.log(values);
  }

  //! Validation schema for form inputs
  let validationSchema = Yup.object().shape({
    username: Yup.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters").required("Username is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Password must contain at least one letter and one number").required("Password is required"),
  })

  //! Formik configuration
  let formik = useFormik({
    initialValues: {
      username: '',
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

            <div className="username">
              <div className={styles.inputBox}>
                <div className="relative">
                  <input placeholder="Username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" variant="outlined" label="Username" type="text" />
                  <label htmlFor="username">Username</label>
                  <PersonOutlined sx={{ color: "gray", mr: 1, position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }} />
                </div>
                {formik.touched.username && formik.errors.username && <Alert sx={{ mt: 1, py: 0, borderRadius: "40px" }} severity="error">{formik.errors.username}</Alert>}
              </div>
            </div>

            <div className="password">
              <div className={styles.inputBox}>
                <div className="relative">
                  <input placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" variant="outlined" label="Password" type="password" />
                  <label htmlFor="password">Password</label>
                  <LockOutlined sx={{ color: "gray", mr: 1, position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }} />
                </div>
                {formik.touched.password && formik.errors.password && <Alert sx={{ mt: 1, py: 0, borderRadius: "40px" }} severity="error">{formik.errors.password}</Alert>}
              </div>
            </div>

            <div className={styles.additional}>
              <div className={styles.forgetPass}> <a href="#">Forget Password</a> </div>

              <button type="submit" className={styles.btn}> Sign in </button>

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
