import React from "react";
import { Card } from "../Card";
import background5 from "../../assets/img/background5.png";
import background6 from "../../assets/img/background6.png";
import background7 from "../../assets/img/background7.png";
import background8 from "../../assets/img/background8.png";
import background9 from "../../assets/img/background9.png";

export const LastCards = () => {
  return (
    <div>
      <Card
        background={background5}
        bank={"Chase Visa Debit"}
        subline={"Credit ••••0987"}
      />
      <Card
        background={background6}
        bank={"Chase Freedom"}
        subline={"Credit ••••0987"}
      />
      <Card
        background={background7}
        bank={"Citi Premier®"}
        subline={"Credit ••••2706"}
      />
      <Card
        background={background8}
        bank={"American Express Platinum"}
        subline={"Credit ••••2706"}
      />
      <Card
        background={background9}
        bank={"Amex "}
        subline={"Credit ••••0987"}
      />
    </div>
  );
};
