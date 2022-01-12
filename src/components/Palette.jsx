import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

export default function Palette(props) {
  const colorBoxes = props.colors.map((color) => (
    <ColorBox key={color.color} color={color.color} name={color.name} />
  ));
  return (
    <div className="Palette">
      {/* Header - Navbar */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer */}
    </div>
  );
}
