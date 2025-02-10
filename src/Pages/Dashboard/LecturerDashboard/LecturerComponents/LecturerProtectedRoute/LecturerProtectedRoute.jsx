import React from 'react'
import style from './LecturerProtectedRoute.module.css'
import { Navigate } from 'react-router-dom'

export default function LecturerProtectedRoute({ children }) {
  
  if (localStorage.getItem('userToken')) {
    return children
  } else {
    return <Navigate to="/landingpage" /> 
  }

  // if (null) {
  //   return children
  // } else {
  //   return <Navigate to="/login" /> 
  // }

}
