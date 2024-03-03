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
                  <th>Item Name</th>
                  <th>Lab Type</th>
                  <th>Main Category</th>
                  <th>Sub Category</th>
                  <th>Code</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Action</th>
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

