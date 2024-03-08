import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "../style/style.scss";

export const DarkModeToggle = ({onUpdateTheme, theme}) => (
  <div className="toggle-switch">
    <input
      type="checkbox"
      className="checkbox"
      id="checkbox"
      onChange={onUpdateTheme}
      checked={theme === "dark" ? true : false}
    />
    <label htmlFor="checkbox" className="checkbox-label">
      <FontAwesomeIcon icon={faMoon} size="2xl" />
      <FontAwesomeIcon icon={faSun} size="2xl" />
      <span className="ball"></span>
    </label>
  </div>
);
