import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";

export default function NavBar({ level, changeLevel }) {
  return (
    <header className="NavBar">
      <h1 className="logo">
        <a href="#">react color app</a>
      </h1>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
    </header>
  );
}
