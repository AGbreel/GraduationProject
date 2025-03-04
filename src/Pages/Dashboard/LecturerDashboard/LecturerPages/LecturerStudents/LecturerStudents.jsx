import React from 'react'
import style from './LecturerStudents.module.css'
import { DataGrid } from '@mui/x-data-grid'

const rows = [
  { id: 1, name: 'Ahmed Gabr', studentId: '2023001', attendance: 'Present', grade: 'A', phone: '01012345678', absences: 1, courses: 'Math, Physics', currentStatus: 'In class' },
  { id: 2, name: 'Mohamed Ali', studentId: '2023002', attendance: 'Absent', grade: 'B+', phone: '01098765432', absences: 3, courses: 'Math, Chemistry', currentStatus: 'Not in class' },
  { id: 3, name: 'Sara Khaled', studentId: '2023003', attendance: 'Present', grade: 'A-', phone: '01123456789', absences: 0, courses: 'Physics, Biology', currentStatus: 'In class' },
  { id: 4, name: 'Hassan Mohamed', studentId: '2023004', attendance: 'Present', grade: 'B', phone: '01234567890', absences: 2, courses: 'Math, English', currentStatus: 'In class' },
  { id: 5, name: 'Mona Magdy', studentId: '2023005', attendance: 'Absent', grade: 'C', phone: '01512345678', absences: 5, courses: 'Physics, Chemistry', currentStatus: 'Not in class' },
  { id: 6, name: 'Omar Mostafa', studentId: '2023006', attendance: 'Present', grade: 'A', phone: '01023456789', absences: 1, courses: 'Math, Computer Science', currentStatus: 'In class' },
  { id: 7, name: 'Laila Hassan', studentId: '2023007', attendance: 'Present', grade: 'B+', phone: '01234567891', absences: 0, courses: 'Biology, English', currentStatus: 'In class' },
  { id: 8, name: 'Khaled Adel', studentId: '2023008', attendance: 'Absent', grade: 'C+', phone: '01134567890', absences: 4, courses: 'Chemistry, Physics', currentStatus: 'Not in class' },
  { id: 9, name: 'Yara Fathy', studentId: '2023009', attendance: 'Present', grade: 'B-', phone: '01023456790', absences: 1, courses: 'Math, History', currentStatus: 'In class' },
  { id: 10, name: 'Tamer Ahmed', studentId: '2023010', attendance: 'Present', grade: 'A+', phone: '01523456789', absences: 0, courses: 'Computer Science, Math', currentStatus: 'In class' },
  { id: 11, name: 'Mariam Hossam', studentId: '2023011', attendance: 'Absent', grade: 'B', phone: '01056789012', absences: 2, courses: 'Chemistry, Biology', currentStatus: 'Not in class' },
  { id: 12, name: 'Mohamed Samir', studentId: '2023012', attendance: 'Present', grade: 'A-', phone: '01298765432', absences: 1, courses: 'Physics, Computer Science', currentStatus: 'In class' },
  { id: 13, name: 'Nour El-Din', studentId: '2023013', attendance: 'Absent', grade: 'C-', phone: '01123456788', absences: 6, courses: 'Math, English', currentStatus: 'Not in class' },
  { id: 14, name: 'Maged Sherif', studentId: '2023014', attendance: 'Present', grade: 'B', phone: '01087654321', absences: 2, courses: 'History, Physics', currentStatus: 'In class' },
  { id: 15, name: 'Dalia Ali', studentId: '2023015', attendance: 'Present', grade: 'A', phone: '01598765432', absences: 0, courses: 'Biology, Chemistry', currentStatus: 'In class' }
];

const columns = [
  { field: 'name', headerName: 'Student Name', width: 200 },
  { field: 'studentId', headerName: 'Student ID', width: 150 },
  { field: 'attendance', headerName: 'Attendance', width: 120 },
  { field: 'grade', headerName: 'Grade', width: 120 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  // { field: 'academicStatus', headerName: 'Academic Status', width: 160 },
  // { field: 'feedback', headerName: 'Feedback', width: 180 },
  // { field: 'quizGrade', headerName: 'Quiz Grade', width: 150 },
  // { field: 'registrationDate', headerName: 'Registration Date', width: 180 },
  // { field: 'lastClassAttendance', headerName: 'Last Class Attendance', width: 180 },
  // { field: 'dob', headerName: 'Date of Birth', width: 180 },
  { field: 'absences', headerName: 'Absences', width: 120 },
  { field: 'courses', headerName: 'Courses', width: 200 },
  { field: 'currentStatus', headerName: 'Current Status', width: 150 },
];

export default function LecturerStudents() {
  return (
    <div style={{ height: 678, width: '100%', fontWeight: 'bold' }} className={style.dataGridContainer}>
      <DataGrid
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#ffffff', // تغيير لون الهيدر
            color: '#4b5e4b',
          },
          '& .MuiDataGrid-row': {
            backgroundColor: '#ffffff',  // تغيير لون الصف عند التمرير عليه إلى الأخضر
            color: '#000000',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#4b5e4b',  // تغيير لون الصف عند التمرير عليه إلى الأخضر
            color: '#ffffff',
          },
          // '& .MuiDataGrid-footerContainer': {
          //   backgroundColor: '#4b5e4b', // تغيير لون الفوتر (إن أردت)
          //   color: '#ffffff',
          // }
        }}
        rows={rows} columns={columns} pageSize={5} />
    </div>
  )
}



// sx={{
//   '& .MuiDataGrid-columnHeaders': {
//     backgroundColor: '#ffffff', // تغيير لون الهيدر
//     color: '#4b5e4b',
//   },
//   '& .MuiDataGrid-cell': {
//     backgroundColor: '#f5f5f5', // تغيير لون الخلايا
//   },
//   '& .MuiDataGrid-row:hover': {
//     backgroundColor: '#e1e1e1', // تغيير لون الصف عند التمرير عليه
//   },
//   '& .MuiDataGrid-footerContainer': {
//     backgroundColor: '#4b5e4b', // تغيير لون الفوتر (إن أردت)
//     color: '#ffffff',
//   }
// }}