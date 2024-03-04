import React, { useEffect } from 'react';
import Lab from "./Lab";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addLabThunk, fetchLabThunk } from "../../store/features/Laboratory/LabSlice";
import "./Lab.css";
import toast, {Toaster} from 'react-hot-toast';
import Select from "react-select";
import LaboChart from '../../components/Charts/LaboChart';
// import {Chart as ChartJS, defaults} from "chart.js/auto";
// import {labData} from "../../data/labh.js";

export default function Laboratory() {
    const [itemName, setItemName] = useState("");
    const [labType, setLabType] = useState("");
    const [mainCategory, setMainCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [itemCode, setCode] = useState("");
    const [price, setPrice] = useState(0);

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

    const labitems = useSelector(state => state.labItems);
    console.log(labitems);

    defaults.maintainAspectRatio = false;
    defaults.responsive = true;

    defaults.plugins.title.display = true;
    defaults.plugins.title.align = "start";
    defaults.plugins.title.font.size = 20;
    defaults.plugins.title.color = "black";

    const [userData, setUserData] = useState({
        labels: labData.map(data => (data.itemName)),
        datasets: [
            {
            label: "Laboratory types",
            data: labData.map(info => (info.labType)),
            backgroundColor: ["red", "yellow", "green", "blue", "orange"],
            borderColor: "black",
            borderWidth: 2,
        },
        {
            label: "Laboratory item codes",
            data: labData.map(info => (info.itemCode)),
            backgroundColor: ["red", "yellow", "green", "blue", "orange"],
            borderColor: "black",
            borderWidth: 2,
            barThickness: 1,
            borderRadius: 4
        }
    ]
    })
   
   
    const dispatch = useDispatch();

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

        toast("Equipment added successfully", {
            position: "top-center",
            style: {
              background: "#ba324f",
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
    }

    useEffect(() => {
        dispatch(fetchLabThunk());
    }, []);

  return (
    <div className="mainl">
        <div className="inla">
            <div className="laby">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="#481f7d" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1607_9770)">
                <path d="M7.6 2.5V7.5C7.6 7.55523 7.55523 7.6 7.5 7.6H2.5C1.67157 7.6 0.999998 8.27157 1 9.1L1.00001 14.9C1.00001 15.7284 1.67158 16.4 2.50001 16.4H7.50001C7.55524 16.4 7.60001 16.4448 7.60001 16.5L7.6 21.5C7.6 22.3284 8.27157 23 9.1 23H14.9054C15.7338 23 16.4054 22.3284 16.4054 21.5L16.4054 16.4994C16.4054 16.4444 16.4498 16.3997 16.5048 16.3994L21.5092 16.3686C22.334 16.3636 23 15.6935 23 14.8687L23 9.06873C23 8.2367 22.3228 7.56364 21.4908 7.56876L16.506 7.59938C16.4505 7.59972 16.4054 7.55485 16.4054 7.49938V2.5C16.4054 1.67157 15.7338 1 14.9054 1H9.1C8.27157 1 7.6 1.67157 7.6 2.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1607_9770">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1H18M7 6H16M7 9H9.82983M7 13H9.82983M7 17H9.82983M7 1H16V18.5C16 20.9853 13.9853 23 11.5 23C9.01472 23 7 20.9853 7 18.5V1Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                </svg>


                <div className="group">
                    <form onSubmit={addOne}>
                        <Toaster />
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="itemName">Lab Item Name</label>
                                    </td>
                                    <td>
                                        <input 
                                        autoComplete="false"
                                        type="text" placeholder="Type lab name here" id="itemName"  name="itemName"
                                        value={itemName} onChange={(e) => setItemName(e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <label htmlFor="labType">Lab Types</label>
                                    </td>
                                    <td>
                                        <Select 
                                        name="labType"
                                        id="labType"
                                        options={options1} 
                                        placeholder="Choose lab type below" 
                                        defaultValue={labType} 
                                        onChange={setLabType}
                                        isSearchable
                                        noOptionsMessage={() => "Lab type not available"}
                                        styles={{
                                            placeholder: (baseStyles, state) => ({
                                                ...baseStyles,
                                                color: "#183446" 
                                            }),
                                            control: (baseStyles) => ({
                                                ...baseStyles,
                                                border: "none",
                                                borderBottom: "1px solid #05668d",
                                                backgroundColor: "#ccd5ff",
                                                width: "10rem",
                                                fontSize: "13px"
                                            }),
                                            clearIndicator: () => ({
                                                color: "blue"
                                            }), 
                                            dropdownIndicator: () => ({
                                                color: "black"
                                            })
                                        }}
                                        />
                                            {/* <select name="labType" id="labType" value={labType} onChange={(e) => setLabType(e.target.value)} >
                                            <option value="Choose">Choose Below</option>
                                            <option value="Radiology">Radiology</option>
                                            <option value="Laboratory">Laboratory</option>
                                            {/* <option value="Bacteriology">Bacteriology</option>
                                            <option value="Virology">Virology</option> */}
                                        {/* </select> <br /> */} 
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="mainCategory">Main Category</label>
                                    </td>
                                    <td>
                                        <Select 
                                        name="mainCategory"
                                        id="mainCategory" 
                                        options={options2}
                                        placeholder="Choose main category below" 
                                        defaultValue={mainCategory} 
                                        onChange={setMainCategory}
                                        isSearchable
                                        noOptionsMessage={() => "Category not available"}
                                        styles={{
                                            placeholder: (baseStyles, state) => ({
                                                ...baseStyles,
                                                color: "#183446" 
                                            }),
                                            control: (baseStyles) => ({
                                                ...baseStyles,
                                                border: "none",
                                                borderBottom: "1px solid #05668d",
                                                backgroundColor: "#ccd5ff",
                                                width: "10rem",
                                                fontSize: "13px"
                                            }),
                                            clearIndicator: () => ({
                                                color: "blue"
                                            }), 
                                            dropdownIndicator: () => ({
                                                color: "black"
                                            })
                                        }}
                                        />
                                            {/* <select name="mainCategory" id="mainCategory" value={mainCategory} onChange={(e) => setMainCategory(e.target.value)} >
                                            <option value="Diagnostic">Diagnostic</option>
                                            <option value="Clinical">Clinical</option>
                                            <option value="Research">Research</option>
                                        </select> <br /> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="subCategory">Sub Category</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="text" id="subCategory" placeholder="Stool" name="subCategory"
                                        value={subCategory} onChange={(e) => setSubCategory(e.target.value)} 
                                        /> <br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="code" >Lab Item Code</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="text" placeholder="Aoc123FH" id="code" name="code"
                                        value={itemCode} onChange={(e) => setCode(e.target.value)} 
                                        /> <br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="price">Price</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="number" placeholder="2.02" id="price" name="price"
                                        value={price} onChange={(e) => setPrice(e.target.value)} 
                                        /> <br />
                                    </td>
                                    <td>
                                        <button>ADD</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div className="chart">
                        {/* <LaboChart chartData={userData}
                        // options={{ maintainAspectRatio: false }}
                         options={{
                            plugins: {
                              title: {
                                display: true,
                                text: "Periodic equipment information",
                                align: "center",
                                padding: {
                                  top: 10,
                                  bottom: 30,
                                },
                              },
                              legend: {
                                display: true,
                                position: "top",
                              },
                              scales: {
                                y: {
                                  beginAtZero: true,
                                },
                              },
                            },
                          }}
                        /> */}
                    </div>
                </div>

                {
                    isLoading ? (<p>Loading</p>) : (   <Lab labitems={labitems} />)
                }
            </div>
        </div>
    </div>
  )
}
