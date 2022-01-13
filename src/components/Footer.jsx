import React from "react";
import "./Footer.css";

export default function Footer({ name, emoji }) {
  return (
    <footer className="Footer">
      <p>
        {name} <span className="emoji">{emoji}</span>
      </p>
    </footer>
  );
}
