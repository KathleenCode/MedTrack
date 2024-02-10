import React from 'react';
import { useDispatch } from "react-redux";
import { updatePharmThunk, removePharmThunk } from "../store/features/Pharmacy/PharmSlice";

export default function P({pharmitem}) {
    const dispatch = useDispatch();

  return (
    <>
     <div>P</div>
     {
        <div>
            <button
            onClick={() => dispatch(updatePharmThunk(pharmitem._id))}
            >update</button>
            <button
            onClick={() => dispatch(removePharmThunk(pharmitem._id))}
            >delete</button>
            <span>{pharmitem.drugName}</span>
            <span>{pharmitem.description}</span>
            <span>{pharmitem.pricing}</span>
            <span>{pharmitem.code}</span>
            <span>{pharmitem.price}</span>
        </div>
     }
    </>
  )
}
