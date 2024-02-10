import React from 'react';
import L from "./L";

export default function Lab({labitems}) {
  return (
    <>
      <div>
        Lab
        {
          labitems.map(labitem => (
            <L labitem={labitem} key={labitem._id} />
          ))
        }
      </div>
    </>
  )
}
