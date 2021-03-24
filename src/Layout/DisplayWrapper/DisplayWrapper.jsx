import React from "react";
import Header from "../Header/Header";

const DisplayWrapper = (props) => {
  return (
    <div classNam="">
      <Header title={props.title} />

      <div className="max-w-screen-lg">{props.children}</div>
    </div>
  );
};

export default DisplayWrapper;
