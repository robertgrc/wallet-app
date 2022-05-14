import React from "react";
import "./CustomButton.css";

export const CustomButton = () => {
  return (
    <div className="container">
      <label>
        <input type="radio" name="Lenguaje" id="html" />
        <span>HTML</span>
      </label>
      <label>
        <input type="radio" name="Lenguaje" id="Css" />
        <span>CSS</span>
      </label>
      <label>
        <input type="radio" name="Lenguaje" id="JavaScript" />
        <span>JavaScript</span>
      </label>
    </div>
  );
};

{
  /* <input type="radio" name="sexo" id="hombre" />
<label for="hombre">Hombre</label>
<input type="radio" name="sexo" id="mujer" />
<label for="mujer">Mujer</label>
<input type="radio" name="sexo" id="indefinido" />
<label for="indefinido">Indefinido</label> */
}
