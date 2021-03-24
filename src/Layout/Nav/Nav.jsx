import React from "react";
import { Link } from "react-router-dom";
import { nav } from "./nav.routes";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="flex">
        {nav.map((l) => (
          <li className="nav-item">
            <Link to={l.slug}>{l.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
