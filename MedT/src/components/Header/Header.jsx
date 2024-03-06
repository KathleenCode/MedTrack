import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MedTrackLogo from '../../assets/MedTrack logo.jpg'


const Header = () => {
  return (
    <>
        <header className="navbar">
            <div className="logo">
                <img src={MedTrackLogo} alt="MedTrack Logo" />
                <p className="logoText">MedTrack</p>
            </div>

            <div className="user">
                {/* <button>Login</button> */}
                <Link>Login</Link>
            </div>
        </header>
    </>
  )
}


export default Header