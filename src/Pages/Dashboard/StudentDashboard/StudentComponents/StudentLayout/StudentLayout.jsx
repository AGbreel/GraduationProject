import React from 'react'

import { Outlet } from 'react-router-dom'
import style from './StudentLayout.module.css'

export default function StudentLayout() {
  return (
    <>
      <div className='box py-28'>
        <Outlet />
      </div>
    </>
  )
}
