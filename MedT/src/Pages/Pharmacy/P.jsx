import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updatePharmThunk,
  removePharmThunk,
  fetchPharmThunk
} from "../../store/features/Pharmacy/PharmSlice";
// import PhUpPopup from "../../components/PopUp/PhUpPopup";
import Model from "react-modal";

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
    if (confirm("Do you really want to delete this medicine from pharmacy")) {
      dispatch(removePharmThunk(id));
    }
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
            <tbody>
              <tr>
                <td>{pharmitem.drugName}</td>
                <td>{pharmitem.description}</td>
                <td>{pharmitem.price}</td>
                <td>{pharmitem.drugCode}</td>
                <td>{pharmitem.unitOfPricing}</td>
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
                    <button onClick={() => updateOne(pharmitem._id)}>
                      update item
                    </button>
                  </div>
                </Model>

                <td>
                  <button onClick={() => dele(pharmitem._id)}>delete</button>
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
                    <p>{pharmitem.drugName}</p>
                    <p>{pharmitem.description}</p>
                    <p>{pharmitem.price}</p>
                    <p>{pharmitem.drugCode}</p>
                    <p>{pharmitem.unitOfPricing}</p>
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
