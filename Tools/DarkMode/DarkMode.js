import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.style.setProperty('--bg-color', '#000');
      root.style.setProperty('--text-color', '#fff');
    } else {
      root.style.setProperty('--bg-color', '#fff');
      root.style.setProperty('--text-color', '#000');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        {isDarkMode ? <Moon /> : <Sun />}
      </label>
    </div>
  );
};

export default DarkMode;