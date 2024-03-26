import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updatePharmThunk,
  removePharmThunk,
  fetchPharmThunk,
} from "../../store/features/Pharmacy/PharmSlice";
import Model from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import "./Pharm.css";
import { IoMdClose } from "react-icons/io";

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
    dispatch(fetchPharmThunk());
  }, [dispatch]);

  const str = "pharmitem.description";
  const maxLength = 50;

  const pharmTruncate = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };


  const truncatedStr = pharmTruncate(str, maxLength);
  // console.log(truncatedStr);

  return (
    <>
      <div>
        <table className="pharmTable">
          {
            <tbody className="ptablee">
              <tr>
                <td style={{ width: "20%" }}>{pharmitem?.drugName}</td>
                <td style={{ width: "30%" }}>
                  {pharmTruncate(pharmitem?.description, 50)}
                </td>
                <td style={{ width: "12%" }}>{pharmitem?.unitOfPricing}</td>
                <td style={{ width: "14%" }}>{pharmitem?.drugCode}</td>
                <td style={{ width: "9%" }}>{pharmitem?.price}</td>
                <td style={{ width: "15%" }}>
                  <button
                    className="viewBtn"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setVisible(true);
                      toast("Currently viewing drug in pharmacy", {
                        position: "top-left",
                        style: {
                          background: "var(--background-color)",
                          color: "var(--background-text)",
                        },
                        duration: 1000,
                      });
                    }}
                  >
                    view
                  </button>
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
                        height: "430px",
                        color: "var(--background-color-four)",
                        marginTop: "5%",
                        marginLeft: "27%",
                        textAlign: "left",
                        borderRadius: "1rem",
                        boxShadow: "0 0.1rem 0.3rem var(--background-text)",
                        fontSize: "1rem",
                      },
                    }}
                  >
                    <button
                      style={{
                        fontSize: "1rem",
                        color: "var(--background-color-four)",
                        backgroundColor: "var(--background-color)",
                        marginLeft: "25rem",
                        borderRadius: "40%",
                        padding: ".2rem",
                        cursor: "pointer",
                      }}
                      onClick={() => setVisible(false)}
                    >
                      <IoMdClose />
                    </button>
                    <tr>
                      <td
                        style={{
                          padding: ".7rem",
                          color: "var(--background-color-four)",
                          fontWeight: "bold",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        DrugName:
                      </td>
                      <td
                        style={{
                          margin: ".7rem",
                          color: "var(--background-color-four)",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        {pharmitem.drugName}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: ".7rem",
                          color: "var(--background-color-four)",
                          fontWeight: "bold",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        Description:
                      </td>
                      <td
                        style={{
                          margin: ".7rem",
                          color: "var(--background-color-four)",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        {pharmitem.description}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: ".7rem",
                          color: "var(--background-color-four)",
                          fontWeight: "bold",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        Price:
                      </td>
                      <td
                        style={{
                          margin: ".7rem",
                          color: "var(--background-color-four)",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        {pharmitem.price}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: ".7rem",
                          color: "var(--background-color-four)",
                          fontWeight: "bold",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        DrugCode:
                      </td>
                      <td
                        style={{
                          margin: ".7rem",
                          color: "var(--background-color-four)",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        {pharmitem.drugCode}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: ".7rem",
                          color: "var(--background-color-four)",
                          fontWeight: "bold",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        UnitOfPricing:
                      </td>
                      <td
                        style={{
                          margin: ".7rem",
                          color: "var(--background-color-four)",
                          borderBottom: "1px solid var(--border-color-nine)",
                        }}
                      >
                        {pharmitem.unitOfPricing}
                      </td>
                    </tr>
                    <button
                      className="backBtn"
                      onClick={() => setVisible(false)}
                    >
                      Go Back
                    </button>
                  </Model>

                  <button
                    style={{ cursor: "pointer" }}
                    className="upBtn"
                    onClick={() => openModall()}
                  >
                    update
                  </button>
                  <Model
                    isOpen={updateModal}
                    onRequestClose={() => openModal()}
                    style={{
                      overlay: {
                        background: "transparent",
                        backdropFilter: "blur(3px)",
                      },
                      content: {
                        width: "500px",
                        height: "500px",
                        marginLeft: "29%",
                        color: "var(--background-color-four)",
                        textAlign: "left",
                        borderRadius: "1rem",
                        padding: "2rem",
                        fontSize: "1rem",
                        boxShadow: "0 0.1rem 0.3rem var(--background-text)",
                        background: "var(--active-link-two)",
                        overflow: "hidden",
                      },
                    }}
                  >
                    <div className="modalTablep">
                      <Toaster />
                      <button
                        style={{
                          fontSize: "1rem",
                          color: "var(--background-text)",
                          backgroundColor: "var(--background-color)",
                          marginLeft: "25rem",
                          borderRadius: "40%",
                          padding: ".3rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setUpdateModal(false)}
                      >
                        <IoMdClose />
                      </button>
                      <tr>
                        <td>
                          <label htmlFor="drugName">Drug Name</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Type drug name here"
                            id="drugName"
                            name="drugName"
                            value={drugName}
                            onChange={(e) => setDrugName(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="description">Description</label>
                        </td>
                        <td>
                          <textarea
                            placeholder="Describe drug here"
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          >
                            e
                          </textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="pricing">Unit of Pricing</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Tablet"
                            id="pricing"
                            name="pricing"
                            value={unitOfPricing}
                            onChange={(e) => setPricing(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="code">Drug Code</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Aoc123FH"
                            id="code"
                            name="code"
                            value={drugCode}
                            onChange={(e) => setCode(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="price">Price</label>
                        </td>
                        <td>
                          <input
                            type="number"
                            placeholder="2.02"
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </td>
                      </tr>
                      <br />
                      <button
                        onClick={() => setUpdateModal(false)}
                        className="backBtn"
                      >
                        Go Back
                      </button>
                      <button
                        className="upModalBtn"
                        onClick={() => {
                          updateOne(pharmitem._id);
                          toast("Drug information updated successfully", {
                            position: "top-center",
                            style: {
                              background: "var(--background-color)",
                              color: "var(--background-text)",
                            },
                            duration: 3000,
                          });
                          setUpdateModal(false);
                        }}
                      >
                        Save
                      </button>
                      <Toaster />
                    </div>
                  </Model>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => setPop(true)}
                    className="delBtn"
                  >
                    delete
                  </button>
                  <Toaster />
                  <Model
                    isOpen={pop}
                    onRequestClose={() => setPop(false)}
                    style={{
                      overlay: {
                        background: "#transparent",
                      },
                      content: {
                        backgroundColor: "var(--background-color)",
                        width: "350px",
                        height: "200px",
                        color: "var(--background-color-four)",
                        marginLeft: "35%",
                        textAlign: "center",
                        padding: "2rem",
                        boxShadow: "0 0.1rem 0.2rem var(--background-text)",
                        borderRadius: "1rem",
                      },
                    }}
                  >
                    <h3 style={{ marginBottom: "1rem" }}>
                      Are you certain that this medicine should be deleted?
                    </h3>
                    <button
                      className="delModalBtn_no"
                      onClick={() => setPop(false)}
                    >
                      No
                    </button>
                    <button
                      className="delModalBtn_yes"
                      onClick={() => {
                        dele(pharmitem._id);
                        toast("Medicine deleted successfully", {
                          position: "top-right",
                          style: {
                            background: "#eaebed",
                            color: "#16425b",
                          },
                          duration: 4000,
                        });
                        setPop(false);
                      }}
                    >
                      Yes
                    </button>
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
