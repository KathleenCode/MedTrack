import React, { useEffect } from 'react';
import Lab from "./Lab";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addLabThunk, fetchLabThunk } from "../../store/features/Laboratory/LabSlice";
import "./Lab.css";
import toast, {Toaster} from 'react-hot-toast';
import LabChart from '../../components/Charts/LabChart';

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

        toast("Equipment added successfully", {
            position: "top-center",
            style: {
              background: "#BA324F",
              color: "white"
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

        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1607_9770)">
        <path d="M7.6 2.5V7.5C7.6 7.55523 7.55523 7.6 7.5 7.6H2.5C1.67157 7.6 0.999998 8.27157 1 9.1L1.00001 14.9C1.00001 15.7284 1.67158 16.4 2.50001 16.4H7.50001C7.55524 16.4 7.60001 16.4448 7.60001 16.5L7.6 21.5C7.6 22.3284 8.27157 23 9.1 23H14.9054C15.7338 23 16.4054 22.3284 16.4054 21.5L16.4054 16.4994C16.4054 16.4444 16.4498 16.3997 16.5048 16.3994L21.5092 16.3686C22.334 16.3636 23 15.6935 23 14.8687L23 9.06873C23 8.2367 22.3228 7.56364 21.4908 7.56876L16.506 7.59938C16.4505 7.59972 16.4054 7.55485 16.4054 7.49938V2.5C16.4054 1.67157 15.7338 1 14.9054 1H9.1C8.27157 1 7.6 1.67157 7.6 2.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1607_9770">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
         */}
        <div className='labTop'>
            <div className="group">
                <form onSubmit={addOne} className="form">
                <h3 className="labHeading">Please fill the form below to add a lab item</h3>
                    <Toaster />

                    <div className="inputControl">
                        <label htmlFor="itemName">Lab Item Name</label>
                        <input 
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
                        type="text" id="subCategory" placeholder="Stool" name="subCategory"
                        value={subCategory} onChange={(e) => setSubCategory(e.target.value)} 
                        /> <br />
                    </div>
                    <div className="inputControl">
                        <label htmlFor="code" >Lab Item Code</label>
                        <input 
                        type="text" placeholder="Aoc123FH" id="code" name="code"
                        value={itemCode} onChange={(e) => setCode(e.target.value)} 
                        /> <br />
                    </div>
                    <div className="inputControl">
                        <label htmlFor="price">Price</label>
                        <input 
                        type="number" placeholder="2.02" id="price" name="price"
                        value={price} onChange={(e) => setPrice(e.target.value)} 
                        /> <br />
                    </div>
                    <button className='addBtn'>ADD</button>
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
