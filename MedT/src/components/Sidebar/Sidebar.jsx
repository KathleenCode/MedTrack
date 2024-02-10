import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
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
                        <Link>
                            <IoHomeOutline />
                            <span>Overview</span> 
                        </Link>
                    </li>

                    <li>
                        <Link to="pharmacy">
                            <MdOutlineLocalPharmacy />
                            <span>Pharmacy</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="laboratory">
                            <HiBeaker />
                            <span>Laboratory</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    </>
  )
}


export default Sidebar