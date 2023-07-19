import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../themeSlice";

const ToggleButton = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggleChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      dispatch(toggleTheme());
    } else {
      dispatch(toggleTheme());
    }
  };

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={theme === "light"}
          onChange={handleToggleChange}
        />
        <span className="slider">,</span>
      </label>
    </div>
  );
};

export default ToggleButton;
