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

  return (
    <>
      <div>
        <table style={{ border: "1px solid black" }}>
          {
            <tbody className="ptablee">
              <tr>
                <td>{pharmitem.drugName}</td>
                <td>{pharmitem.description}</td>
                <td>{pharmitem.price}</td>
                <td>{pharmitem.drugCode}</td>
                <td>{pharmitem.unitOfPricing}</td>

                <td>
                  <button onClick={() => {
                    setVisible(true);
                    toast("Currently viewing drug in pharmacy", {
                      position: "top-left",
                      style: {
                    background: "#a6e1fa",
                    color: "blue"
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
                        backgroundColor: "#597E52",
                        width: "500px",
                        height: "400px",
                        color: "#f5efff",
                        marginTop: "10%",
                        marginLeft: "25%",
                        border: "3px solid #FBF9F1",
                        textAlign: "center",
                      },
                    }}
                  >
                    <button style={{padding: ".7rem .9rem", marginBottom: "1rem"}} onClick={() => setVisible(false)}>Go Back</button>
                    <p style={{marginBottom: "1rem"}}>DrugName:<span style={{color: "#2c0735"}}>{pharmitem.drugName}</span></p>
                    <p style={{marginBottom: "1rem"}}>Description:<span style={{color: "#2c0735"}}>{pharmitem.description}</span></p>
                    <p style={{marginBottom: "1rem"}}>Price:<span style={{color: "#2c0735"}}>{pharmitem.price}</span></p>
                    <p style={{marginBottom: "1rem"}}>DrugCode:<span style={{color: "#2c0735"}}>{pharmitem.drugCode}</span></p>
                    <p style={{marginBottom: "1rem"}}>UnitOfPricing:<span style={{color: "#2c0735"}}>{pharmitem.unitOfPricing}</span></p>
                  </Model>
                </td>
                
                <td>
                  <button onClick={() => openModall()}>update</button>
                </td>

                <Model
                  isOpen={updateModal}
                  onRequestClose={() => openModal()
                  }
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
                  <div className="modalTablep">
                    <label htmlFor="drugName">Drug Name</label>
                    <input
                      type="text"
                      placeholder="Type drug name here"
                      id="drugName"
                      name="drugName"
                      value={drugName}
                      onChange={(e) => setDrugName(e.target.value)}
                    />{" "}
                    <br />
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      placeholder="describe drug"
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />{" "}
                    <br />
                    <label htmlFor="pricing">Unit of Pricing</label>
                    <input
                      type="text"
                      placeholder="Tablet"
                      id="pricing"
                      name="pricing"
                      value={unitOfPricing}
                      onChange={(e) => setPricing(e.target.value)}
                    />{" "}
                    <br />
                    <label htmlFor="code">Drug Code</label>
                    <input
                      type="text"
                      placeholder="Aoc123FH"
                      id="code"
                      name="code"
                      value={drugCode}
                      onChange={(e) => setCode(e.target.value)}
                    />{" "}
                    <br />
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      placeholder="2.02"
                      id="price"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />{" "}
                    <br />
                    <button onClick={() => { updateOne(pharmitem._id);
                    toast("Drug information updated successfully", {
                      position: "top-center",
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
                      dele(pharmitem._id); 
                      toast("Medicine deleted successfully", {
                        position: "top-center",
                        style: {
                          background: "#a6e1fa",
                          color: "blue"
                        },
                        duration: 4000
                      });}}>delete</button>
                      <Toaster /> */}
                      <button onClick={() => setPop(true)} >delete</button>
                      <Model isOpen={pop}
                           onRequestClose={() => setPop(false)}
                          style={{
                                overlay: {
                                 background: "#transparent",
                              },
                              content: {
                                backgroundColor: "#65B741",
                                width: "500px",
                                height: "400px",
                                color: "#f5efff",
                                marginTop: "10%",
                                marginLeft: "25%",
                                border: "3px solid #F7EFE5",
                                textAlign: "center",
                              },
                            }}>
                        <h3>Are you certain that this medicine should be deleted?</h3>
                        <span onClick={() => 
                                 {
                             dele(pharmitem._id); 
                             toast("Medicine deleted successfully", {
                               position: "bottom-left",
                               style: {
                             background: "#a6e1fa",
                             color: "blue"
                        },
                        duration: 4000
                      });
                      setPop(false);
                      }}>Yes</span><Toaster /><span onClick={() => setPop(false)}>No</span>
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
