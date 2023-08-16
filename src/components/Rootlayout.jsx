import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbarr from '../page1/Nav'



const Rootlayout = () => {
  return (
    <div>
      <Navbarr />
      <Outlet />
    </div>
  )
}

export default Rootlayout