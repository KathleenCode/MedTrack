import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import P from "./P";
import { IoSearch } from "react-icons/io5";
import "./Pharm.css";

export default function Pharm({pharmitems}) {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3)

  const medicines = useMemo(() => {
    if(!search) return pharmitems.pharmItems;
    return pharmitems.pharmItems.filter(med => {
      return Object.values(med).join('').toLowerCase().includes(search.toLowerCase())
    })
  }, [search, pharmitems])

  console.log("pharm",pharmitems);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = medicines.slice(firstPostIndex, lastPostIndex);
  const npage = Math.ceil(medicines.length / postsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  const prevPage = () => {
    if (currentPage !== firstPostIndex) {
      setCurrentPage(currentPage - 1)
    }
  }

  const changePage = (id) => {
    setCurrentPage(id)
  }

  const nextPage = () => {
    if (currentPage !== lastPostIndex) {
      setCurrentPage(currentPage + 1)
    }
  }


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
          currentPosts.map((pharmitem, index) => (
            <P pharmitem={pharmitem} key={index} />
          ))
        }
      </div>

      <nav>
        <ul className="pharmPagination">
          <li className="page-item">
            <Link to="#" className="page-link" onClick={prevPage} disabled={currentPage === 1}>Prev</Link>
          </li>
          {
            numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <Link to="#" className="page-link" onClick={() => changePage(n)}>{n}</Link>
              </li>
            ))
          }
          <li className="page-item">
            <Link to="#" className="page-link" onClick={nextPage}>Next</Link>
          </li>
        </ul>
      </nav>
      
    </>
  )
}

