import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor); // To notify the parent to change its color
  }
  return <div className="child" style={{ backgroundColor: "#FFF" }} onClick={handleClick} />;
}

export default Child;
