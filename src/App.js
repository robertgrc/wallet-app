import "./App.css";
import { Address } from "./components/Address";
import { Card } from "./components/Card";

import { DinamicButton1 } from "./components/DinamicButton1";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import background2 from "./assets/img/background2.png";
import background1 from "./assets/img/background1.jpg";
import background3 from "./assets/img/background3.png";
import background4 from "./assets/img/background4.png";
import icono1 from "./assets/Icon.png";
import icono2 from "./assets/Icon2.png";
import { RenderizadoCondicional } from "./components/practica/RenderizadoCondicional";
import { DinamicButton2 } from "./components/DinamicButton2";
import { PayLater } from "./components/PayLater";
function App() {
  return (
    <div className="app__container">
      <Header />
      <Address />
      <Title />
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
      <Card
        background={background4}
        bank={"PayPal Credit"}
        subline={"Pay over time for your purchase of $110.00. "}
      />

      <DinamicButton1 icono={icono1} text={"See More"} />
      <DinamicButton2 icono={icono2} text={"Add a new debit or credit card"} />
      <RenderizadoCondicional />
      <PayLater />
    </div>
  );
}

export default App;
