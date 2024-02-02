import React from 'react'
import Navbar from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <>
        <div className="container">
            
            <Navbar />

            <Sidebar />

            <Outlet />

        </div>
    </>
  )
}


export default RootLayout