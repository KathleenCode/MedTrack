import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import L from "./L";
import { IoSearch } from "react-icons/io5";

export default function Lab({labitems}) {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3)

  const equipments = useMemo(() => {
    if(!search) return labitems.labItems;
    return labitems.labItems.filter(equip => {
      return Object.values(equip).join('').toLowerCase().includes(search.toLowerCase());
    })
  }, [search, labitems])


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  let currentPosts = equipments.slice(firstPostIndex, lastPostIndex);
  currentPosts = currentPosts.reverse();
  
  
  const npage = Math.ceil(equipments.length / postsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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

      <div className="ltable">
        <table>
          <thead>
                <tr>
                  <th style={{width: "14%"}}>Item Name</th>
                  <th style={{width: "14%"}}>Lab Type</th>
                  <th style={{width: "15%"}}>Main Category</th>
                  <th style={{width: "15%"}}>Sub Category</th>
                  <th style={{width: "15%"}}>Code</th>
                  <th style={{width: "12%"}}>Price</th>
                  <th style={{width: "15%"}}>Action</th>
                </tr>
              </thead>
        </table>
        {
          // labitems.labItems.map((labitem, index) => (
          currentPosts.map((labitem, index) => (
            <L labitem={labitem} key={index} />
          ))
        }
      </div>

      <nav>
        <ul className="labPagination">
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

