import React from 'react'
import './Search.css'
import { IoSearch } from "react-icons/io5";


const Search = () => {

  let input;

  useEffect(() => {

      if(input !== "") {
             const labFilter = labitems.labItems.filter((equipment) => {
               Object.values(equipment).join('').toLowerCase().includes(input.toLowerCase())
            })
  
            const pharmFilter = pharmitems.pharmItems.forEach((medicine) => {
              Object.values(equipment).join('').toLowerCase().includes(input.toLowerCase())
          })
    }})

  return (
    <>
        <div className="search">
            <input type="text" placeholder="Search" className="searchBox" />
            <IoSearch className='searchIcon'/>
        </div>
    </>
  )
}


export default Search;