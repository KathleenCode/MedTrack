import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateLabThunk,
  removeLabThunk,
  fetchLabThunk
} from "../../store/features/Laboratory/LabSlice";
import Model from "react-modal";

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
      <div>
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
                  <button onClick={() => openModall()}>update</button>
                </td>

                <Model
                  isOpen={updateModal}
                  onRequestClose={() => openModal()}
                  style={{
                    overlay: {
                      background: "#5c677d",
                    },
                    content: {
                      width: "700px",
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
                    <button onClick={() => updateOne(labitem._id)}>
                      update item
                    </button>
                  </div>
                </Model>

                <td>
                  <button onClick={() => del(labitem._id)}>delete</button>
                </td>
                <td>
                  <button onClick={() => setVisible(true)}>view</button>

                  <Model
                    isOpen={visible}
                    onRequestClose={() => setVisible(false)}
                    style={{
                      overlay: {
                        background: "#5c677d",
                      },
                      content: {
                        width: "700px",
                        height: "300px",
                        marginTop: "10%",
                        marginLeft: "10%",
                      },
                    }}
                  >
                    <button onClick={() => setVisible(false)}>Go Back</button>
                      <p>{labitem.itemName}</p>
                      <p>{labitem.labType}</p>
                      <p>{labitem.mainCategory}</p>
                      <p>{labitem.subCategory}</p>
                      <p>{labitem.itemCode}</p>
                      <p>{labitem.price}</p>
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

