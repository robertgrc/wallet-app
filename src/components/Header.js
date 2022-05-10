import React from "react";
import diegoburgos from "../assets/img/Profile/diegoburgos.jpg";
import PaypalGroup from "../assets/img/PayPal/PaypalGroup.jpg";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="frame-9-9-6-1-4">
        <div className="container">
          <div className="profile-/-diego-burgos">
            <div className="diego-burgos" />
            <img src={diegoburgos} alt="icon profile" />
          </div>
        </div>
        <div className="pay-pal">
          <img src={PaypalGroup} alt="group" />
        </div>
        <p className="text-5">$110.00 USD</p>
      </div>
    </div>
  );
};
