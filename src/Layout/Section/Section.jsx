import React from "react";
import { H3 } from "../../components/Headings/Headings";

const Section = ({ title, subtitle, children }) => {
  return (
    <div className="flex flex-col mt-6 mb-6">
      <div className="flex items-center">
        <H3>{title}</H3>
        <p className="text-sm ml-6 italic text-gray-700">{subtitle}</p>
      </div>
      <hr className="hr mt-2 mb-4" />

      {children}
    </div>
  );
};

export default Section;
