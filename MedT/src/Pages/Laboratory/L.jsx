import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { updateLabThunk, removeLabThunk } from "../../store/features/Laboratory/LabSlice";
import LabUpPopup from '../../components/PopUp/LabUpPopup';
import Modal from "react-modal";

export default function L({labitem}) {
  console.log("item", labitem);
    const dispatch = useDispatch();

    const [itemName, setItemName] = useState("");
    const [labType, setLabType] = useState("");
    const [mainCategory, setMainCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [itemCode, setCode] = useState("");
    const [price, setPrice] = useState(0);
    const [pop, setPop] = useState(false);
    const [visible, setVisible] = useState(false);

    const updateOne = (id) => {

      const labItem = {
          itemName,
          labType,
          mainCategory,
          subCategory,
          itemCode,
          price
      }
      console.log(labItem);
      dispatch(updateLabThunk(labItem));
      
      setItemName("");
      setLabType("");
      setMainCategory("");
      setSubCategory("");
      setCode("");
      setPrice("");
  }

    const del = () => {
      if(confirm("Are you sure, you want to delete this equipment from laboratory ?")) {
        dispatch(removeLabThunk(labitem._id))
      }
    }

  return (
    <>
        <div>
          <table>
            {
              <tbody>
                <tr>
                  <td>{labitem.itemName}</td>
                  <td>{labitem.labType}</td>
                  <td>{labitem.mainCategory}</td>
                  <td>{labitem.subCategory}</td>
                  <td>{labitem.itemCode}</td>
                  <td>{labitem.price}</td>
                  <td>
                    <button
                    onClick={() => setPop(true)}
                    >update</button>
                  </td>
                  
                  <LabUpPopup trigger={pop} setTrigger={setPop}>
                    <table>
                    <form>
                      <label htmlFor="itemName">Lab Item Name</label>
                      <input 
                      type="text" placeholder="Type lab name here" id="itemName"  name="itemName"
                      value={itemName} onChange={(e) => setItemName(e.target.value)}
                      />
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
                      /> <br />
                     <button onClick={() => updateOne(labitem._id)}>update</button>
                    </form>
                    </table>
                  </LabUpPopup>

                  <td>
                    <button
                    onClick={del}
                    >delete</button>
                  </td>
                  <td>
                    <button onClick={() => setVisible(true)}>
                      view
                    </button>

                    <Modal isOpen={visible} onRequestClose={() => setVisible(false)} style={{
                      overlay: {
                        background: "blue"
                      },
                      content: {
                        width: "500px",
                        height: "500px"
                      }
                    }}>
                    <td>{labitem.itemName}</td>
                    <td>{labitem.labType}</td>
                    <td>{labitem.mainCategory}</td>
                    <td>{labitem.subCategory}</td>
                    <td>{labitem.itemCode}</td>
                    <td>{labitem.price}</td>
                    <button onClick={() => setVisible(false)}>Go Back</button>
                    </Modal>

                  </td>
                </tr>
              </tbody>
            }
          </table>
        </div>
    </>
  )
}
