import React, { useState } from "react";
import "./DinamicButton1.css";

export const DinamicButton1 = ({ icono, text }) => {
  const [click, setClick] = useState(false);

  const handleClickButtonSeeMore = () => {
    setClick(true);
  };
  return (
    <div className="card-dynamic1">
      <div className="dynamic-button1">
        <div className="icono1">
          <img src={icono} alt="" onClick={handleClickButtonSeeMore} />
        </div>
        <div className="textDynamic1">{text}</div>
      </div>
      {/* {click ? <h2>hizo click</h2> : undefined} */}
      {click && <h2>hizo click</h2>}
    </div>
  );
};
