import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updatePharmThunk,
  removePharmThunk,
  fetchPharmThunk
} from "../../store/features/Pharmacy/PharmSlice";
import Model from "react-modal";
import toast, {Toaster} from "react-hot-toast";
import "./Pharm.css";

export default function P({ pharmitem }) {
  const dispatch = useDispatch();

  const [drugName, setDrugName] = useState("");
  const [description, setDescription] = useState("");
  const [unitOfPricing, setPricing] = useState("");
  const [drugCode, setCode] = useState("");
  const [price, setPrice] = useState(0);
  const [pop, setPop] = useState(false);
  const [visible, setVisible] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const updateOne = (id) => {
    const pharmm = {
      id,
      drugName,
      description,
      unitOfPricing,
      drugCode,
      price,
    };
    dispatch(updatePharmThunk(pharmm));

    setDrugName("");
    setDescription("");
    setPricing("");
    setCode("");
    setPrice(0);
    setUpdateModal(false);

  };

  const dele = (id) => {
      dispatch(removePharmThunk(id));
  };

  const openModall = () => {
    setUpdateModal(true);
    setDrugName(pharmitem.drugName);
    setDescription(pharmitem.description);
    setCode(pharmitem.drugCode);
    setPrice(pharmitem.price);
    setPricing(pharmitem.unitOfPricing);
  };

  useEffect(() => {
    dispatch(fetchPharmThunk())
  },[dispatch])


  const pharmTruncate = (str, maxLength) => {
    if (str.length>maxLength) {  
      return str.substring(0, maxLength) + "...";  
      } else {
        return str;  
      }  
    }

    const str = "pharmitem.description";  
    const maxLength = 50;  
    const truncatedStr = pharmTruncate(str, maxLength);  
    // console.log(truncatedStr);   


  return (
    <>
      <div>
        <table className="pharmTable">
          {
            <tbody className="ptablee">
              <tr>
                <td style={{ width: '20%' }}>{pharmitem.drugName}</td>
                <td style={{ width: '30%' }}>{pharmTruncate(pharmitem.description, 50)}</td>
                <td style={{ width: '12%' }}>{pharmitem.unitOfPricing}</td>
                <td style={{ width: '14%' }}>{pharmitem.drugCode}</td>
                <td style={{ width: '9%' }}>{pharmitem.price}</td>
                <td style={{ width: '15%' }}>
                  <button 
                  className="viewBtn" onClick={() => {
                    setVisible(true);
                    toast("Currently viewing drug in pharmacy", {
                      position: "top-left",
                      style: {
                    background: "var(--background-color)",
                    color: "var(--background-text)"
                    },
                    duration: 2000
                  });}
                  }>view</button>  
                  <Toaster />

                  <Model
                    isOpen={visible}
                    onRequestClose={() => setVisible(false)}
                    style={{
                      overlay: {
                        background: "#transparent",
                      },
                      content: {
                        background: "var(--background-color)",
                        width: "500px",
                        height: "400px",
                        color: "var(--background-text)",
                        marginTop: "5%",
                        marginLeft: "27%",
                        textAlign: "left",
                        borderRadius: "0.5rem",
                        boxShadow: "0 0.1rem 0.2rem var(--background-text)",
                        fontSize: "1rem"
                      },
                    }}
                  >
                    <p style={{margin: "1rem"}}>DrugName:<span style={{color: "#2C0735", padding: "1rem"}}>{pharmitem.drugName}</span></p>
                    <p style={{margin: "1rem"}}>Description:<span style={{color: "#2C0735", padding: "1rem"}}>{pharmitem.description}</span></p>
                    <p style={{margin: "1rem"}}>Price:<span style={{color: "#2C0735", padding: "1rem"}}>{pharmitem.price}</span></p>
                    <p style={{margin: "1rem"}}>DrugCode:<span style={{color: "#2C0735", padding: "1rem"}}>{pharmitem.drugCode}</span></p>
                    <p style={{margin: "1rem"}}>UnitOfPricing:<span style={{color: "#2C0735", padding: "1rem"}}>{pharmitem.unitOfPricing}</span></p>
                    <button style={{padding: ".7rem .9rem", marginBottom: "1rem", cursor: "pointer"}} onClick={() => setVisible(false)}>Go Back</button>
                  </Model>

                  <button className="upBtn" onClick={() => openModall()}>update</button> 
                  <Model
                  isOpen={updateModal}
                  onRequestClose={() => openModal()
                  }
                  style={{
                    overlay: {
                      background: "transparent",
                      backdropFilter: "blur(3px)"
                    },
                    content: {
                      width: "500px",
                      height: "500px",
                      marginLeft: "29%",
                      color: "var(--background-text)",
                      textAlign: "left",
                      borderRadius: "0.5rem",
                      padding: "2rem",
                      fontSize: "1.1rem",
                      boxShadow: "0 0.1rem 0.2rem var(--background-text)",
                      background: "var(--background-color)"
                    },
                  }}
                >
                  <div className="modalTablep">
                        <Toaster />
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="drugName">Drug Name</label>
                                    </td>
                                    <td>
                                        <input
                                        type="text" placeholder="Type drug name here" id="drugName" name="drugName"
                                        value={drugName} onChange={(e) => setDrugName(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="description">Description</label>
                                    </td>
                                    <td>
                                        <textarea placeholder="Describe drug here" id="description" name="description"
                                        value={description} onChange={(e) => setDescription(e.target.value)}
                                        >e</textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="pricing">Unit of Pricing</label>
                                    </td>
                                    <td>
                                        <input
                                        type="text" placeholder="Tablet" id="pricing" name="pricing"
                                        value={unitOfPricing} onChange={(e) => setPricing(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="code">Drug Code</label>
                                    </td>
                                    <td>
                                        <input
                                        type="text" placeholder="Aoc123FH" id="code" name="code"
                                        value={drugCode} onChange={(e) => setCode(e.target.value)}
                                        />
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
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <button onClick={() => setUpdateModal(false) } style={{padding: ".5rem 1rem", backgroundColor: "#F2F4FF", cursor: "pointer", borderRadius: "3px"}} >Go Back</button>
                    <button style={{padding: ".5rem 1rem", backgroundColor: "#F2F4FF", cursor: "pointer", border: "2px solid #0072BB", borderRadius: "3px"}}
                    onClick={() => { updateOne(pharmitem._id);
                    toast("Drug information updated successfully", {
                      position: "top-center",
                      style: {
                      background: "#A6E1FA",
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
                  {/* <button className="upBtn"
                    onClick={() => { updateOne(pharmitem._id);
                    toast("Drug information updated successfully", {
                      position: "top-center",
                      style: {
                      background: "#A6E1FA",
                      color: "blue"
                    },
                    duration: 3000
                  });
                  setUpdateModal(false);
                }}>update</button> */}
                
                  <button onClick={() => setPop(true)}
                  className="delBtn"
                  >delete</button>
                  <Toaster /> 
                  <Model isOpen={pop}
                           onRequestClose={() => setPop(false)}
                          style={{
                                overlay: {
                                 background: "#transparent",
                              },
                              content: {
                                backgroundColor: "#A9D6E5",
                                width: "350px",
                                height: "200px",
                                color: "#C1121F",
                                marginLeft: "35%",
                                border: "9px solid #F7EFE5",
                                textAlign: "center",
                                padding: "2rem",
                              },
                            }}>
                        <h3 style={{marginBottom: "1rem" }}>Are you certain that this medicine should be deleted?</h3>
                        <button style={{margin: ".5rem", padding: ".5rem .9rem", cursor: "pointer"}} onClick={() => setPop(false)}>No</button>
                        <button style={{margin: ".5rem", padding: ".5rem .9rem", cursor: "pointer"}} onClick={() =>
                                 {
                             dele(pharmitem._id);
                             toast("Medicine deleted successfully", {
                               position: "bottom-left",
                               style: {
                               background: "#A6E1FA",
                               color: "blue"
                        },
                        duration: 4000
                      });
                      setPop(false);
                      }}>Yes</button>
                      <Toaster />
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
