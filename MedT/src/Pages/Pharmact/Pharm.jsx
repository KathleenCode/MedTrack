import React, { useState, useMemo } from 'react'
import P from "./P";
import { IoSearch } from "react-icons/io5";
import "./Pharm.css";

export default function Pharm({pharmitems}) {
  const [search, setSearch] = useState("");

  const medicines = useMemo(() => {
    if(!search) return pharmitems.pharmItems;
    return pharmitems.pharmItems.filter(med => {
      return Object.values(med).join('').toLowerCase().includes(search.toLowerCase())
    })
  }, [search, pharmitems])

  console.log("pharm",pharmitems);

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

      <div className="ptable">
        <table>
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Drug Name</th>
                <th style={{ width: '30%' }}>Description</th>
                <th style={{ width: '12%' }}>Unit of Pricing</th>
                <th style={{ width: '14%' }}>Code</th>
                <th style={{ width: '9%' }}>Price(GHC)</th>
                <th style={{ width: '15%' }}>Action</th>
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

