import React from 'react';
import L from "./L";

export default function Lab({labitems}) {
  return (
    <>
      <div>
        <table>
          <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Lab Type</th>
                  <th>Main Category</th>
                  <th>Sub Category</th>
                  <th>Code</th>
                  <th>Price</th>
                </tr>
              </thead>
        </table>
        {
          labitems.labItems.map((labitem, index) => (
            <L labitem={labitem} key={index} />
          ))
        }
      </div>
    </>
  )
}
