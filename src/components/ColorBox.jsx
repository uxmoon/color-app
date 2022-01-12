import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import cn from "classnames";
import "./ColorBox.css";

export default function ColorBox({ color, name }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  const handleCopyState = () => {
    setCopied(true);
  };

  return (
    <CopyToClipboard text={color} onCopy={handleCopyState}>
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <div
          className={cn("ColorBox-overlay", {
            active: copied,
          })}
          style={{ backgroundColor: color }}
        />
        <div
          className={cn("ColorBox-message", {
            active: copied,
          })}
        >
          <h2 className="ColorBox-message-title">Color code copied!</h2>
          <p className="ColorBox-message-text">{color}</p>
        </div>
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
