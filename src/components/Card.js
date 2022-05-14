import React from "react";
import "./Card.css";

export const Card = ({ background, bank, subline }) => {
  return (
    <div className="main-card-container">
      <div className="card-content">
        <div className="card-fi">
          <div className="frame-99590">
            <div className="icons">
              {/* insertRadio */}
              <div className="ContainerRadioButton">
                <label>
                  <input type="radio" name="bank" id="bank-Paypal" />
                  <span></span>
                </label>
              </div>
            </div>
            <div className="card">
              <div className="card-thumbnail-bof">
                <div className="tumbnail-template">
                  <img src={background} alt="" className="tumbnail-template" />
                </div>
              </div>
            </div>
          </div>
          <div className="credit-card-info">
            <div className="topline">{bank}</div>

            <div className="frame-99580">
              <div className="subline">{subline}</div>
            </div>
          </div>
        </div>
        <div className="amount"></div>
      </div>
    </div>
  );
};
