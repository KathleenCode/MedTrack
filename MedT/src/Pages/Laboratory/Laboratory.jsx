import React, { useEffect } from 'react';
import Lab from "./Lab";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addLabThunk, fetchLabThunk } from "../../store/features/Laboratory/LabSlice";
import "./Lab.css";
import toast, {Toaster} from 'react-hot-toast';
import LabChart from '../../components/Charts/LabChart';
import Select from "react-select";

export default function Laboratory() {
    const [itemName, setItemName] = useState("");
    const [labType, setLabType] = useState("");
    const [mainCategory, setMainCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [itemCode, setCode] = useState("");
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const labitems = useSelector(state => state.labItems);
    // console.log(labitems);
    const isLoading = useSelector(state => state.loading);

    const options1 = [
        {value: "Radiology", label: "Radiology"},
        {value: "Laboratory", label: "Laboratory"},
    ]
    const options2 = [
        {value: "Diagnostic", label: "Diagnostic"},
        {value: "Clinical", label: "Clinical"},
        {value: "Research", label: "Research"},
        {value:  "Others", label: "Others"}
    ]

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
        // console.log(labItem);
        dispatch(addLabThunk(labItem));

        toast("lab item added successfully", {
            position: "top-center",
            style: {
              background: "var(--background-color)",
              color: "var(--button-color-two)"
            },
            duration: 2000,
          });
        
        setItemName("");
        setLabType("");
        setMainCategory("");
        setSubCategory("");
        setCode("");
        setPrice("");
    };

    useEffect(() => {
        dispatch(fetchLabThunk());
    }, []);

  return (
    <div className="laby">

        <div className='labTop'>
            <div className="group">
                <form onSubmit={addOne} className="form">
                <h3 className="labHeading">Please fill the form below to add a lab item</h3>
                    <Toaster />

                    <div className="inputControl">
                        <label htmlFor="itemName">Lab Item Name</label>
                        <input 
                        autoComplete='false'
                        type="text" placeholder="Type lab name here" id="itemName"  name="itemName"
                        value={itemName} onChange={(e) => setItemName(e.target.value)}
                        />
                    </div>
                    <div className="inputControl">
                        <label htmlFor="labType">Lab Types</label>
                        <select name="labType" id="labType" value={labType} onChange={(e) => setLabType(e.target.value)} >
                            <option value="Choose">Choose Below</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Laboratory">Laboratory</option>
                        </select> <br />
                    </div> 
                    <div className="inputControl">
                        <label htmlFor="mainCategory">Main Category</label>
                        <select name="mainCategory" id="mainCategory" value={mainCategory} onChange={(e) => setMainCategory(e.target.value)} >
                            <option value="Choose">Choose Below</option>
                            <option value="Diagnostic">Diagnostic</option>
                            <option value="Clinical">Clinical</option>
                            <option value="Research">Research</option>
                            <option value="Bacteriology">Bacteriology</option>
                            <option value="Virology">Virology</option> 
                            <option value="Others">Others</option>
                        </select> <br />
                    </div>
                    <div className="inputControl">
                        <label htmlFor="subCategory">Sub Category</label>
                        <input 
                        autoComplete='false'
                        type="text" id="subCategory" placeholder="Stool" name="subCategory"
                        value={subCategory} onChange={(e) => setSubCategory(e.target.value)} 
                        /> <br />
                    </div>
                    <div className="inputControl">
                        <label htmlFor="code" >Lab Item Code</label>
                        <input 
                        autoComplete='false'
                        type="text" placeholder="Aoc123FH" id="code" name="code"
                        value={itemCode} onChange={(e) => setCode(e.target.value)} 
                        /> <br />
                    </div>
                    <div className="inputControl">
                        <label htmlFor="price">Price</label>
                        <input autoComplete='false'
                        type="number" placeholder="2.02" id="price" name="price"
                        value={price} onChange={(e) => setPrice(e.target.value)} 
                        /> <br />
                    </div>
                    <button className='addBtn'>Add Item</button>
                </form>
            </div>

            <div className="chart">
                <LabChart />
            </div>
        </div>

        {
            isLoading ? (<p>Loading</p>) : (   <Lab labitems={labitems} />)
        }
    </div>
  )
}
