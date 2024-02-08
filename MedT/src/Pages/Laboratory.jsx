import React from 'react';
import Lab from "./Lab";
import Search from "../components/Search";
import { useState } from 'react';

export default function Laboratory() {
    const [itemName, setItemName] = useState("");
    const [labType, setLabType] = useState("");
    const [mainCategory, setMainCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [code, setCode] = useState("");
    const [price, setPrice] = useState(0);

    const addOne = (e) => {
        e.preventDefault();

        const labItem = {
            itemName,
            labType,
            mainCategory,
            subCategory,
            code,
            price
        }
        console.log(labItem);
        
        setItemName("");
        setLabType("");
        setMainCategory("");
        setSubCategory("");
        setCode("");
        setPrice("");
    }

  return (
    <div>
        <Search />

        <form onSubmit={addOne}>
            <label htmlFor="itemName">Lab Item Name</label>
            <input 
            type="text" placeholder="Type lab name here" id="itemName" 
            value={itemName} onChange={(e) => setItemName(e.target.value)}
            />
            <label htmlFor="labType">Lab Types</label>
            <select name="labType" id="labType">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <label htmlFor="mainCategory">Main Category</label>
            <select name="mainCategory" id="mainCategory">
                <option value="">X-Ray</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <label htmlFor="subCategory">Sub Category</label>
            <input 
            type="text" id="subCategory" placeholder="Head and Skull"
            value={subCategory} onChange={(e) => setSubCategory(e.target.value)} 
            />
            <label htmlFor="code" >Lab Item Code</label>
            <input 
            type="text" placeholder="Aoc123FH" id="code"
            value={code} onChange={(e) => setCode(e.target.value)} 
            />
            <label htmlFor="price">Price</label>
            <input 
            type="number" placeholder="2.02" id="price"
            value={price} onChange={(e) => setPrice(e.target.value)} 
            />
            <button>ADD</button>
        </form>

        <Lab />
    </div>
  )
}
