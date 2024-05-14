import React from 'react';
import { FaUpload } from "react-icons/fa";


import "./bottom-component.css"

const BottomComponent = () => {
  return (
    <div className="bottom-container">
      <div className="centered-content">
        <div className="vertical-split">
          <div className="top-half">
            <div className="header">
                <FaUpload />
              <h2 style={{marginLeft: '10px'}}>Sales</h2>
            </div>
            You had 0 uploads and 0 lines added.
          </div>
          <div className="bottom-half">
            <div className="part">
                <div className="percentage" style={{fontSize: '30px'}}>0%</div>
                <div className="text">Upload Success</div>
            </div>
            <div className="part">
                <div className="percentage" style={{fontSize: '30px'}}>0%</div>
                <div className="text" >Lines Saved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomComponent;

