import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { updatePharmThunk, removePharmThunk } from "../../store/features/Pharmacy/PharmSlice";
import PhUpPopup from '../../components/PopUp/PhUpPopup';
import Modal from "react-modal";

export default function P({pharmitem}) {
    const dispatch = useDispatch();

    const [drugName, setDrugName] = useState("");
    const [description, setDescription] = useState("");
    const [unitOfPricing, setPricing] = useState("");
    const [drugCode, setCode] = useState("");
    const [price, setPrice] = useState(0);
    const [pop, setPop] = useState(false);
    const [visible, setVisible] = useState(false);

    const updateOne = (id) => {

      const pharmItem = {
          drugName,
          description,
          unitOfPricing,
          drugCode,
          price
      }
      console.log(pharmItem);
      dispatch(updatePharmThunk(pharmItem));

      setDrugName("");
      setDescription("");
      setPricing("");
      setCode("");
      setPrice(0);
  }

    const dele = () => {
      if(confirm("Do you really want to delete this medicine from pharmacy")) {
        dispatch(removePharmThunk(id))
      }
    }

  return (
    <>
        <div>
          <table>
            {
              <tbody>
                <tr>
                <td>{pharmitem.drugName}</td>
                <td>{pharmitem.description}</td>
                <td>{pharmitem.price}</td>
                <td>{pharmitem.drugCode}</td>
                <td>{pharmitem.unitOfPricing}</td>
                <td>
                  <button
                  onClick={() => setPop(true)}
                  >update
                  </button>
                </td>

                <PhUpPopup trigger={pop} setTrigger={setPop}>
                  <table>
                  <form>
                    <label htmlFor="drugName">Drug Name</label>
                    <input 
                  type="text" placeholder="Type drug name here" id="drugName" name="drugName"
                  value={drugName} onChange={(e) => setDrugName(e.target.value)} 
                    /> <br />
                    <label htmlFor="description">Description</label>
                    <input 
                    type="text" placeholder="describe drug" id="description" name="description"
                    value={description} onChange={(e) => setDescription(e.target.value)} 
                    /> <br />
                    <label htmlFor="pricing">Unit of Pricing</label>
                    <input 
                    type="text" placeholder="Tablet" id="pricing" name="pricing"
                    value={unitOfPricing} onChange={(e) => setPricing(e.target.value)}
                    /> <br />
                  <label htmlFor="code">Drug Code</label>
                  <input
                  type="text" placeholder="Aoc123FH" id="code" name="code"
                  value={drugCode} onChange={(e) => setCode(e.target.value)} 
                  /> <br />
                  <label htmlFor="price">Price</label>
                  <input 
                  type="number" placeholder="2.02" id="price" name="price"
                  value={price} onChange={(e) => setPrice(e.target.value)} 
                  /> <br />
                  <button onClick={() => updateOne(pharmitem._id)}>update</button>
                </form>
                  </table>
                </PhUpPopup>

                <td>
                  <button
                  onClick={dele}
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
                       <td>{pharmitem.drugName}</td>
                       <td>{pharmitem.description}</td>
                       <td>{pharmitem.price}</td>
                       <td>{pharmitem.drugCode}</td>
                       <td>{pharmitem.unitOfPricing}</td>
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
