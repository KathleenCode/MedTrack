import React from 'react';
import Pharm from './Pharm';
import Search from "../components/Search/Search";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function Pharmacy() {
    const [drugName, setDrugName] = useState("");
    const [description, setDescription] = useState("");
    const [pricing, setPricing] = useState("");
    const [code, setCode] = useState("");
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const pharmitems = useSelector(state => state.pharmItems.pharmItems);
    const isLoading = useSelector(state => state.pharmItems.loading);

    const add = (e) => {
        e.preventDefault();

        const pharmItem = {
            drugName,
            description,
            pricing,
            code,
            price
        }
        console.log(pharmItem);

        setDrugName("");
        setDescription("");
        setPricing("");
        setCode("");
        setPrice(0);
    }
    
  return (
    <div>
        <Search />

        <form onSubmit={add}>
            <label htmlFor="drugName">Drug Name</label>
            <input 
            type="text" placeholder="Type drug name here" id="drugName"
            value={drugName} onChange={(e) => setDrugName(e.target.value)} 
            />
            <label htmlFor="description">Description</label>
            <input 
            type="text" placeholder="Lorem ipsum with little information" id="description"
            value={description} onChange={(e) => setDescription(e.target.value)} 
            />
            <label htmlFor="pricing">Unit of Pricing</label>
            <input 
            type="text" placeholder="Tablet" id="pricing" 
            value={pricing} onChange={(e) => setPricing(e.target.value)}
            />
            <label htmlFor="code">Drug Code</label>
            <input
             type="text" placeholder="Aoc123FH" id="code"
             value={code} onChange={(e) => setPrice(e.target.value)} 
             />
            <label htmlFor="price">Price</label>
            <input 
            type="number" placeholder="2.02" id="price"
            value={price} onChange={(e) => setPrice(e.target.value)} 
            />
            <button>ADD</button>
        </form>

        {
            isLoading ? (<p>loading...</p>) : (  <Pharm pharmitems={pharmitems} />)
        }

    </div>
  )
}
