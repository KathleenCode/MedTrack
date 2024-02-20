import React from 'react';
import { useDispatch } from "react-redux";
import { updateLabThunk, removeLabThunk } from "../../store/features/Laboratory/LabSlice";

export default function L({labitem}) {
  console.log("item", labitem);
    const dispatch = useDispatch();

  return (
    <>
     <div>L</div>
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
                    onClick={() => dispatch(updateLabThunk(labitem._id))}
                    >update</button>
                  </td>
                  <td>
                    <button
                    onClick={() => dispatch(removeLabThunk(labitem._id))}
                    >delete</button>
                  </td>
                </tr>
              </tbody>
            }
          </table>
        </div>
    </>
  )
}
