import React from 'react';
import P from "./P";

export default function Pharm({pharmitems}) {
  console.log("pharm",pharmitems)
  return (
    <>
      <div>
        <table>
        <thead>
              <tr>
                <th>Drug Name</th>
                <th>Description</th>
                <th>Pricing</th>
                <th>Code</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
        </table>
        {
          pharmitems.pharmItems.map((pharmitem, index) => (
            <P pharmitem={pharmitem} key={index} />
          ))
        }
      </div>
    </>
  )
}
