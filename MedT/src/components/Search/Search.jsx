import React, { useEffect } from 'react'
import './Search.css'
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";


const Search = () => {

  const labitems = useSelector(state => state.labItems);
  const pharmitems = useSelector(state => state.pharmItems);

  useEffect(() => {
    document.querySelector(".searchBox").addEventListener("keyup", (e) => {
      const input = e.target.value.toLowerCase();

      labitems.labItems.forEach((equipment) => {
        const item = equipment.firstElementChild.textContent;
        if(item.toLowerCase().indexOf(input) !== -1) {
            equipment.style.display = "block";
        } else {
            equipment.style.display = "none";
        }
    })

    pharmitems.pharmItems.forEach((medicine) => {
      const drug = medicine.firstElementChild.textContent;
      if(drug.toLowerCase().indexOf(input) !== -1) {
          medicine.style.display = "block";
      } else {
          medicine.style.display = "none";
      }
  })
    })
  })

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