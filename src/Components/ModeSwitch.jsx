import React, { useState } from "react";
import "./ModeSwitch.css";

const ModeSwitch = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);

    document.querySelector(".container")?.setAttribute("data-mode", newMode);
  };

  return (
    <div className="mode-switch" onClick={toggleMode}>
      <i className={`icon bx ${mode === "light" ? "bxs-sun" : "bxs-moon"}`}></i>
    </div>
  );
};

export default ModeSwitch;
