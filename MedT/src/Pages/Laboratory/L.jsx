import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateLabThunk,
  removeLabThunk,
  fetchLabThunk,
} from "../../store/features/Laboratory/LabSlice";
import Model from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import { IoMdClose } from "react-icons/io";

export default function L({ labitem }) {
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

  //   const options1 = [
  //     {value: "Radiology", label: "Radiology"},
  //     {value: "Laboratory", label: "Laboratory"},
  // ]
  // const options2 = [
  //     {value: "Diagnostic", label: "Diagnostic"},
  //     {value: "Clinical", label: "Clinical"},
  //     {value: "Research", label: "Research"},
  //     {value:  "Others", label: "Others"}
  // ]

  const updateOne = (id) => {
    const labmm = {
      id,
      itemName,
      labType,
      mainCategory,
      subCategory,
      itemCode,
      price,
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
    dispatch(fetchLabThunk());
  }, [dispatch]);

  return (
    <>
      <div className="ltablee">
        <table>
          {
            <tbody>
              <tr>
                <td style={{ width: "14%" }}>{labitem?.itemName}</td>
                <td style={{ width: "14%" }}>{labitem?.labType}</td>
                <td style={{ width: "15%" }}>{labitem?.mainCategory}</td>
                <td style={{ width: "15%" }}>{labitem?.subCategory}</td>
                <td style={{ width: "15%" }}>{labitem?.itemCode}</td>
                <td style={{ width: "12%" }}>{labitem?.price}</td>
                <td style={{ width: "15%" }}>
                  <button
                    style={{ cursor: "pointer" }}
                    className="view"
                    onClick={() => {
                      setVisible(true);
                      toast("Currently viewing details of a lab equipment", {
                        position: "top-left",
                        style: {
                          background: "var(--background-color)",
                          color: "var(--background-text)",
                        },
                        duration: 3000,
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
                        width: "500px",
                        height: "550px",
                        color: "var(--background-color-four)",
                        marginTop: "5%",
                        marginLeft: "30%",
                        textAlign: "left",
                        background: "var(--active-link-two)",
                        boxShadow: "0 0.1rem 0.3rem var(--background-text)",
                        borderRadius: "1rem",
                      },
                    }}
                  >
                    <div className="labView">
                      <button
                        style={{
                          fontSize: "1rem",
                          color: "var(--background-color-four)",
                          backgroundColor: "var(--background-color)",
                          marginLeft: "20rem",
                          borderRadius: "20%",
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
                            color: "var(--background-text)",
                            fontWeight: "bold",
                          }}
                        >
                          ItemName:
                        </td>
                        <td
                          style={{
                            color: "var(--font-color-four)",
                            padding: ".5rem",
                          }}
                        >
                          {labitem.itemName}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            color: "var(--background-text)",
                            fontWeight: "bold",
                          }}
                        >
                          LabType:
                        </td>
                        <td
                          style={{
                            color: "var(--font-color-four)",
                            padding: ".5rem",
                          }}
                        >
                          {labitem.labType}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            color: "var(--background-text)",
                            fontWeight: "bold",
                          }}
                        >
                          MainCategory:
                        </td>
                        <td
                          style={{
                            color: "var(--font-color-four)",
                            padding: ".5rem",
                          }}
                        >
                          {labitem.mainCategory}
                        </td>
                      </tr>
                      <tr style={{ color: "#360568", margin: ".5rem" }}>
                        <td
                          style={{
                            color: "var(--background-text)",
                            fontWeight: "bold",
                          }}
                        >
                          SubCategory:
                        </td>
                        <td
                          style={{
                            color: "var(--font-color-four)",
                            padding: ".5rem",
                          }}
                        >
                          {labitem.subCategory}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            color: "var(--background-text)",
                            fontWeight: "bold",
                          }}
                        >
                          ItemCode:
                        </td>
                        <td
                          style={{
                            color: "var(--font-color-four)",
                            padding: "1rem",
                          }}
                        >
                          {labitem.itemCode}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            color: "var(--background-text)",
                            fontWeight: "bold",
                          }}
                        >
                          Price:
                        </td>
                        <td
                          style={{
                            color: "var(--font-color-four)",
                            padding: "1rem",
                          }}
                        >
                          {labitem.price}
                        </td>
                      </tr>
                    </div>
                    <button
                      className="backBtn"
                      onClick={() => setVisible(false)}
                    >
                      Go Back
                    </button>
                  </Model>
                  <button
                    style={{ cursor: "pointer" }}
                    className="update"
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
                        width: "700px",
                        height: "470px",
                        marginLeft: "25%",
                        color: "var(--background-color-four)",
                        textAlign: "left",
                        borderRadius: "1rem",
                        padding: "2rem",
                        boxShadow: "0 0.1rem 0.3rem var(--background-text)",
                        background: "var(--active-link-two)",
                      },
                    }}
                  >
                    <div className="modalTablel">
                      <Toaster />
                      <button
                        style={{
                          fontSize: "1rem",
                          color: "var(background-text)",
                          backgroundColor: "var(--background-color)",
                          marginLeft: "35rem",
                          borderRadius: "20%",
                          padding: ".2rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setUpdateModal(false)}
                      >
                        <IoMdClose />
                      </button>
                      <tr>
                        <td>
                          <label htmlFor="itemName">Lab Item Name</label>
                        </td>
                        <td>
                          <input
                            autoComplete="false"
                            type="text"
                            placeholder="Type lab name here"
                            id="itemName"
                            name="itemName"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                          />
                        </td>
                        <td>
                          <label htmlFor="labType">Lab Types</label>
                        </td>
                        <td>
                          <select
                            name="labType"
                            id="labType"
                            value={labType}
                            onChange={(e) => setLabType(e.target.value)}
                          >
                            <option value="Choose">Choose Below</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Laboratory">Laboratory</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="mainCategory">Main Category</label>
                        </td>
                        <td>
                          <select
                            name="mainCategory"
                            id="mainCategory"
                            value={mainCategory}
                            onChange={(e) => setMainCategory(e.target.value)}
                          >
                            <option value="Choose">Choose Below</option>
                            <option value="Diagnostic">Diagnostic</option>
                            <option value="Clinical">Clinical</option>
                            <option value="Research">Research</option>
                            <option value="Bacteriology">Bacteriology</option>
                            <option value="Virology">Virology</option>
                            <option value="Others">Others</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="subCategory">Sub Category</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            id="subCategory"
                            placeholder="Stool"
                            name="subCategory"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                          />{" "}
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="code">Lab Item Code</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Aoc123FH"
                            id="code"
                            name="code"
                            value={itemCode}
                            onChange={(e) => setCode(e.target.value)}
                          />{" "}
                          <br />
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
                          />{" "}
                          <br />
                        </td>
                        <td></td>
                      </tr>
                      <br /> <br />
                      <button
                        onClick={() => setUpdateModal(false)}
                        className="backBtn"
                      >
                        Go Back
                      </button>
                      <button
                        className="upModalBtn"
                        onClick={() => {
                          updateOne(labitem._id);
                          toast("Lab equipment updated successfully", {
                            position: "top-left",
                            style: {
                              background: "var(--background-color)",
                              color: "var(--background-text",
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
                    className="delete"
                    onClick={() => setPop(true)}
                  >
                    delete
                  </button>
                  <Model
                    isOpen={pop}
                    onRequestClose={() => setPop(false)}
                    style={{
                      overlay: {
                        background: "#transparent",
                      },
                      content: {
                        width: "350px",
                        color: "var(--background-text)",
                        height: "200px",
                        marginLeft: "35%",
                        textAlign: "center",
                        backgroundColor: "var(--background-color)",
                        padding: "2rem",
                        marginTop: "5%",
                        boxShadow: "0 0.1rem 0.2rem var(--background-text)",
                        borderRadius: "1rem",
                      },
                    }}
                  >
                    <h3 style={{ marginBottom: "1rem" }}>
                      Do you really want to delete the specified equipment ?
                    </h3>
                    <button
                      className="labModalBtn_no"
                      style={{
                        margin: ".5rem",
                        padding: ".5rem .9rem",
                        cursor: "pointer",
                      }}
                      onClick={() => setPop(false)}
                    >
                      No
                    </button>
                    <button
                      className="labModalBtn_yes"
                      style={{
                        margin: ".5rem",
                        padding: ".5rem .9rem",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        del(labitem._id);
                        toast("Lab equipment deleted successfully", {
                          position: "top-right",
                          style: {
                            background: "var(--background-color)",
                            color: "var(--background-text)",
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
