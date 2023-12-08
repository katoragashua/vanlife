import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="container flex justify-between items-baseline py-4">
      <div className="site-logo">
        <Link to="/">
          <h2>#VANLIFE</h2>
        </Link>
      </div>
      <Nav />
      
    </header>
  );
};

export default Header;
