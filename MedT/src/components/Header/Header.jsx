import React from 'react'
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

            {/* <div className="user">
                <p>Amin</p>
            </div> */}
        </header>
    </>
  )
}


export default Header