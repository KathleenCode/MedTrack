import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateLabThunk,
  removeLabThunk,
  fetchLabThunk
} from "../../store/features/Laboratory/LabSlice";
import Model from "react-modal";
import toast, {Toaster} from "react-hot-toast";
import Select from "react-select";

export default function L({labitem}) {
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState("");
  const [labType, setLabType] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [itemCode, setCode] = useState("");
  const [price, setPrice] = useState(0);
  const [pop, setPop] = useState(false);
  const [visible, setVisible] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const options1 = [
    {value: "Radiology", label: "Radiology"},
    {value: "Laboratory", label: "Laboratory"},
    {value:  "Others", label: "Others"}
]

const options2 = [
    {value: "Diagnostic", label: "Diagnostic"},
    {value: "Clinical", label: "Clinical"},
    {value: "Research", label: "Research"},
    {value:  "Others", label: "Others"}
]

  const updateOne = (id) => {
    const labmm = {
      id,
      itemName,
      labType,
      mainCategory,
      subCategory,
      itemCode,
      price
    };
    dispatch(updateLabThunk(labmm));

    setItemName("");
    setLabType("");
    setMainCategory("");
    setSubCategory("");
    setCode("");
    setPrice("");
    setUpdateModal(false);

  };

  const del = (id) => {
      dispatch(removeLabThunk(id));
  };

  const openModall = () => {
    setUpdateModal(true);
    setItemName(labitem.itemName);
    setLabType(labitem.labType);
    setMainCategory(labitem.mainCategory);
    setSubCategory(labitem.subCategory);
    setCode(labitem.itemCode);
    setPrice(labitem.price);
  };

  useEffect(() => {
    dispatch(fetchLabThunk())
  },[dispatch])

  return (
    <>
      <div className="ltablee">
        <table style={{ border: "1px solid black" }}>
          {
            <tbody>
              <tr>
                  <td>{labitem?.itemName}</td>
                  <td>{labitem?.labType}</td>
                  <td>{labitem?.mainCategory}</td>
                  <td>{labitem?.subCategory}</td>
                  <td>{labitem?.itemCode}</td>
                  <td>{labitem.price}</td>

                  <td>
                  <button onClick={() => { 
                    setVisible(true);
                    toast("Currently viewing a laboratory equipment details", {
                      position: "top-right",
                      style: {
                      background: "#a6e1fa",
                      color: "blue"
                      },
                      duration: 3000
                    });}}>view</button>
                    <Toaster />

                  <Model
                    isOpen={visible}
                    onRequestClose={() => setVisible(false)}
                    style={{
                      overlay: {
                        background: "#transparent",
                      },
                      content: {
                        width: "500px",
                        color: "#0d0106",
                        height: "400px",
                        borderLeft: "9px solid #020887",
                        marginTop: "5%",
                        marginLeft: "27%",
                        textAlign: "center",
                        backgroundColor: "#cae5ff",
                        border: "3px solid #F8FAE5",
                      },
                    }}
                  >
                    <button style={{padding: ".7rem .9rem", marginBottom: "1rem", cursor: "pointer"}} onClick={() => setVisible(false)}>Go Back</button>
                      <p style={{margin: "1rem"}}>ItemName:<span style={{color: "#a31621", padding: "1rem"}}>{labitem.itemName}</span></p>
                      <p style={{margin: "1rem"}}>LabType:<span style={{color: "#a31621", padding: "1rem"}}>{labitem.labType}</span></p>
                      <p style={{margin: "1rem"}}>MainCategory:<span style={{color: "#a31621", padding: "1rem"}}>{labitem.mainCategory}</span></p>
                      <p style={{margin: "1rem"}}>SubCategory:<span style={{color: "#a31621", padding: "1rem"}}>{labitem.subCategory}</span></p>
                      <p style={{margin: "1rem"}}>ItemCode:<span style={{color: "#a31621", padding: "1rem"}}>{labitem.itemCode}</span></p>
                      <p style={{margin: "1rem"}}>Price:<span style={{color: "#a31621", padding: "1rem"}}>{labitem.price}</span></p>
                  </Model>
                </td>
                
                <td>
                  <button onClick={() => openModall()}>update</button>
                </td>

                <Model
                  isOpen={updateModal}
                  onRequestClose={() => openModal()}
                  style={{
                    overlay: {
                      background: "transparent",
                      backdropFilter: "blur(3px)"
                    },
                    content: {
                      width: "900px",
                      height: "500px",
                      marginLeft: "15%",
                      color: "#480355",
                      textAlign: "center",
                      borderRadius: "15px",
                      padding: "2rem",
                      border: "5px solid #bed8d4"
                    },
                  }}
                >
                  <button onClick={() => setUpdateModal(false)} style={{ backgroundColor: "#f2f4ff", borderRadius: "3px", padding: ".5rem 1rem", cursor: "pointer"}} >Go Back</button>
                  <div className="modalTablel">
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
                                                backgroundColor: "#ccd5ff"
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
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    <br />{" "}
                    <br />
                    <button
                    style={{ backgroundColor: "#f2f4ff", borderRadius: "3px", padding: ".5rem 1rem", cursor: "pointer", border: "2px solid #1b4353"}}
                    onClick={() => { 
                      updateOne(labitem._id);
                      toast("Medicine updated successfully", {
                        position: "top-left",
                        style: {
                        background: "#a6e1fa",
                        color: "blue"
                        },
                        duration: 3000
                      });
                      setUpdateModal(false);
                      }}>
                      update item
                    </button>
                    <Toaster />
                  </div>
                </Model>

                <td>
                  {/* <button onClick={() => 
                    {
                      del(labitem._id);
                    toast("equipment deleted successfully", {
                      position: "top-center",
                      style: {
                        background: "#ba324f",
                        color: "white"
                      },
                      duration: 4000,
                    });}}>delete</button>
                    <Toaster /> */}
                    <button onClick={() => setPop(true)} >delete</button>
                    <Model  isOpen={pop}
                    onRequestClose={() => setPop(false)}  style={{
                      overlay: {
                        background: "#transparent",
                      },
                      content: {
                        width: "350px",
                        color: "#780000",
                        height: "200px",
                        borderLeft: "9px solid #ab3428",
                        marginLeft: "35%",
                        textAlign: "center",
                        backgroundColor: "#abc4ff",
                        border: "9px solid #F8FAE5",
                        padding: "2rem",
                        marginTop: "5%"
                      },
                    }}>
                      <h3 style={{marginBottom: "1rem" }}>Do you really want to delete the specified equipment ?</h3>
                      <button style={{margin: ".5rem", padding: ".5rem .9rem", cursor: "pointer"}} onClick={() => 
                    {
                     del(labitem._id);
                      toast("equipment deleted successfully", {
                       position: "bottom-center",
                       style: {
                        background: "#ba324f",
                        color: "white"
                      },
                      duration: 4000,
                      });
                      setPop(false);
                      }}>Yes</button> <Toaster /><button style={{margin: ".5rem", padding: ".5rem .9rem", cursor: "pointer"}} onClick={() => setPop(false)}>No</button>
                    </Model>
                </td>
              </tr>
            </tbody>
          }
        </table>
      </div>
    </>
  );
}

