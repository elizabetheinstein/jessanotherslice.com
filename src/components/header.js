import { Link } from "gatsby";
import React from "react";

import "../styles/header.css"

const Header = () => (
  <header>
    <div className="inner-header">
      <div className="logo">
        <Link to="/">jessanotherslice</Link>
      </div>
      <div className="navigation">
        <nav>
          <a href="#about">About</a>
          <a href="#best-of">Best Of</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
