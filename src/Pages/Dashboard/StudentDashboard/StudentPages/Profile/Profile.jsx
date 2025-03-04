import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Avatar, Button, Grid, Modal, Box, TextField } from "@mui/material";
import Header from "../../../../../Components/Header/Header";

export default function Profile() {
  const initialData = JSON.parse(localStorage.getItem("studentData")) || {
    name: "Ahmed Jebril",
    image: "../../../../../../public/Gbreel.jpg",
    email: "ahmed@example.com",
    major: "Information Systems",
    phone: "0123456789",
    university: "Benha University",
    college: "Faculty of Computers and AI",
    level: "4th Year",
    courses: ["Web Development", "Machine Learning", "Database Systems"],
    attendance: 85, // percentage
    completedCourses: 5,
    notifications: [
      "New assignment in Web Development",
      "Your attendance for Database Systems is marked",
      "Upcoming quiz in Data Structures",
    ],
    activities: [
      "Submit AI Project by Feb 20",
      "Math Quiz on Feb 22",
      "React Final Exam on Feb 25",
    ],
  };

  const [studentData, setStudentData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("studentData", JSON.stringify(studentData));
  }, [studentData]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setStudentData(editData);
    handleClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData({ ...editData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="p-6 space-y-6">
        <Header title="Profile" subTitle="Your personal information" />
        
        <Container maxWidth="md" sx={{ my: 4 }}>
          <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3, padding: 3, textAlign: "center" }}>
            <Avatar src={studentData.image} sx={{ width: 100, height: 100, margin: "auto" }} />
            <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}> {studentData.name} </Typography>
            <Typography color="textSecondary">{studentData.email}</Typography>
            <Typography color="textSecondary">Major: {studentData.major}</Typography>
            <Typography color="textSecondary">Phone: {studentData.phone}</Typography>
            <Typography color="textSecondary">{studentData.university} - {studentData.college}</Typography>
            <Typography color="textSecondary">Level: {studentData.level}</Typography>
            <Button variant="contained" sx={{ mt: 2 }} onClick={handleOpen}> Edit Profile </Button>
          </Card>

          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={4}>
              <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3, padding: 3, textAlign: "center" }}>
                <Typography variant="h6">Courses Enrolled</Typography>
                <Typography variant="h4">{studentData.courses.length}</Typography>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3, padding: 3, textAlign: "center" }}>
                <Typography variant="h6">Attendance</Typography>
                <Typography variant="h4">{studentData.attendance}%</Typography>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3, padding: 3, textAlign: "center" }}>
                <Typography variant="h6">Completed Courses</Typography>
                <Typography variant="h4">{studentData.completedCourses}</Typography>
              </Card>
            </Grid>
          </Grid>

          <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3, padding: 3, mt: 3 }}>
            <Typography variant="h6">Enrolled Courses</Typography>
            <ul>
              {studentData.courses?.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </Card>

          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={6}>
              <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3, padding: 3 }}>
                <Typography variant="h6">Recent Notifications</Typography>
                <ul>
                  {studentData.notifications?.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3, padding: 3 }}>
                <Typography variant="h6">Upcoming Activities</Typography>
                <ul>
                  {studentData.activities?.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </Card>
            </Grid>
          </Grid>

          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                bgcolor: "#fff",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}> Edit Profile </Typography>
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: "10px" }} />
              <TextField fullWidth name="name" label="Name" value={editData.name} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField fullWidth name="email" label="Email" value={editData.email} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField fullWidth name="major" label="Major" value={editData.major} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField fullWidth name="phone" label="Phone" value={editData.phone} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField fullWidth name="university" label="University" value={editData.university} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField fullWidth name="college" label="College" value={editData.college} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField fullWidth name="level" label="Level" value={editData.level} onChange={handleChange} sx={{ mb: 2 }} />
              <Button variant="contained" onClick={handleSave} fullWidth>
                Save Changes
              </Button>
            </Box>
          </Modal>
        </Container>
      </div>
    </>
  );
};
