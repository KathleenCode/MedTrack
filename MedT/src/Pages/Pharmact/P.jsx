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
  // const [pop, setPop] = useState(false);
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
    console.log(truncatedStr);   

  return (
    <>
      <div>
        {/* <table style={{ border: "1px solid black" }}> */}
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
                  <button className="viewBtn" onClick={() => setVisible(true)}>view</button>  
                  <button className="upBtn" onClick={() => openModall()}>update</button>
                  <button className="delBtn" onClick={() => 
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
                    <textarea
                      type="textarea" 
                      name="description"
                      id="description"
                      cols="30" 
                      rows="5"
                      placeholder="describe drug"
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
                    <button onClick={() => updateOne(pharmitem._id)}>
                      update item
                    </button>
                  </div>
                </Model>

                {/* <td>
                  <button onClick={() => 
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
                      <Toaster />
                </td> */}
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
                        backgroundColor: "#7e6c6c",
                        width: "350px",
                        height: "250px",
                        color: "#f5efff",
                        marginTop: "10%",
                        marginLeft: "25%",
                        borderLeft: "9px solid #ffba08",
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
                {/* </td> */}
              </tr>
            </tbody>
          }
        </table>
      </div>
    </>
  );
}
