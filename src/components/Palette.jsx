import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./Palette.css";

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox key={color.id} color={color.hex} name={color.name} />
  ));

  const handleLevel = (level) => {
    // console.log(level);
    setLevel(level);
  };

  return (
    <div className="Palette">
      {/* Header - Navbar */}
      <div className="slider">
        <Slider
          defaultValue={500}
          min={100}
          max={900}
          step={100}
          onAfterChange={handleLevel}
        />
      </div>
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer */}
    </div>
  );
}
