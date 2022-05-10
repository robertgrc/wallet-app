import React from "react";
import "./DinamicButton2.css";

export const DinamicButton2 = ({ icono, text }) => {
  return (
    <div className="card-dynamic2">
      <div className="dynamic-button2">
        <div className="icono2">
          <img src={icono} alt="" />
        </div>
        <div className="textDynamic2">{text}</div>
      </div>
    </div>
  );
};
