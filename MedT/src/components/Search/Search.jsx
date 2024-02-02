import React from 'react'
import './Search.css'
import { IoSearch } from "react-icons/io5"


const Search = () => {
  return (
    <>
        <div className="search">
            <input type="text" placeholder="Search" className="searchBox" />
            <IoSearch className='searchIcon'/>
        </div>
    </>
  )
}


export default Search