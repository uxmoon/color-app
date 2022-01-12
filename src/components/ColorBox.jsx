import React from "react";
import "./ColorBox.css";

export default function ColorBox({ color, name }) {
  return (
    <div className="ColorBox" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>More</span>
    </div>
  );
}
