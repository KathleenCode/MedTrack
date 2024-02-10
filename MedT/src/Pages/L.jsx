import React from 'react';
import { useDispatch } from "react-redux";
import { updateLabThunk, removeLabThunk } from "../store/features/Laboratory/LabSlice";

export default function L({labitem}) {
    const dispatch = useDispatch();

  return (
    <>
     <div>L</div>
     {
        <div>
            <button
            onClick={() => dispatch(updateLabThunk(labitem._id))}
            >update</button>
            <button
            onClick={() => dispatch(removeLabThunk(labitem._id))}
            >delete</button>
            <span>{labitem.itemName}</span>
            <span>{labitem.labType}</span>
            <span>{labitem.mainCategory}</span>
            <span>{labitem.subCategory}</span>
            <span>{labitem.code}</span>
            <span>{labitem.price}</span>
        </div>
     }
    </>
  )
}
