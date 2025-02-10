import React from 'react'
import style from './Loading.module.css'
import { Triangle } from 'react-loader-spinner'

export default function Loading() {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}
