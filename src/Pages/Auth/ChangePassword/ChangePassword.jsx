import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import styles from "./ChangePassword.module.css"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Alert } from '@mui/material';
import { AuthContext } from '../../../Context/authContext';
import { UserContext } from '../../../Context/userContext';
import axios from 'axios';

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const { resetPassword } = useContext(AuthContext);
    const [changePassword, setChangePassword] = useState(false);
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    function setChangePasswordOpen() {
        setChangePassword(!changePassword);
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    const handleResetPassword = async (values) => {
        try {
            const { data } = await axios.patch('http://localhost:5000/api/auth/update-password', values,
                {
                    headers: {
                        Authorization: `Bearer ${userData}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log(data.data);
            navigate("/login");

        } catch (error) {
            console.log(error);
        }
    }

    //! Validation schema for form inputs
    let validationSchema = Yup.object().shape({
        currentPassword: Yup.string().min(6, "Password must be at least 6 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Password must contain at least one letter and one number").required("Password is required"),
        newPassword: Yup.string().min(6, "Password must be at least 6 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Password must contain at least one letter and one number").required("Password is required"),
    })

    //! Formik configuration
    let formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleResetPassword
    })

    return (
        <Box className='mx-auto' component="form" onSubmit={formik.handleSubmit} sx={{ transition: ".5s", width: "50%", my: 1, boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", borderRadius: "10px", border: "1px solid #E6E6E6", backgroundColor: "#fff", py: 2, px: 3 }}>
            <Typography sx={{ fontWeight: "bold", mb: 2 }} variant="body2" color="black"> Set password </Typography>
            <div className="currentPassword">
                <div className={styles.inputBox}>
                    <div className="relative">
                        <input className={styles.input} placeholder="Current Password" name="currentPassword" value={formik.values.currentPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" variant="outlined" label="Current Password" type={showPassword ? 'text' : 'password'} />
                        <label className={styles.label} htmlFor="currentPassword"> Current Password </label>
                        <IconButton aria-label={
                            showPassword ? 'hide the password' : 'display the password'
                        }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            sx={{ color: "gray", mr: 1, position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }} > {showPassword ? <VisibilityOff /> : <Visibility />} </IconButton>
                    </div>
                    {formik.touched.currentPassword && formik.errors.currentPassword && <Alert sx={{ mt: 1, py: 0, borderRadius: "40px" }} severity="error">{formik.errors.currentPassword}</Alert>}
                </div>
            </div>

            <div className="newPassword mb-4">
                <div className={styles.inputBox}>
                    <div className="relative">
                        <input className={styles.input} placeholder="New Password" name="newPassword" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" variant="outlined" label="New Password" type={showPassword ? 'text' : 'password'} />
                        <label className={styles.label} htmlFor="newPassword"> New Password </label>
                        <IconButton aria-label={
                            showPassword ? 'hide the password' : 'display the password'
                        }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            sx={{ color: "gray", mr: 1, position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }} > {showPassword ? <VisibilityOff /> : <Visibility />} </IconButton>
                    </div>
                    {formik.touched.newPassword && formik.errors.newPassword && <Alert sx={{ mt: 1, py: 0, borderRadius: "40px" }} severity="error">{formik.errors.newPassword}</Alert>}
                </div>
            </div>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1, mt: 3, alignItems: "center", gap: "10px", mb: 1 }}>
                <Button onClick={setChangePasswordOpen} sx={{ color: "gray", textTransform: "capitalize", fontWeight: "bold", fontSize: "13px", transition: ".5s", '&:hover': { backgroundColor: '#E6E6E6' } }} size="small">Cancle</Button>
                <Button type="submit" sx={{ color: "white", textTransform: "capitalize", fontWeight: "bold", fontSize: "13px", transition: ".5s", backgroundColor: "gray", '&:hover': { backgroundColor: '#666' } }} size="small">Save</Button>
            </Box>
        </Box>
    )
}
