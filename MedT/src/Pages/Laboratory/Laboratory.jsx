import React, { useEffect } from 'react';
import Lab from "./Lab";
import Search from "../../components/Search/Search";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addLabThunk, fetchLabThunk } from "../../store/features/Laboratory/LabSlice";
import "./Lab.css";

export default function Laboratory() {
    const [itemName, setItemName] = useState("");
    const [labType, setLabType] = useState("");
    const [mainCategory, setMainCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [itemCode, setCode] = useState("");
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const labitems = useSelector(state => state.labItems);
    console.log(labitems);
    const isLoading = useSelector(state => state.loading);

    const addOne = (e) => {
        e.preventDefault();

        const labItem = {
            itemName,
            labType,
            mainCategory,
            subCategory,
            itemCode,
            price
        }
        console.log(labItem);
        dispatch(addLabThunk(labItem));
        
        setItemName("");
        setLabType("");
        setMainCategory("");
        setSubCategory("");
        setCode("");
        setPrice("");
    }

    useEffect(() => {
        dispatch(fetchLabThunk());
    }, []);

  return (
    <div className="laby">
        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1607_9770)">
        <path d="M7.6 2.5V7.5C7.6 7.55523 7.55523 7.6 7.5 7.6H2.5C1.67157 7.6 0.999998 8.27157 1 9.1L1.00001 14.9C1.00001 15.7284 1.67158 16.4 2.50001 16.4H7.50001C7.55524 16.4 7.60001 16.4448 7.60001 16.5L7.6 21.5C7.6 22.3284 8.27157 23 9.1 23H14.9054C15.7338 23 16.4054 22.3284 16.4054 21.5L16.4054 16.4994C16.4054 16.4444 16.4498 16.3997 16.5048 16.3994L21.5092 16.3686C22.334 16.3636 23 15.6935 23 14.8687L23 9.06873C23 8.2367 22.3228 7.56364 21.4908 7.56876L16.506 7.59938C16.4505 7.59972 16.4054 7.55485 16.4054 7.49938V2.5C16.4054 1.67157 15.7338 1 14.9054 1H9.1C8.27157 1 7.6 1.67157 7.6 2.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1607_9770">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg> */}
        
        <Search />
        
        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1607_9289)">
        <path d="M20 23V6C20 5.44772 19.5523 5 19 5H17M4 23V6C4 5.44772 4.44772 5 5 5H7M14 23V18C14 17.4477 13.5523 17 13 17H11C10.4477 17 10 17.4477 10 18V23M1 23H23M16 13.0001V13.0318M8 13.0001V13.0318M12 13.0001V13.0318M13.6001 4.9998L12.0005 4.99985M12.0005 4.99985L10.4 4.9999M12.0005 4.99985V6.5999M12.0005 4.99985V3.3999M7 2V8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8V2C17 1.44772 16.5523 1 16 1H8C7.44772 1 7 1.44772 7 2Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1607_9289">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1H18M7 6H16M7 9H9.82983M7 13H9.82983M7 17H9.82983M7 1H16V18.5C16 20.9853 13.9853 23 11.5 23C9.01472 23 7 20.9853 7 18.5V1Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
        </svg> */}

        <div className="group">
            <form onSubmit={addOne}>
                <label htmlFor="itemName">Lab Item Name</label>
                <input 
                type="text" placeholder="Type lab name here" id="itemName" 
                value={itemName} onChange={(e) => setItemName(e.target.value)}
                />
                <label htmlFor="labType">Lab Types</label>
                <select name="labType" id="labType" value={labType} onChange={(e) => setLabType(e.target.value)} >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select> <br />
                <label htmlFor="mainCategory">Main Category</label>
                <select name="mainCategory" id="mainCategory" value={mainCategory} onChange={(e) => setMainCategory(e.target.value)} >
                    <option value="">X-Ray</option>
                    <option value="Radiology">Radiology</option>
                    <option value="Laboratory">Laboratory</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select> <br />
                <label htmlFor="subCategory">Sub Category</label>
                <input 
                type="text" id="subCategory" placeholder="Head and Skull"
                value={subCategory} onChange={(e) => setSubCategory(e.target.value)} 
                /> <br />
                <label htmlFor="code" >Lab Item Code</label>
                <input 
                type="text" placeholder="Aoc123FH" id="code"
                value={itemCode} onChange={(e) => setCode(e.target.value)} 
                /> <br />
                <label htmlFor="price">Price</label>
                <input 
                type="number" placeholder="2.02" id="price"
                value={price} onChange={(e) => setPrice(e.target.value)} 
                /> <br />
                <button>ADD</button>
            </form>
            <div className="chart"></div>
        </div>

        {
            isLoading ? (<p>Loading</p>) : (   <Lab labitems={labitems} />)
        }
    </div>
  )
}
