import "./App.css";
import { Address } from "./components/Address";
import { DinamicButton1 } from "./components/DinamicButton1";
import { DinamicButton2 } from "./components/DinamicButton2";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import icono1 from "./assets/Icon.png";
import icono2 from "./assets/Icon2.png";
import { PayLater } from "./components/PayLater";
import { FirstCards } from "./components/FirstCards/FirstCards";
// import { LastCards } from "./components/LastCards/LastCards";
import { PaypalCard } from "./components/PaypalCard/PaypalCard";
// import { CustomButton } from "./components/practica/CustomButton";
function App() {
  return (
    <div className="app__container">
      <Header />
      <Address />
      <Title />
      <FirstCards />
      <PaypalCard />
      {/* <LastCards /> */}
      {/* <CustomButton /> */}

      <DinamicButton1 icono={icono1} text={"See More"} />
      <DinamicButton2 icono={icono2} text={"Add a new debit or credit card"} />

      <PayLater />
    </div>
  );
}

export default App;
