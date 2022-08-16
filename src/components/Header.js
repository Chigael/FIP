import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((perviousDarkMode) => !perviousDarkMode)
        }
        className="save"
      >
        Mode Toggle
      </button>
    </div>
  );
};

export default Header;
