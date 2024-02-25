import React from 'react'

export default function LabUpPopup(props) {
  return (props.trigger) ? (
    <div>
        <button onClick={() => props.setTrigger(false)}>Go Back</button>
        {props.children}
    </div>
  ) : "" ;
}
