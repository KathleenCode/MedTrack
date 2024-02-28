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

<<<<<<< HEAD
      <div className="ptable">
        <table>
=======
      <div>
        <table style={{border: "1px solid black"}}>
>>>>>>> de0659ee3025b6f8a4badfc478de52d1fe9d0ee2
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
