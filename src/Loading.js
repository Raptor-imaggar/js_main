// Loading.js
import React from "react";
import "./Loading.css";
import logo from "./logo.jpeg";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-logo-container">
        
      </div>
      <img src={logo} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default Loading;
