import React from 'react';
import P from "./P";

export default function Pharm({pharmitems}) {
  return (
    <>
      <div>
        Pharm
        {
          pharmitems.map(pharmitem => (
            <P pharmitem={pharmitem} key={pharmitem._id} />
          ))
        }
      </div>
    </>
  )
}
