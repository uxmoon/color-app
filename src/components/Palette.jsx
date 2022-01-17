import React, { useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Palette.css";

export default function Palette({ palette }) {
  const { colors, paletteName, emoji, id } = palette;

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const handleLevelChange = (level) => {
    // console.log(level);
    setLevel(level);
  };

  const handleFormat = (val) => {
    // console.log(val);
    setFormat(val);
  };

  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      key={color.id}
      color={color[format]}
      name={color.name}
      id={color.id}
      paletteId={id}
    />
  ));

  return (
    <div className="Palette">
      <NavBar
        level={level}
        changeLevel={handleLevelChange}
        changeFormat={handleFormat}
      />
      <main className="Palette-colors">{colorBoxes}</main>
      <Footer name={paletteName} emoji={emoji} />
    </div>
  );
}
