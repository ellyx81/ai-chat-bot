import React, { useState } from "react";
import "./ModeSwitch.css";

const ModeSwitch = () => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);

    document.querySelector(".container")?.setAttribute("data-mode", newMode);
  };

  return (
    <div className="mode-switch" onClick={toggleMode}>
      <i className={`icon bx ${mode === "dark" ? "bxs-moon" : "bxs-sun"}`}></i>
    </div>
  );
};

export default ModeSwitch;
