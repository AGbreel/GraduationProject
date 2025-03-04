import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//! Admin Import
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
import Home from './Pages/Dashboard/StudentDashboard/StudentPages/Home/Home'
import Profile from './Pages/Dashboard/StudentDashboard/StudentPages/Profile/Profile'
import Calender from './Pages/Dashboard/StudentDashboard/StudentPages/Calender/Calender'
import Courses from './Pages/Dashboard/StudentDashboard/StudentPages/Courses/Courses'
import Resources from './Pages/Dashboard/StudentDashboard/StudentPages/Resources/Resources'
import Classrooms from './Pages/Dashboard/StudentDashboard/StudentPages/Classrooms/Classrooms'
import Assignments from './Pages/Dashboard/StudentDashboard/StudentPages/Assignments/Assignments'
import Exams from './Pages/Dashboard/StudentDashboard/StudentPages/Exams/Exams'
import Chat from './Components/Chat/Chat'
import FAQ from './Pages/Dashboard/StudentDashboard/StudentPages/FAQ/FAQ'
import Help from './Pages/Dashboard/StudentDashboard/StudentPages/Help/Help'

// ?========================================================================
import Verification from './Pages/Auth/Verification/Verification'
import Login from './Pages/Auth/Login/Login'
import NotFound from './Components/NotFound/NotFound'
import { ThemeProvider } from "@mui/material";
import { useState } from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import LecturerCoursesDetails from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerCoursesDetails/LecturerCoursesDetails'
import LecturerAllCourses from './Pages/Dashboard/LecturerDashboard/LecturerPages/LecturerAllCourses/LecturerAllCourses'
import Layout from './Components/Layout/Layout'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Settings from './Pages/Dashboard/StudentDashboard/StudentPages/Settings/Settings'



function App() {

  // const [role, setRole] = useState('admin');
  // const [role, setRole] = useState('lecturer');
  const [role, setRole] = useState('student');
  

  //! Admin Routes
  let admin_routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute> <AdminHome /> </ProtectedRoute> },
        { path: '/home', element: <ProtectedRoute> <AdminHome /> </ProtectedRoute> },
        { path: '/profile', element: <ProtectedRoute> <AdminProfile /> </ProtectedRoute> },
        { path: '/system', element: <ProtectedRoute> <AdminSystem /> </ProtectedRoute> },
        { path: '/lecturers', element: <ProtectedRoute> <AdminLecturers /> </ProtectedRoute> },
        { path: '/departments', element: <ProtectedRoute> <AdminDepartments /> </ProtectedRoute> },
        { path: '/students', element: <ProtectedRoute> <AdminStudents /> </ProtectedRoute> },
        { path: '/schedule', element: <ProtectedRoute> <AdminSchedule /> </ProtectedRoute> },
        { path: '/courses', element: <ProtectedRoute> <AdminCourses /> </ProtectedRoute> },
        { path: '/attendance', element: <ProtectedRoute> <AdminAttendance /> </ProtectedRoute> },
        { path: '/analysis', element: <ProtectedRoute> <AdminAnalysis /> </ProtectedRoute> },
        { path: '/chat', element: <ProtectedRoute> <AdminChat /> </ProtectedRoute> },
        { path: '/announce', element: <ProtectedRoute> <AdminAnnounce /> </ProtectedRoute> },
        { path: '/settings', element: <ProtectedRoute> <AdminSettings /> </ProtectedRoute> },
        { path: '/verification', element: <Verification /> },
        { path: '/login', element: <Login /> },
        { path: '/landingpage', element: <LandingPage /> },
        { path: '*', element: <ProtectedRoute> <NotFound /> </ProtectedRoute> },
      ]
    }
  ])

  //! Lecturer Routes
  let lecturer_routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute> <LecturerHome /> </ProtectedRoute> },
        { path: '/home', element: <ProtectedRoute> <LecturerHome /> </ProtectedRoute> },
        { path: '/profile', element: <ProtectedRoute> <LecturerProfile /> </ProtectedRoute> },
        { path: '/timetable', element: <ProtectedRoute> <LecturerTimeTable /> </ProtectedRoute> },
        { path: '/courses', element: <ProtectedRoute> <LecturerCourses /> </ProtectedRoute>, children: [
          { index: true, element: <LecturerAllCourses /> },
          { path: 'coursedetails', element: <LecturerCoursesDetails /> },
        ] },
        { path: '/tasks', element: <ProtectedRoute> <LecturerTasks /> </ProtectedRoute> },
        { path: '/students', element: <ProtectedRoute> <LecturerStudents /> </ProtectedRoute> },
        { path: '/attendance', element: <ProtectedRoute> <LecturerAttendance /> </ProtectedRoute> },
        { path: '/analysis', element: <ProtectedRoute> <LecturerAnalysis /> </ProtectedRoute> },
        { path: '/chat', element: <ProtectedRoute> <LecturerChat /> </ProtectedRoute> },
        { path: '/verification', element: <Verification /> },
        { path: '/login', element: <Login /> },
        { path: '/landingpage', element: <LandingPage /> },
        { path: '*', element: <ProtectedRoute> <NotFound /> </ProtectedRoute> },
      ]
    }
  ])

  //! Student Routes
  let student_routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: '/home', element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: '/profile', element: <ProtectedRoute> <Profile /> </ProtectedRoute> },
        { path: '/calender', element: <ProtectedRoute> <Calender /> </ProtectedRoute> },
        { path: '/courses', element: <ProtectedRoute> <Courses /> </ProtectedRoute> },
        { path: '/resources', element: <ProtectedRoute> <Resources /> </ProtectedRoute> },
        { path: '/classrooms', element: <ProtectedRoute> <Classrooms /> </ProtectedRoute> },
        { path: '/assignments', element: <ProtectedRoute> <Assignments /> </ProtectedRoute> },
        { path: '/exams', element: <ProtectedRoute> <Exams /> </ProtectedRoute> },
        { path: '/chat', element: <ProtectedRoute> <Chat /> </ProtectedRoute> },
        { path: '/faq', element: <ProtectedRoute> <FAQ /> </ProtectedRoute> },
        { path: '/help', element: <ProtectedRoute> <Help /> </ProtectedRoute> },
        { path: '/settings', element: <ProtectedRoute> <Settings /> </ProtectedRoute> },
        { path: '/verification', element: <Verification /> },
        { path: '/login', element: <Login /> },
        { path: '/landingpage', element: <LandingPage /> },
        { path: '*', element: <ProtectedRoute> <NotFound /> </ProtectedRoute> },
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
