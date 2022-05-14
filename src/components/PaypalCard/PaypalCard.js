import React from "react";
import background4 from "../../assets/img/background4.png";
import "./PaypalCard.css";

export const PaypalCard = () => {
  return (
    <div className="CardPaypalContainer">
      <div className="Content-Paypal">
        <div className="FI-Paypal">
          <div className="Frame-Paypal">
            <div className="Icons-Paypal">
              {/* <h1>Insert radiobutton</h1> */}
              <div className="ContainerRadioButton">
                <label>
                  <input type="radio" name="bank" id="bank-Paypal" />
                  <span></span>
                </label>
              </div>
            </div>
            <div className="Card-Paypal">
              <div className="Accounts-thumbnail">
                <div className="Background-Paypal">
                  <img src={background4} alt="" className="tumbnail-Paypal" />
                </div>
              </div>
              <div className="Border-thumbnail"></div>
            </div>
          </div>
          <div className="CreditCardInfo-Paypal">
            <div className="frame99612-Paypal">
              <div className="topline-Paypal">PayPal Credit</div>
              <div className="frame99623-Paypal">
                <div className="Text-Paypal">
                  <span>
                    Pay over time for your purchase of $110.00. Subject to
                    credit approval. See terms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// import background4 from "./assets/img/background4.png";
