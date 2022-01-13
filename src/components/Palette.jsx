import React, { useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "./Palette.css";

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox key={color.id} color={color[format]} name={color.name} />
  ));

  const handleLevel = (level) => {
    console.log(level);
    setLevel(level);
  };

  const handleFormat = (val) => {
    console.log(val);
    setFormat(val);
  };

  return (
    <div className="Palette">
      <NavBar
        level={level}
        changeLevel={handleLevel}
        changeFormat={handleFormat}
      />
      <main className="Palette-colors">{colorBoxes}</main>
      {/* Footer */}
    </div>
  );
}
