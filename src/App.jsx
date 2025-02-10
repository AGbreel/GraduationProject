import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//! Admin Import
import AdminProtectedRoute from './Pages/Dashboard/AdminDashboard/AdminComponents/AdminProtectedRoute/AdminProtectedRoute'
import AdminLayout from './Pages/Dashboard/AdminDashboard/AdminComponents/AdminLayout/AdminLayout'
import AdminHome from './Pages/Dashboard/AdminDashboard/AdminPages/AdminHome/AdminHome'
import AdminProfile from './Pages/Dashboard/AdminDashboard/AdminPages/AdminProfile/AdminProfile'
import AdminSystem from './Pages/Dashboard/AdminDashboard/AdminPages/AdminSystem/AdminSystem'
import AdminLecturers from './Pages/Dashboard/AdminDashboard/AdminPages/AdminLecturers/AdminLecturers'
import AdminDepartments from './Pages/Dashboard/AdminDashboard/AdminPages/AdminDepartments/AdminDepartments'
import AdminStudents from './Pages/Dashboard/AdminDashboard/AdminPages/AdminStudents/AdminStudents'
import AdminSchedule from './Pages/Dashboard/AdminDashboard/AdminPages/AdminSchedule/AdminSchedule'
import AdminCourses from './Pages/Dashboard/AdminDashboard/AdminPages/AdminCourses/AdminCourses'
import AdminAttendance from './Pages/Dashboard/AdminDashboard/AdminPages/AdminAttendance/AdminAttendance'
import AdminAnalysis from './Pages/Dashboard/AdminDashboard/AdminPages/AdminAnalysis/AdminAnalysis'
import AdminChat from './Pages/Dashboard/AdminDashboard/AdminPages/AdminChat/AdminChat'
import AdminAnnounce from './Pages/Dashboard/AdminDashboard/AdminPages/AdminAnnounce/AdminAnnounce'
import AdminSettings from './Pages/Dashboard/AdminDashboard/AdminPages/AdminSettings/AdminSettings'

//! Lecturer Import
import LecturerProtectedRoute from './Pages/Dashboard/LecturerDashboard/LecturerComponents/LecturerProtectedRoute/LecturerProtectedRoute'
import LecturerLayout from './Pages/Dashboard/LecturerDashboard/LecturerComponents/LecturerLayout/LecturerLayout'
import LecturerHome from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerHome/LecturerHome'
import LecturerProfile from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerProfile/LecturerProfile'
import LecturerTimeTable from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerTimeTable/LecturerTimeTable'
import LecturerCourses from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerCourses/LecturerCourses'
import LecturerTasks from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerTasks/LecturerTasks'
import LecturerStudents from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerStudents/LecturerStudents'
import LecturerAttendance from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerAttendance/LecturerAttendance'
import LecturerAnalysis from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerAnalysis/LecturerAnalysis'
import LecturerChat from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerChat/LecturerChat'

//! Student Import 
import StudentProtectedRoute from './Pages/Dashboard/StudentDashboard/StudentComponents/StudentProtectedRoute/StudentProtectedRoute'
import StudentLayout from './Pages/Dashboard/StudentDashboard/StudentComponents/StudentLayout/StudentLayout'
import Home from './Pages/Dashboard/StudentDashboard/StudentPages/Home/Home'
import Profile from './Pages/Dashboard/StudentDashboard/StudentPages/Profile/Profile'
import Calender from './Pages/Dashboard/StudentDashboard/StudentPages/Calender/Calender'
import Courses from './Pages/Dashboard/StudentDashboard/StudentPages/Courses/Courses'
import Resources from './Pages/Dashboard/StudentDashboard/StudentPages/Resources/Resources'
import Classrooms from './Pages/Dashboard/StudentDashboard/StudentPages/Classrooms/Classrooms'
import Assignments from './Pages/Dashboard/StudentDashboard/StudentPages/Assignments/Assignments'
import Exams from './Pages/Dashboard/StudentDashboard/StudentPages/Exams/Exams'
import Chat from './Pages/Dashboard/StudentDashboard/StudentPages/Chat/Chat'
import FAQ from './Pages/Dashboard/StudentDashboard/StudentPages/FAQ/FAQ'
import Help from './Pages/Dashboard/StudentDashboard/StudentPages/Help/Help'

// ?========================================================================
import Verification from './Pages/Auth/Verification/Verification'
import Login from './Pages/Auth/Login/Login'
import NotFound from './Components/NotFound/NotFound'
import { ThemeProvider } from "@mui/material";
import { useState } from 'react'
import LandingPage from './Components/LandingPage/LandingPage'



function App() {

  // const [role, setRole] = useState('admin');
  const [role, setRole] = useState('lecturer');
  // const [role, setRole] = useState('student');
  

  //! Admin Routes
  let admin_routers = createBrowserRouter([
    {
      path: '', element: <AdminLayout />, children: [
        { index: true, element: <AdminProtectedRoute> <AdminHome /> </AdminProtectedRoute> },
        { path: '/home', element: <AdminProtectedRoute> <AdminHome /> </AdminProtectedRoute> },
        { path: '/profile', element: <AdminProtectedRoute> <AdminProfile /> </AdminProtectedRoute> },
        { path: '/system', element: <AdminProtectedRoute> <AdminSystem /> </AdminProtectedRoute> },
        { path: '/lecturers', element: <AdminProtectedRoute> <AdminLecturers /> </AdminProtectedRoute> },
        { path: '/departments', element: <AdminProtectedRoute> <AdminDepartments /> </AdminProtectedRoute> },
        { path: '/students', element: <AdminProtectedRoute> <AdminStudents /> </AdminProtectedRoute> },
        { path: '/schedule', element: <AdminProtectedRoute> <AdminSchedule /> </AdminProtectedRoute> },
        { path: '/courses', element: <AdminProtectedRoute> <AdminCourses /> </AdminProtectedRoute> },
        { path: '/Attendance', element: <AdminProtectedRoute> <AdminAttendance /> </AdminProtectedRoute> },
        { path: '/Analysis', element: <AdminProtectedRoute> <AdminAnalysis /> </AdminProtectedRoute> },
        { path: '/Chat', element: <AdminProtectedRoute> <AdminChat /> </AdminProtectedRoute> },
        { path: '/Announce', element: <AdminProtectedRoute> <AdminAnnounce /> </AdminProtectedRoute> },
        { path: '/Settings', element: <AdminProtectedRoute> <AdminSettings /> </AdminProtectedRoute> },
        { path: '/verification', element: <Verification /> },
        { path: '/login', element: <Login /> },
        { path: '*', element: <AdminProtectedRoute> <NotFound /> </AdminProtectedRoute> },
      ]
    }
  ])

  //! Lecturer Routes
  let lecturer_routers = createBrowserRouter([
    {
      path: '', element: <LecturerLayout />, children: [
        { index: true, element: <LecturerProtectedRoute> <LecturerHome /> </LecturerProtectedRoute> },
        { path: '/home', element: <LecturerProtectedRoute> <LecturerHome /> </LecturerProtectedRoute> },
        { path: '/profile', element: <LecturerProtectedRoute> <LecturerProfile /> </LecturerProtectedRoute> },
        { path: '/timetable', element: <LecturerProtectedRoute> <LecturerTimeTable /> </LecturerProtectedRoute> },
        { path: '/courses', element: <LecturerProtectedRoute> <LecturerCourses /> </LecturerProtectedRoute> },
        { path: '/tasks', element: <LecturerProtectedRoute> <LecturerTasks /> </LecturerProtectedRoute> },
        { path: '/students', element: <LecturerProtectedRoute> <LecturerStudents /> </LecturerProtectedRoute> },
        { path: '/attendance', element: <LecturerProtectedRoute> <LecturerAttendance /> </LecturerProtectedRoute> },
        { path: '/analysis', element: <LecturerProtectedRoute> <LecturerAnalysis /> </LecturerProtectedRoute> },
        { path: '/chat', element: <LecturerProtectedRoute> <LecturerChat /> </LecturerProtectedRoute> },
        { path: '/verification', element: <Verification /> },
        { path: '/login', element: <Login /> },
        { path: '/landingpage', element: <LandingPage /> },
        { path: '*', element: <LecturerProtectedRoute> <NotFound /> </LecturerProtectedRoute> },
      ]
    }
  ])

  //! Student Routes
  let student_routers = createBrowserRouter([
    {
      path: '', element: <StudentLayout />, children: [
        { index: true, element: <StudentProtectedRoute> <Home /> </StudentProtectedRoute> },
        { path: '/home', element: <StudentProtectedRoute> <Home /> </StudentProtectedRoute> },
        { path: '/profile', element: <StudentProtectedRoute> <Profile /> </StudentProtectedRoute> },
        { path: '/calender', element: <StudentProtectedRoute> <Calender /> </StudentProtectedRoute> },
        { path: '/courses', element: <StudentProtectedRoute> <Courses /> </StudentProtectedRoute> },
        { path: '/resources', element: <StudentProtectedRoute> <Resources /> </StudentProtectedRoute> },
        { path: '/classrooms', element: <StudentProtectedRoute> <Classrooms /> </StudentProtectedRoute> },
        { path: '/assignments', element: <StudentProtectedRoute> <Assignments /> </StudentProtectedRoute> },
        { path: '/exams', element: <StudentProtectedRoute> <Exams /> </StudentProtectedRoute> },
        { path: '/chat', element: <StudentProtectedRoute> <Chat /> </StudentProtectedRoute> },
        { path: '/faq', element: <StudentProtectedRoute> <FAQ /> </StudentProtectedRoute> },
        { path: '/help', element: <StudentProtectedRoute> <Help /> </StudentProtectedRoute> },
        { path: '/verification', element: <Verification /> },
        { path: '/login', element: <Login /> },
        { path: '*', element: <StudentProtectedRoute> <NotFound /> </StudentProtectedRoute> },
      ]
    }
  ])

  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
    {role == 'admin' ? 
     <RouterProvider router={admin_routers}></RouterProvider>
     : role == 'lecturer' ? 
     <RouterProvider router={lecturer_routers}></RouterProvider>
     : <RouterProvider router={student_routers}></RouterProvider>
    }
    {/* </ThemeProvider> */}
    </>
  )
}

export default App
