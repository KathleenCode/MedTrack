import React, { useEffect } from 'react';
import Pharm from './Pharm';
import Search from "../../components/Search/Search";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPharmThunk, fetchPharmThunk } from "../../store/features/Pharmacy/PharmSlice";
import "./Pharm.css";

export default function Pharmacy() {
    const [drugName, setDrugName] = useState("");
    const [description, setDescription] = useState("");
    const [unitOfPricing, setPricing] = useState("");
    const [drugCode, setCode] = useState("");
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const pharmitems = useSelector(state => state.pharmItems);
    console.log(pharmitems);
    const isLoading = useSelector(state => state.loading);

    const add = (e) => {
        e.preventDefault();

        const pharmItem = {
            drugName,
            description,
            unitOfPricing,
            drugCode,
            price
        }
        console.log(pharmItem);
        dispatch(addPharmThunk(pharmItem));

        setDrugName("");
        setDescription("");
        setPricing("");
        setCode("");
        setPrice(0);
    }

    useEffect(() => {
        dispatch(fetchPharmThunk())
    }, [])
    
  return (
    <div className="ph">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1607_9770)">
        <path d="M7.6 2.5V7.5C7.6 7.55523 7.55523 7.6 7.5 7.6H2.5C1.67157 7.6 0.999998 8.27157 1 9.1L1.00001 14.9C1.00001 15.7284 1.67158 16.4 2.50001 16.4H7.50001C7.55524 16.4 7.60001 16.4448 7.60001 16.5L7.6 21.5C7.6 22.3284 8.27157 23 9.1 23H14.9054C15.7338 23 16.4054 22.3284 16.4054 21.5L16.4054 16.4994C16.4054 16.4444 16.4498 16.3997 16.5048 16.3994L21.5092 16.3686C22.334 16.3636 23 15.6935 23 14.8687L23 9.06873C23 8.2367 22.3228 7.56364 21.4908 7.56876L16.506 7.59938C16.4505 7.59972 16.4054 7.55485 16.4054 7.49938V2.5C16.4054 1.67157 15.7338 1 14.9054 1H9.1C8.27157 1 7.6 1.67157 7.6 2.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1607_9770">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        <Search />
        
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <path d="M7 16H17M7 20H17M7 10.2678V7.31827M7 7.31827V4.73739C7 4.33014 7.33014 4 7.73739 4H9.02783C9.94415 4 10.687 4.74282 10.687 5.65914C10.687 6.57545 9.94415 7.31827 9.02783 7.31827H8.10609M7 7.31827H8.10609M12.8991 8.79306L11.24 10.4522M11.24 10.4522L9.58088 12.1113M11.24 10.4522L8.10609 7.31827M11.24 10.4522L12.8991 12.1113M5 23H19C19.5523 23 20 22.5523 20 22V2C20 1.44772 19.5523 1 19 1H5C4.44772 1 4 1.44772 4 2V22C4 22.5523 4.44772 23 5 23Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <div className="grup">
            <form onSubmit={add}>
                <label htmlFor="drugName">Drug Name</label>
                <input 
                type="text" placeholder="Type drug name here" id="drugName"
                value={drugName} onChange={(e) => setDrugName(e.target.value)} 
                /> <br />
                <label htmlFor="description">Description</label>
                <input 
                type="text" placeholder="describe drug" id="description"
                value={description} onChange={(e) => setDescription(e.target.value)} 
                /> <br />
                <label htmlFor="pricing">Unit of Pricing</label>
                <input 
                type="text" placeholder="Tablet" id="pricing" 
                value={unitOfPricing} onChange={(e) => setPricing(e.target.value)}
                /> <br />
                <label htmlFor="code">Drug Code</label>
                <input
                type="text" placeholder="Aoc123FH" id="code"
                value={drugCode} onChange={(e) => setCode(e.target.value)} 
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
            isLoading ? (<p>loading...</p>) : (  <Pharm pharmitems={pharmitems} />)
        }

    </div>
  )
}
