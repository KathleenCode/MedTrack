import React, { useState, useMemo } from 'react'
import L from "./L";
import { IoSearch } from "react-icons/io5";

export default function Lab({labitems}) {
  const [search, setSearch] = useState("");

  const equipments = useMemo(() => {
    if(!search) return labitems.labItems;
    return labitems.labItems.filter(equip => {
      return Object.values(equip).join('').toLowerCase().includes(search.toLowerCase());
    })
  }, [search, labitems])

  return (
    <>
       <div className="search">
            <input 
            type="text" 
            placeholder="Search" 
            className="searchBox" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <IoSearch className='searchIcon'/>
        </div>

      <div className="ltable">
        <table>
          <thead>
                <tr>
                  <th style={{width: "13%"}} >Item Name</th>
                  <th style={{width: "13%"}} >Lab Type</th>
                  <th style={{width: "13.9%"}} >Main Category</th>
                  <th style={{width: "12.5%"}} >Sub Category</th>
                  <th style={{width: "13.6%"}} >Code</th>
                  <th style={{width: "12.2%"}} >Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
        </table>
        {
          // labitems.labItems.map((labitem, index) => (
          equipments.map((labitem, index) => (
            <L labitem={labitem} key={index} />
          ))
        }
      </div>
    </>
  )
}
