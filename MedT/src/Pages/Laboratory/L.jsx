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
  const [pop, setPop] = useState(false);
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
                        color: "#d5c67a",
                        height: "400px",
                        marginTop: "10%",
                        borderLeft: "9px solid #ab3428",
                        marginLeft: "25%",
                        textAlign: "center",
                        backgroundColor: "#8CB9BD",
                        border: "3px solid #F8FAE5",
                        padding: "2rem",
                        margin: "1rem",
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
                
                <td>
                  <button onClick={() => openModall()}>update</button>
                </td>

                <Model
                  isOpen={updateModal}
                  onRequestClose={() => openModal()}
                  style={{
                    overlay: {
                      background: "transparent",
                    },
                    content: {
                      width: "500px",
                      height: "400px",
                      marginTop: "10%",
                      marginLeft: "25%",
                    },
                  }}
                >
                  <button onClick={() => setUpdateModal(false)}>Go Back</button>
                  <div className="modalTablel">
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
                      <option value="Diagnostic">Diagnostic</option>
                      <option value="Clinical">Clinical</option>
                      <option value="Research">Research</option>
                    </select> <br />
                    <label htmlFor="mainCategory">Main Category</label>
                    <select name="mainCategory" id="mainCategory" value={mainCategory} onChange={(e) => setMainCategory(e.target.value)} >
                      <option value="Microbiology">Microbiology</option>
                      <option value="Radiology">Radiology</option>
                      <option value="Laboratory">Laboratory</option>
                      <option value="Bacteriology">Bacteriology</option>
                      <option value="Virology">Virology</option>
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
                    <button onClick={() => { 
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
                        width: "500px",
                        color: "#d5c67a",
                        height: "400px",
                        marginTop: "10%",
                        borderLeft: "9px solid #ab3428",
                        marginLeft: "25%",
                        textAlign: "center",
                        backgroundColor: "#8CB9BD",
                        border: "3px solid #F8FAE5",
                        padding: "2rem",
                      },
                    }}>
                      <h3>Do you really want to delete the specified equipment ?</h3>
                      <span onClick={() => 
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
                      }}>Yes</span> <Toaster /><span onClick={() => setPop(false)}>No</span>
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

