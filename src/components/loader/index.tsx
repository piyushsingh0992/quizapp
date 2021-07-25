import React from "react";
import "./loader.css";
import rasengan from "../../utils/images/rasengan.png";
const Loader = () => {
  return <div className="loader-container">
    <div className="loader-inner-container">
      <img className="loader" src={rasengan} />
      <p>Loading...</p>
    </div>
  </div>;
};

export default Loader;
