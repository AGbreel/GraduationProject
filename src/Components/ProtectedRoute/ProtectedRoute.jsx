import React from 'react'
import { Navigate } from 'react-router-dom'
import style from './ProtectedRoute.module.css'

export default function ProtectedRoute({ children }) {
  
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
