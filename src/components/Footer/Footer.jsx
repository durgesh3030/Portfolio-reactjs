import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>durgesh30400@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/durgeshhpandey">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/durgesh3030/">
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/durgesh3030/">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
