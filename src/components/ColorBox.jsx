import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export default function ColorBox({ color, name }) {
  return (
    <CopyToClipboard text={color}>
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <div className="ColorBox-container">
          <div className="ColorBox-name">
            <span>{name}</span>
          </div>
          <button className="ColorBox-button">Copy</button>
        </div>
        <span className="ColorBox-more">More</span>
      </div>
    </CopyToClipboard>
  );
}
