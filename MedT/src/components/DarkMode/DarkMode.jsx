import React, { useEffect } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";
import "./DarkMode.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/features/DarkMode/DarkSlice'


const DarkMode = () => {
    const dispatch = useDispatch();
    const darkmode = useSelector(state => state.darkMode.darkMode); 

    const handleToggle = () => {
        dispatch(toggleDarkMode());
        document.body.dataset.theme = darkmode ? 'light' : 'dark'; // Update body attribute
    };


    
    return (
        <div className="darkMode">
             <div className="toggle-area">
                <input 
                    type="checkbox" 
                    id='dark-toggle' 
                    className='darkmode-input'
                    checked={darkmode}
                    onChange={handleToggle} />

                <label htmlFor="dark-toggle">
                    <MdOutlineWbSunny color='darkgoldenrod' />
                    <FaRegMoon color='antiquewhite' /> 
                </label>
            </div>
        </div>
    );
}


export default DarkMode;


