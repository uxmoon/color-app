import React, { useState } from "react";
import Slider from "rc-slider";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "rc-slider/assets/index.css";
import "./NavBar.css";

export default function NavBar({ level, changeLevel, changeFormat }) {
  const [format, setFormat] = useState("hex");

  const handleChange = (event) => {
    setFormat(event.target.value);
    changeFormat(event.target.value);
  };

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
      <div className="select-container">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="select-standard-label"
            id="select-standard"
            value={format}
            onChange={handleChange}
            label="Format"
          >
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,0.2)</MenuItem>
          </Select>
        </FormControl>
      </div>
    </header>
  );
}
