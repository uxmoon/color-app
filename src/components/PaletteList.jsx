import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default function PaletteList({ palettes }) {
  return (
    <div>
      <MiniPalette />
      <p>Palette list</p>
      {palettes.map((item) => (
        <Link to={`/palette/${item.id}`} key={item.id}>
          {item.paletteName}
        </Link>
      ))}
    </div>
  );
}
