import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-circle"></div>
      <div className="loading-circle"></div>
      <div className="loading-circle"></div>
      <div className="loading-shadow"></div>
      <div className="loading-shadow"></div>
      <div className="loading-shadow"></div>
      <span>Loading</span>
    </div>
  );
};

export default Loading;
