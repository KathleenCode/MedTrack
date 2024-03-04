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
        <table>
          {
            <tbody className="ltablee">
              <tr>
                  <td>{labitem?.itemName}</td>
                  <td>{labitem?.labType}</td>
                  <td>{labitem?.mainCategory}</td>
                  <td>{labitem?.subCategory}</td>
                  <td>{labitem?.itemCode}</td>
                  <td>{labitem?.price}</td>
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
                  <button onClick={() => setUpdateModal(false)}>Go Back</button>
                  <div>
                    <label htmlFor="itemName">Lab Item Name</label>
                    <input
                      type="text"
                      placeholder="Type lab name here"
                      id="itemName"
                      name="itemName"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />{" "}
                    <br />
                    <label htmlFor="labType">Lab Types</label>
                    <select name="labType" id="labType" value={labType} onChange={(e) => setLabType(e.target.value)} >
                      <option value="Radiology">Radiology</option>
                      <option value="Laboratory">Laboratory</option>
                    </select> <br />
                    <label htmlFor="mainCategory">Main Category</label>
                    <select name="mainCategory" id="mainCategory" value={mainCategory} onChange={(e) => setMainCategory(e.target.value)} >
                      <option value="Microbiology">Microbiology</option>
                      <option value="Bacteriology">Bacteriology</option>
                      <option value="Virology">Virology</option>
                      <option value="Clinical">Clinical</option>
                      <option value="Research">Research</option>
                      {/* <option value="Diagnostic">Diagnostic</option> */}

                    </select> <br />
                    <label htmlFor="subCategory">Sub Category</label>
                    <input 
                    type="text" id="subCategory" placeholder="Stool" name="subCategory"
                    value={subCategory} onChange={(e) => setSubCategory(e.target.value)} 
                    /> <br />
                    <label htmlFor="code" >Lab Item Code</label>
                    <input 
                    type="text" placeholder="Aoc123FH" id="code" name="code"
                      value={itemCode} onChange={(e) => setCode(e.target.value)} 
                      /> <br />
                      <label htmlFor="price">Price</label>
                      <input 
                      type="number" placeholder="2.02" id="price" name="price"
                      value={price} onChange={(e) => setPrice(e.target.value)} 
                      /> <br />{" "}
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
                  <button onClick={() => 
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
                    <Toaster />
                </td>
                <td>
                  <button onClick={() => setVisible(true)}>view</button>

                  <Model
                    isOpen={visible}
                    onRequestClose={() => setVisible(false)}
                    style={{
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
                      },
                    }}
                  >
                    <button style={{padding: ".7rem .9rem", marginBottom: "1rem"}} onClick={() => setVisible(false)}>Go Back</button>
                      <p style={{marginBottom: "1rem"}}>ItemName:<span style={{color: "#a31621"}}>{labitem.itemName}</span></p>
                      <p style={{marginBottom: "1rem"}}>LabType:<span style={{color: "#a31621"}}>{labitem.labType}</span></p>
                      <p style={{marginBottom: "1rem"}}>MainCategory:<span style={{color: "#a31621"}}>{labitem.mainCategory}</span></p>
                      <p style={{marginBottom: "1rem"}}>SubCategory:<span style={{color: "#a31621"}}>{labitem.subCategory}</span></p>
                      <p style={{marginBottom: "1rem"}}>ItemCode:<span style={{color: "#a31621"}}>{labitem.itemCode}</span></p>
                      <p style={{marginBottom: "1rem"}}>Price:<span style={{color: "#a31621"}}>{labitem.price}</span></p>
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

