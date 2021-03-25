import React from "react";
import "./Buttons.css";

export const MainBtn = ({ children }) => {
  return (
    <button type="button" className="btn main rounded-md">
      {children}
    </button>
  );
};

export const SecBtn = ({ children }) => {
  return (
    <button
      type="button"
      className="ml-2 mr-2 p-4 bg-gray-400 w-full center rounded-md font-bold text-gray-700"
    >
      {children}
    </button>
  );
};
