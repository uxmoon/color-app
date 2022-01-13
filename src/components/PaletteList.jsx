import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default function PaletteList({ palettes }) {
  return (
    <div>
      <p>Palette list</p>
      {palettes.map((palette) => (
        <MiniPalette key={palette.id} {...palette} />
      ))}
    </div>
  );
}
