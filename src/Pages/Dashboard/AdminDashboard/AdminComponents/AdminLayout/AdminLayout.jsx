import React from 'react'

import { Outlet } from 'react-router-dom'
import style from './AdminLayout.module.css'

export default function AdminLayout() {
  return (
    <>
      <div className='box py-28'>
        <Outlet />
      </div>
    </>
  )
}
