import React from "react";
import "./Input.css";
const Input = ({ name, placeholder, type = "text", onChange, value }) => {
  return (
    <input
      type={type}
      name={name}
      className="input rounded-sm"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
