import React from 'react'
import Navbar from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const RootLayout = () => {
  const darkmode = useSelector(state => state.darkMode.darkMode)
  return (
    <>
        <div className="container">
            
            <Navbar darkmode={darkmode} />

            <Sidebar />

            <Outlet />

        </div>
    </>
  )
}


export default RootLayout