import React from "react";
import "./style.css";
import rasengan from "../../assets/images/rasengan.png";
const Loader = () => {
  return <div className="loader-container">
    <div className="loader-inner-container">
      <img className="loader" src={rasengan} />
      <p>Loading...</p>
    </div>
  </div>;
};

export default Loader;
