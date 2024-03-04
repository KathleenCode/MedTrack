import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateLabThunk,
  removeLabThunk,
  fetchLabThunk
} from "../../store/features/Laboratory/LabSlice";
import Model from "react-modal";
import toast, {Toaster} from "react-hot-toast";

export default function L({labitem}) {
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState("");
  const [labType, setLabType] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [itemCode, setCode] = useState("");
  const [price, setPrice] = useState(0);
  // const [pop, setPop] = useState(false);
  const [visible, setVisible] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

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
            <tbody>
              <tr>
                  <td style={{width: "14%"}}>{labitem?.itemName}</td>
                  <td style={{width: "14%"}}>{labitem?.labType}</td>
                  <td style={{width: "15%"}}>{labitem?.mainCategory}</td>
                  <td style={{width: "15%"}}>{labitem?.subCategory}</td>
                  <td style={{width: "15%"}}>{labitem?.itemCode}</td>
                  <td style={{width: "12%"}}>{labitem?.price}</td>
                <td style={{width: "15%"}}>
                  <button onClick={() => setVisible(true)}>view</button>
                  <button onClick={() => openModall()}>update</button>
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

                <Model
                  isOpen={updateModal}
                  onRequestClose={() => openModal()}
                  style={{
                    overlay: {
                      background: "#5c677d",
                    },
                    content: {
                      width: "400px",
                      height: "300px",
                      marginTop: "10%",
                      marginLeft: "10%",
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
                    <button onClick={() => updateOne(labitem._id)}>
                      update item
                    </button>
                  </div>
                </Model>

                {/* <td> */}
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
                {/* </td> */}
                {/* <td> */}
                  {/* <button onClick={() => setVisible(true)}>view</button> */}

                  <Model
                    isOpen={visible}
                    onRequestClose={() => setVisible(false)}
                    style={{
                      overlay: {
                        background: "#transparent",
                      },
                      content: {
                        backgroundColor: "#545e75",
                        width: "350px",
                        color: "#d5c67a",
                        height: "250px",
                        marginTop: "10%",
                        borderLeft: "9px solid #ab3428",
                        marginLeft: "25%",
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
                {/* </td> */}
              </tr>
            </tbody>
          }
        </table>
      </div>
    </>
  );
}

