import React, { useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav>
      <ul className="nav_links">
      <li>
          <Link
            to="/home"
            className={activeLink === "/home" ? "active" : ""}
            onClick={() => handleLinkClick("/home")}
          >
           Logo
          </Link>
        </li>
      
        <li className="had">
          <Link
            to="/contact"
            className={activeLink === "/contact" ? "active" : ""}
            onClick={() => handleLinkClick("/contact")}
          >
            Sign in
          </Link>
        </li>
        <li> 
          <Link
            to="/signup"
            className={activeLink === "/signup" ? "active" : ""}
            onClick={() => handleLinkClick("/signup")}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    
    </nav>
  );
};

export default Navbar;
