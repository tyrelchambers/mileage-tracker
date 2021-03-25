import React from "react";
import Header from "../Header/Header";

const DisplayWrapper = (props) => {
  return (
    <div>
      <Header title={props.title} />

      <div className="max-w-screen-lg flex flex-col m-auto w-full">
        {props.children}
      </div>
    </div>
  );
};

export default DisplayWrapper;
