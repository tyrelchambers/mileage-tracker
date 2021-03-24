import React from "react";
import { H1 } from "../../components/Headings/Headings";
import Nav from "../Nav/Nav";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <H1>{title}</H1>
      <Nav />
    </header>
  );
};

export default Header;
