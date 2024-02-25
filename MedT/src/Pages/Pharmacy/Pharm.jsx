import React, { useEffect, useState, useMemo } from 'react'
import P from "./P";
import { IoSearch } from "react-icons/io5";

export default function Pharm({pharmitems}) {
  const [search, setSearch] = useState("");

  const medicines = useMemo(() => {
    if(!search) return pharmitems;
    return pharmitems.pharmItems.filter(med => {
      return Object.values(med).join('').toLowerCase().includes(search.toLowerCase())
    })
  }, [search, pharmitems])

  console.log("pharm",pharmitems)
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

      <div>
        <table>
        <thead>
              <tr>
                <th>Drug Name</th>
                <th>Description</th>
                <th>Pricing</th>
                <th>Code</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
        </table>
        {
          // pharmitems.pharmItems.map((pharmitem, index) => (
          medicines.map((pharmitem, index) => (
            <P pharmitem={pharmitem} key={index} />
          ))
        }
      </div>
    </>
  )
}
