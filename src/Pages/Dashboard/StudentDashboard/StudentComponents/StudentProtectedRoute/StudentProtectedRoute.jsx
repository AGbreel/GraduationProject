import React from 'react'
import style from './StudentProtectedRoute.module.css'
import { Navigate } from 'react-router-dom'

export default function StudentProtectedRoute({ children }) {
  
  if (localStorage.getItem('userToken')) {
    return children
  } else {
    return <Navigate to="/login" /> 
  }

}
