import React from "react";
import "./Buttons.css";

export const MainBtn = ({ children }) => {
  return (
    <button type="button" className="btn main rounded-md">
      {children}
    </button>
  );
};
