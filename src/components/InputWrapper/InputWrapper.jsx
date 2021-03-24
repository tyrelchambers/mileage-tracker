import React from "react";
import "./InputWrapper.css";

const InputWrapper = ({ name, label, children }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="label">
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
