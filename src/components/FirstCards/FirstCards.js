import React from "react";
import background2 from "../../assets/img/background2.png";
import background1 from "../../assets/img/background1.jpg";
import background3 from "../../assets/img/background3.png";
import { Card } from "../Card";

export const FirstCards = () => {
  return (
    <div>
      <Card
        background={background1}
        bank={"Bank of America Visa Debit"}
        subline={"Debit ••••9000"}
      />
      <Card
        background={background2}
        bank={"Chase Sapphire Pre..."}
        subline={"Debit ••••1212"}
      />
      <Card
        background={background3}
        bank={"Discover it® Card"}
        subline={"Credit ••••0987"}
      />
    </div>
  );
};
