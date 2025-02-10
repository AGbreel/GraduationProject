import React from 'react'
import style from './AdminProtectedRoute.module.css'
import { Navigate } from 'react-router-dom'

export default function AdminProtectedRoute({ children }) {
  
  if (localStorage.getItem('userToken')) {
    return children
  } else {
    return <Navigate to="/login" /> 
  }

}
