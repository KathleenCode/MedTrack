import React from 'react';
import { useDispatch } from "react-redux";
import { updatePharmThunk, removePharmThunk } from "../../store/features/Pharmacy/PharmSlice";

export default function P({pharmitem}) {
    const dispatch = useDispatch();

  return (
    <>
     <div>P</div>
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
                  onClick={() => dispatch(updatePharmThunk(pharmitem._id))}
                  >update
                  </button>
                </td>
                <td>
                  <button
                  onClick={() => dispatch(removePharmThunk(pharmitem._id))}
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
