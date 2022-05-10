import React from "react";
import "./DinamicButton1.css";

export const DinamicButton1 = ({ icono, text }) => {
  return (
    <div className="card-dynamic1">
      <div className="dynamic-button1">
        <div className="icono1">
          <img src={icono} alt="" />
        </div>
        <div className="textDynamic1">{text}</div>
      </div>
    </div>
  );
};
