import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function Palette(props) {
  const colorBoxes = props.palette.colors[500].map((color) => (
    <ColorBox key={color.id} color={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      {/* Header - Navbar */}
      <Slider />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer */}
    </div>
  );
}
