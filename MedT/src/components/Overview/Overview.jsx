import React from 'react';
import "./Overview.css";
import hospin from "../../assets/hospin.jpg"


const Overview = () => {

  return (
    <>
        <div>
          <div id="main">
            <div className="box"></div>
            <div id="box1"></div>
            <div id="box2">
              <div id="text">
                INVENTORY <br/> MANAGEMENT <br/> SYSTEM
              </div>
            </div>
            <div id="box3">
              <div id="container">
                <div id="menu">
                  <p>Pharmacy and Laboratory</p>
                </div>
                <div id="logo">
                  <img src={hospin} alt="hospital inventory"/>
                </div>
              </div>
            </div>
          <div className="boxx"></div>
          </div>
        </div>
    </>
  )
}
export default Overview