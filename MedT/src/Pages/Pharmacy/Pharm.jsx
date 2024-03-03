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
                <th style={{width: "18.6%"}}>Drug Name</th>
                <th style={{width: "29.3%"}}>Description</th>
                <th style={{width: "9.7%"}}>Pricing</th>
                <th style={{width: "14.7%"}}>Code</th>
                <th style={{width: "9.7%"}}>Price</th>
                <th style={{width: ""}}>Actions</th>
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
