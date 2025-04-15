// import React, { useState, useEffect, useContext } from "react";
// // import { Container, Card, CardContent, Typography, Avatar, Button, Grid, Modal, Box, TextField } from "@mui/material";
// import Header from "../../../../../Components/Header/Header";
// import { UserContext } from "../../../../../Context/userContext";
// import { Box, Typography, Avatar, Grid, Paper, Divider, IconButton } from '@mui/material';
// import { ArrowForwardIos, ArrowForwardIosOutlined } from '@mui/icons-material';
// import { Edit2Icon, EditIcon } from "lucide-react";

// export default function Profile() {
//   // const initialData = JSON.parse(localStorage.getItem("studentData")) || {
//   //   name: "Ahmed Jebril",
//   //   image: "../../../../../../public/Gbreel.jpg",
//   //   email: "ahmed@example.com",
//   //   major: "Information Systems",
//   //   phone: "0123456789",
//   //   university: "Benha University",
//   //   college: "Faculty of Computers and AI",
//   //   level: "4th Year",
//   //   courses: ["Web Development", "Machine Learning", "Database Systems"],
//   //   attendance: 85, // percentage
//   //   completedCourses: 5,
//   //   notifications: [
//   //     "New assignment in Web Development",
//   //     "Your attendance for Database Systems is marked",
//   //     "Upcoming quiz in Data Structures",
//   //   ],
//   //   activities: [
//   //     "Submit AI Project by Feb 20",
//   //     "Math Quiz on Feb 22",
//   //     "React Final Exam on Feb 25",
//   //   ],
//   // };


//   const [open, setOpen] = useState(false);

//   const { userInfo } = useContext(UserContext);

//   // useEffect(() => {
//   //   localStorage.setItem("studentData", JSON.stringify(studentData));
//   // }, [studentData]);

//   // const [studentData, setStudentData] = useState(initialData);
//   // const [editData, setEditData] = useState(initialData);

//   // const handleOpen = () => setOpen(true);
//   // const handleClose = () => setOpen(false);

//   // const handleChange = (e) => {
//   //   setEditData({ editData, [e.target.name]: e.target.value });
//   // };

//   // const handleSave = () => {
//   //   setStudentData(editData);
//   //   handleClose();
//   // };

//   // const handleImageChange = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       setEditData({ editData, image: reader.result });
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // };

//   return (
//     <>
//       <Box p={4}>
//         <Typography variant="h5" gutterBottom>Account</Typography>
//         <Typography variant="subtitle1" gutterBottom>Manage settings related to your account</Typography>

//         <Box mt={4} display="flex" flexDirection="column" gap={4}>
//           {/* Profile Section */}
//           <Paper elevation={3} sx={{ p: 3, backgroundColor: '#fff' }}>
//             <Typography variant="h6" gutterBottom>Profile</Typography>
//             <Typography variant="body2" color="text.secondary" gutterBottom>Manage profile settings</Typography>

//             <Grid container spacing={2} alignItems="center" mt={2}>
//               {/* Photo */}
//               <Grid item xs={12} sm={4}>
//                 <Typography>Photo</Typography>
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                   <Avatar
//                     src="../../../../../../public/Gbreel.jpg"
//                     alt="My Name"
//                     sx={{ width: 64, height: 64 }}
//                   />
//                   <IconButton sx={{ fontSize: "16px", width: "60px", height: "60px" }} size="small" color="black">
//                     <Edit2Icon className="mr-2" fontSize="16px" /> Edit
//                   </IconButton>
//                 </Box>
//               </Grid>

//               {/* Username */}
//               <Grid item xs={12} sm={4}>
//                 <Typography>Username</Typography>
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                   <Typography> {userInfo.username} </Typography>
//                   <IconButton sx={{ fontSize: "16px", width: "60px", height: "60px" }} size="small" color="black">
//                     <Edit2Icon className="mr-2" fontSize="16px" /> Edit
//                   </IconButton>
//                 </Box>
//               </Grid>

//               {/* Email */}
//               <Grid item xs={12} sm={4}>
//                 <Typography>Email</Typography>
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <Box display="flex" flexDirection="column" gap={1}>
//                   <Box display="flex" justifyContent="space-between" alignItems="center">
//                     <Typography> {userInfo.email} <Typography component="span" color="primary">(Primary)</Typography></Typography>
//                     <IconButton size="small" color="primary">
//                       <EditIcon fontSize="small" />
//                     </IconButton>
//                   </Box>
//                 </Box>
//               </Grid>

//               {/* Phone number */}
//               <Grid item xs={12} sm={4}>
//                 <Typography>Phone number</Typography>
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <Box display="flex" flexDirection="column" gap={1}>
//                   <Box display="flex" justifyContent="space-between" alignItems="center">
//                     <Typography>🇺🇸 +1 (201) 555-0131 <Typography component="span" color="primary">(Primary)</Typography></Typography>
//                     <IconButton size="small" color="primary">
//                       <EditIcon fontSize="small" />
//                     </IconButton>
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Paper>

//           {/* Personal Info Section */}
//           <Paper elevation={3} sx={{ p: 3, backgroundColor: '#fff' }}>
//             <Typography variant="h6" gutterBottom>Personal Information</Typography>
//             <Typography variant="body2" color="text.secondary" gutterBottom>Manage personal information settings</Typography>

//             <Grid container spacing={2} alignItems="center" mt={2}>
//               {/* Name */}
//               <Grid item xs={12} sm={4}>
//                 <Typography>Name</Typography>
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                   <Typography> {userInfo.username} </Typography>
//                   <IconButton sx={{ fontSize: "16px", width: "60px", height: "60px" }} size="small" color="black">
//                     <Edit2Icon className="mr-2" fontSize="16px" /> Edit
//                   </IconButton>
//                 </Box>
//               </Grid>

//               {/* Gender */}
//               <Grid item xs={12} sm={4}>
//                 <Typography>Gender</Typography>
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                   <Typography>Male</Typography>
//                   <IconButton sx={{ fontSize: "16px", width: "60px", height: "60px" }} size="small" color="black">
//                     <Edit2Icon className="mr-2" fontSize="16px" /> Edit
//                   </IconButton>
//                 </Box>
//               </Grid>

//               {/* Birthday */}
//               <Grid item xs={12} sm={4}>
//                 <Typography>Birthday</Typography>
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                   <Typography>January 1, 1990</Typography>
//                   <IconButton sx={{ fontSize: "16px", width: "60px", height: "60px" }} size="small" color="black">
//                     <Edit2Icon className="mr-2" fontSize="16px" /> Edit
//                   </IconButton>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Box>
//       </Box>
//     </>
//   );
// };








import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Button, Divider, Typography, Box, Stack, Input, Alert } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import { UserContext } from '../../../../../Context/userContext';
import { UAParser } from 'ua-parser-js';
import styles from './Profile.module.css';
import * as Yup from 'yup'

import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AuthContext } from '../../../../../Context/authContext';
import { useFormik } from 'formik';

const SidebarItem = ({ selected, icon, label, onClick }) => (
  <Button
    variant={selected ? 'contained' : 'text'}
    startIcon={icon}
    onClick={onClick}
    className="justify-start w-full normal-case"
    sx={{
      borderRadius: 2,
      textTransform: 'none',
      px: 2,
      py: 1,
      my: 1,
      backgroundColor: selected ? '#E6E6E6' : 'transparent',
      color: selected ? '#000' : 'RGBA(0, 0, 0, 0.62)',
      '&:hover': {
        backgroundColor: selected ? 'primary.dark' : 'action.hover',
      },
    }}
  >
    {label}
  </Button>
);

const ProfileView = ({ userInfo, updateProfile, setUpdateProfileOpen, image, handleImageChange, handleRemoveImage, updateUserName, setUpdateUserNameOpen }) => (
  <Box className="space-y-6">
    <Typography variant="h6">Profile details</Typography>

    <Divider sx={{ my: 2 }} />

    <Box className="space-y-6">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ width: "20%" }} variant="body2" color="text.secondary"> Profile </Typography>
        {!updateProfile ? <>
          <Stack sx={{ width: "20%", transition: ".5s" }} direction="row" alignItems="center" spacing={2}>
            <Avatar src={image} sx={{ width: 48, height: 48 }} />
            <Typography fontWeight="medium"> {userInfo.username} </Typography>
          </Stack>
          <Button onClick={setUpdateProfileOpen} sx={{ width: "15%", color: "black", textTransform: "capitalize", justifyContent: "flex-start", fontSize: "16px", transition: ".5s", '&:hover': { backgroundColor: '#E6E6E6' } }} size="small">Update profile</Button>
        </>
          : <Box sx={{ transition: ".5s", width: "50%", my: 1, boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", borderRadius: "10px", border: "1px solid #E6E6E6", backgroundColor: "#fff", p: 2 }}>
            <Typography sx={{ fontWeight: "bold", mb: 2 }} variant="body2" color="black"> Update profile </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src={image} sx={{ width: 48, height: 48 }} />
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 1 }}>
                  <label htmlFor="customFileUpload" className="cursor-pointer text-[13px] font-semibold bg-white border border-gray-300 text-gray-500 rounded-md px-3 py-1 inline-block hover:bg-gray-200">
                    Upload
                  </label>
                  <input id="customFileUpload" type="file" className="hidden" onChange={handleImageChange} />
                  {image &&
                    <Button onClick={handleRemoveImage} sx={{ color: "red", textTransform: "capitalize", fontWeight: "bold", fontSize: "13px", transition: ".5s", '&:hover': { backgroundColor: 'rgba(200, 0, 0, 0.1)' } }} size="small">Remove</Button>}
                </Box>
                <Typography fontWeight="semibold" fontSize={"12px"} color='gray'> Recommended size 1:1, up to 10MB. </Typography>
              </Box>
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1, mt: 3, alignItems: "center", gap: "10px", mb: 1 }}>
              <Button onClick={setUpdateProfileOpen} sx={{ color: "gray", textTransform: "capitalize", fontWeight: "bold", fontSize: "13px", transition: ".5s", '&:hover': { backgroundColor: '#E6E6E6' } }} size="small">Cancle</Button>
              <Button sx={{ color: "white", textTransform: "capitalize", fontWeight: "bold", fontSize: "13px", transition: ".5s", backgroundColor: "gray", '&:hover': { backgroundColor: '#666' } }} size="small">Save</Button>
            </Box>
          </Box>}
      </Stack>

      <Divider sx={{ my: 1 }} />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ width: "20%" }} variant="body2" color="text.secondary"> Username </Typography>
        {!updateUserName ? <>
          <Typography sx={{ width: "20%" }}> {userInfo.email?.split("@")[0]} </Typography>
          <Button onClick={setUpdateUserNameOpen} sx={{ width: "15%", color: "black", textTransform: "capitalize", justifyContent: "flex-start", fontSize: "16px", transition: ".5s", '&:hover': { backgroundColor: '#E6E6E6' } }} size="small">Update username</Button>
        </>
          : <Box sx={{ transition: ".5s", width: "50%", my: 1, boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", borderRadius: "10px", border: "1px solid #E6E6E6", backgroundColor: "#fff", py: 2, px: 3 }}>
            <Typography sx={{ fontWeight: "bold", mb: 2 }} variant="body2" color="black"> Update username </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "10px", mb: 1 }}>
              <label htmlFor="username" className="text-[13px] font-semibold text-gray-500"> Username </label>
              <input className='border w-full border-gray-300 rounded-lg px-3 py-1 focus:shadow-gray-300 focus:shadow-xl outline-0' id="username" type="text" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1, mt: 3, alignItems: "center", gap: "10px", mb: 1 }}>
              <Button onClick={setUpdateUserNameOpen} sx={{ color: "gray", textTransform: "capitalize", fontWeight: "bold", fontSize: "13px", transition: ".5s", '&:hover': { backgroundColor: '#E6E6E6' } }} size="small">Cancle</Button>
              <Button sx={{ color: "white", textTransform: "capitalize", fontWeight: "bold", fontSize: "13px", transition: ".5s", backgroundColor: "gray", '&:hover': { backgroundColor: '#666' } }} size="small">Save</Button>
            </Box>
          </Box>}
      </Stack>

      <Divider sx={{ my: 1 }} />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ width: "20%" }} variant="body2" color="text.secondary"> Email addresses </Typography>
        <Typography sx={{ width: "20%" }}> {userInfo.email} </Typography>
        <Button sx={{ width: "15%", color: "black", textTransform: "capitalize", justifyContent: "flex-start", fontSize: "16px", transition: ".5s", '&:hover': { backgroundColor: '#E6E6E6' } }} size="small">  </Button>
      </Stack>
    </Box>
  </Box>
);

const SecurityView = ({ result, locationInfo, setChangePasswordOpen, changePassword, showPassword, handleClickShowPassword, handleMouseDownPassword, handleMouseUpPassword, formik }) => (
  <Box className="space-y-6">
    <Typography sx={{ fontWeight: "bold" }} variant="h6">Security</Typography>
    <Divider sx={{ my: 2 }} />

    <Box className="space-y-6">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ width: "15%" }} variant="body2" color="text.secondary">  Password </Typography>
        {!changePassword ? <>
          <Button onClick={setChangePasswordOpen} sx={{ width: "30%", color: "black", textTransform: "capitalize", justifyContent: "flex-start", fontSize: "16px", transition: ".5s", '&:hover': { backgroundColor: '#E6E6E6' } }} size="small"> Set password </Button>
          <Typography sx={{ width: "15%" }} variant="body2" color="text.secondary">  </Typography>
        </>
          : <Box component="form" onSubmit={formik.handleSubmit} sx={{ transition: ".5s", width: "50%", my: 1, boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", borderRadius: "10px", border: "1px solid #E6E6E6", backgroundColor: "#fff", py: 2, px: 3 }}>
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
          </Box>}
      </Stack>

      <Divider sx={{ my: 1 }} />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ width: "15%" }} variant="body2" color="text.secondary"> Active devices </Typography>
        <Box sx={{ display: "flex", alignItems: "start", width: "30%" }}>
          <img src="../../../../../../public/pc3-icon.png" alt="Device Icon" className="w-10 h-10 mr-2" />
          <Box className="text-sm text-gray-600 mt-1 ml-2">
            <Box sx={{ display: "flex", itemsCenter: "center", spacing: "10px" }}>
              <Typography sx={{ color: "black" }}>{result.os.name}</Typography>
              <Button sx={{ ml: "10px", py: 0, px: 1, color: "black", fontWeight: "semibold", cursor: "default", textTransform: "capitalize", fontSize: "13px", backgroundColor: "#F7F7F7" }} size="small"> This device </Button>
            </Box>

            <Typography sx={{ color: "gray" }}>{result.browser.name} {result.browser.version}</Typography>
            <Typography sx={{ color: "gray" }}>{locationInfo?.ip} ({locationInfo?.city}, {locationInfo?.country})</Typography>
            <Typography sx={{ color: "gray" }}>{new Date().toLocaleString()}</Typography>
          </Box>
        </Box>
        <Typography sx={{ width: "15%" }} variant="body2" color="text.secondary">  </Typography>
      </Stack>

      <Divider sx={{ my: 1 }} />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ width: "15%" }} variant="body2" color="text.secondary">  Delete account </Typography>
        <Button sx={{ width: "30%", textAlign: "start", color: "red", textTransform: "capitalize", justifyContent: "flex-start", fontSize: "16px", transition: ".5s", '&:hover': { backgroundColor: '#E6E6E6' } }} size="small"> Delete account </Button>
        <Typography sx={{ width: "15%" }} variant="body2" color="text.secondary">   </Typography>
      </Stack>
    </Box>
  </Box>
);

export default function Profile() {
  const [tab, setTab] = useState('profile');
  const { userInfo } = useContext(UserContext);

  const parser = new UAParser();
  const result = parser.getResult();
  const [locationInfo, setLocationInfo] = useState(null);

  // console.log(result.os.name); // Windows
  // console.log(result.browser.name); // Chrome
  // console.log(result.browser.version); // 135.0.0.0
  // console.log(new Date().toLocaleString()); // Today at 8:45 PM

  const getIpLocationInfo = async () => {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();

    return {
      ip: data.ip,
      city: data.city,
      country: data.country_name,
    };
  };

  useEffect(() => {
    getIpLocationInfo().then(setLocationInfo);
    console.log("userInfo => ", userInfo);
    
  }, []);


  const [updateProfile, setUpdateProfile] = useState(false);
  const [updateUserName, setUpdateUserName] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  function setUpdateProfileOpen() {
    setUpdateProfile(!updateProfile);
  }

  function setUpdateUserNameOpen() {
    setUpdateUserName(!updateUserName);
  }

  function setChangePasswordOpen() {
    setChangePassword(!changePassword);
  }

  const [image, setImage] = useState('../../../../../../public/Gbreel.jpg');
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const { resetPassword } = useContext(AuthContext);

  const handleResetPassword = async (values) => {
    resetPassword(values);
    setChangePasswordOpen();
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
    <Box className="m-0 w-full h-[90vh] flex rounded-2xl overflow-hidden shadow-md">
      {/* Sidebar */}
      <Box className="w-[20%] bg-gradient-to-tr from-white to-gray-50 border-r p-4 flex flex-col justify-between">
        <Box>
          <Typography variant="h6" fontWeight="bold"> Account </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}> Manage your account info. </Typography>
          <SidebarItem
            selected={tab === 'profile'}
            icon={<PersonIcon />}
            label="Profile"
            onClick={() => setTab('profile')}
          />
          <SidebarItem
            selected={tab === 'security'}
            icon={<SecurityIcon />}
            label="Security"
            onClick={() => setTab('security')}
          />
        </Box>
        <Typography variant="caption" color="warning.main">
          Development mode
        </Typography>
      </Box>

      {/* Content */}
      <Box className="flex-1 bg-white p-6">
        {tab === 'profile' ? <ProfileView setUpdateUserNameOpen={setUpdateUserNameOpen} updateUserName={updateUserName} image={image} handleImageChange={handleImageChange} handleRemoveImage={handleRemoveImage} userInfo={userInfo} updateProfile={updateProfile} setUpdateProfileOpen={setUpdateProfileOpen} />
          : <SecurityView formik={formik} showPassword={showPassword} setShowPassword={setShowPassword} handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} handleMouseUpPassword={handleMouseUpPassword} result={result} locationInfo={locationInfo} setChangePasswordOpen={setChangePasswordOpen} changePassword={changePassword} />}
      </Box>
      {/* =============================================== */}

    </Box>
  );
}
