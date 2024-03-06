import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { HiBeaker } from "react-icons/hi2";


const Sidebar = () => {
  return (
    <>
        <aside>
            <div className="sidebar">
                <ul>
                    <li>
                        <NavLink to="/" exact="true" activeclassname="active">
                            <IoHomeOutline />
                            <span>Overview</span> 
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="pharmacy" activeclassname="active">
                            <MdOutlineLocalPharmacy />
                            <span>Pharmacy</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="laboratory" activeclassname="active">
                            <HiBeaker />
                            <span>Laboratory</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    </>
  )
}


export default Sidebar