import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
          <br />
          ispum is simpley dummy text of printing
          <br />
          Lorem ispum is simpley dummy text of printing
        </spane>
        <button className="button s-button">Hire Me </button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right side*/}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/*background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
