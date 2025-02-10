import React, { useState } from "react";
import style from "./LecturerCourses.module.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import { SearchIcon } from "lucide-react";
import { Filter, Search, Sort } from "@mui/icons-material";

export default function LecturerCourses() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Java Programming Course",
      description:
        "A course to learn Java programming from scratch to advanced level.",
      schedule: "Friday and Thursday, 9:00 AM - 11:00 PM",
      studentCount: 30,
    },
    {
      id: 2,
      name: "Web Development Course",
      description:
        "A course to learn web development using HTML, CSS, and JavaScript.",
      schedule: "Tuesday and Thursday, 1:00 PM - 3:00 PM",
      studentCount: 25,
    },
    {
      id: 3,
      name: "Database Management Course",
      description: "A course to learn database management using MySQL and SQL.",
      schedule: "Friday, 9:00 AM - 11:00 AM",
      studentCount: 20,
    },
    {
      id: 4,
      name: "Database Management Course",
      description: "A course to learn database management using MySQL and SQL.",
      schedule: "Friday, 9:00 AM - 11:00 AM",
      studentCount: 20,
    },
    {
      id: 5,
      name: "Data Structures and Algorithms",
      description: "Learn DSA in depth.",
      schedule: "Monday and Wednesday, 2:00 PM - 4:00 PM",
      studentCount: 40,
    },
  ]);

  // Search, Sort and Filter States
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterSchedule, setFilterSchedule] = useState("");

  // Filtered courses
  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterSchedule ? course.schedule.includes(filterSchedule) : true)
  );

  const sortedCourses = filteredCourses.sort((a, b) => {
    if (sortBy === "students") {
      return b.studentCount - a.studentCount;
    }
    return 0;
  });

  return (
    <Box sx={{ padding: 5 }}>
      <div className="mb-5 flex justify-between items-center">
        <div className="flex items-center bg-white rounded-lg w-[80%] border border-gray-300 px-3">
          <Search className="text-[#4b5e4b] mr-2" size={10} />
          <input
            className="py-2 px-2 bg-transparent text-[#4b5e4b] outline-none w-full"
            type="text"
            placeholder="Search Courses"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex items-center bg-white rounded-lg w-[9%] border border-gray-300 px-3">
          <Filter className="text-[#4b5e4b] mr-2" size={10} />
          <select
            className="py-2 px-2 bg-transparent text-[#4b5e4b] outline-none w-full"
            value={filterSchedule}
            onChange={(e) => setFilterSchedule(e.target.value)}
          >
            <option value="">All</option>
            <option value="Friday">Friday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
          </select>
        </div>

        <div className="flex items-center bg-white rounded-lg w-[9%] border border-gray-300 px-3">
          <Sort className="text-[#4b5e4b] mr-2" size={20} />
          <select
            className="py-2 px-2 bg-transparent text-[#4b5e4b] outline-none w-full"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">None</option>
            <option value="students">Number of Students</option>
          </select>
        </div>
      </div>
     


      {/* Display courses in Grid format */}
      <Grid container spacing={3} justifyContent="center">
        {sortedCourses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, backgroundColor: "#fff", boxShadow: 3 }}>
              <CardContent>
                <Typography
                  sx={{ color: "#4b5e4b", fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                >
                  {course.name}
                </Typography>
                <Typography sx={{ color: "#000000" }} variant="body2" paragraph>
                  {course.description}
                </Typography>
                <Typography sx={{ color: "#4b5e4b" }} variant="body2">
                  <strong>Schedule:</strong> {course.schedule}
                </Typography>
                <Typography sx={{ color: "#000000" }} variant="body2" paragraph>
                  <strong>Registered Students:</strong> {course.studentCount}
                </Typography>

                {/* Buttons to show details */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <Button
                    sx={{ color: "#4b5e4b", backgroundColor: "#eeede9" }}
                    size="small"
                    onClick={() =>
                      console.log(`View details of ${course.name}`)
                    }
                  >
                    View Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box } from '@mui/material';

// const rows = [
//   { id: 1, name: 'Introduction to AI', code: 'AI101', students: 120, studentCount: 120, schedule: 'Monday & Wednesday, 10:00 AM - 12:00 PM', description: 'An introductory course covering AI concepts, including machine learning and neural networks.' },
//   { id: 2, name: 'Web Development', code: 'WD202', students: 90, studentCount: 90, schedule: 'Tuesday & Thursday, 2:00 PM - 4:00 PM', description: 'Learn front-end and back-end development using modern frameworks like React and Node.js.' },
//   { id: 3, name: 'Database Systems', code: 'DB303', students: 75, studentCount: 75, schedule: 'Monday, 3:00 PM - 5:00 PM', description: 'Covers relational and NoSQL databases, focusing on SQL queries and optimization techniques.' },
//   { id: 4, name: 'Cyber Security', code: 'CS404', students: 60, studentCount: 60, schedule: 'Wednesday, 1:00 PM - 3:00 PM', description: 'Explore network security, cryptography, and ethical hacking principles.' },
//   { id: 5, name: 'Data Science', code: 'DS505', students: 100, studentCount: 100, schedule: 'Friday, 9:00 AM - 11:00 AM', description: 'Covers data analysis, visualization, and machine learning using Python.' },
//   { id: 6, name: 'Software Engineering', code: 'SE606', students: 85, studentCount: 85, schedule: 'Saturday, 11:00 AM - 1:00 PM', description: 'Principles of software development, including agile methodologies and software design patterns.' },
//   { id: 7, name: 'Operating Systems', code: 'OS707', students: 70, studentCount: 70, schedule: 'Monday & Thursday, 4:00 PM - 6:00 PM', description: 'Detailed study of OS concepts, including memory management and file systems.' },
//   { id: 8, name: 'Computer Networks', code: 'CN808', students: 95, studentCount: 95, schedule: 'Sunday, 10:00 AM - 12:00 PM', description: 'Learn about network protocols, TCP/IP, and wireless networking.' },
//   { id: 9, name: 'Cloud Computing', code: 'CC909', students: 80, studentCount: 80, schedule: 'Wednesday, 2:00 PM - 4:00 PM', description: 'Introduction to cloud architectures, services, and deployment models.' },
//   { id: 10, name: 'Blockchain Technology', code: 'BC1010', students: 50, studentCount: 50, schedule: 'Tuesday, 3:00 PM - 5:00 PM', description: 'Covers blockchain fundamentals, smart contracts, and decentralized applications.' },
//   { id: 11, name: 'Machine Learning', code: 'ML1111', students: 110, studentCount: 110, schedule: 'Monday & Wednesday, 11:00 AM - 1:00 PM', description: 'A deep dive into supervised and unsupervised learning techniques.' },
//   { id: 12, name: 'Mobile App Development', code: 'MAD1212', students: 65, studentCount: 65, schedule: 'Saturday, 2:00 PM - 4:00 PM', description: 'Develop mobile applications using Flutter and React Native.' },
//   { id: 13, name: 'Embedded Systems', code: 'ES1313', students: 40, studentCount: 40, schedule: 'Thursday, 9:00 AM - 11:00 AM', description: 'Explore microcontrollers, sensors, and real-time operating systems.' },
//   { id: 14, name: 'Digital Marketing', code: 'DM1414', students: 55, studentCount: 55, schedule: 'Sunday, 3:00 PM - 5:00 PM', description: 'Learn SEO, content marketing, and online advertising strategies.' },
//   { id: 15, name: 'Game Development', code: 'GD1515', students: 75, studentCount: 75, schedule: 'Friday, 1:00 PM - 3:00 PM', description: 'Game design principles using Unity and Unreal Engine.' }
// ];

// const columns = [
//   { field: 'name', headerName: 'Course Name', width: 200 },
//   { field: 'code', headerName: 'Course Code', width: 120 },
//   { field: 'students', headerName: 'Students', width: 120 },
//   { field: 'schedule', headerName: 'Schedule', width: 350 },
//   { field: 'studentCount', headerName: 'Students Enrolled', width: 150 },
//   { field: 'description', headerName: 'Description', width: 400 }
// ];

// // Function to dynamically adjust row height based on description length
// const getRowHeight = (params) => {
//   if (!params || !params.row) return 60;

//   const descriptionLines = Math.ceil((params.row.description || '').length / 50);
//   const scheduleLines = Math.ceil((params.row.schedule || '').length / 50);

//   return Math.max(60, (descriptionLines + scheduleLines) * 25);
// };

// export default function LecturerCourses() {
//   return (
//     <Box sx={{ height: 650, width: '100%', p: 2 }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         getRowHeight={getRowHeight}
//         sx={{
//           '& .MuiDataGrid-columnHeaders': { backgroundColor: '#2E3B55', color: '#fff', fontSize: '16px' },
//           '& .MuiDataGrid-row': { backgroundColor: '#f5f5f5', fontSize: '14px' },
//           '& .MuiDataGrid-row:hover': { backgroundColor: '#d0d7de' },
//           '& .MuiDataGrid-footerContainer': { backgroundColor: '#2E3B55', color: '#fff' }
//         }}
//       />
//     </Box>
//   );
// }
