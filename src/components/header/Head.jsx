import React, { useState } from "react";
import "./head.css";
import { FaBalanceScale } from "react-icons/fa"; // Importing an icon for the logo
import { SideBar } from "../sidebar/SideBar"; // Importing the SideBar component
import { useNavigate } from "react-router-dom";

export const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let location = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let navigate = (path) => {
    location(path);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="head">
        <div className="head-left" onClick={() => navigate("/")}>
          <FaBalanceScale className="logo-icon" />
          <span className="logo-text">NN IC INFO</span>
        </div>
        <div className="head-center">
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <span onClick={() => navigate("/")}>Home</span>
            <span onClick={() => navigate("/about")}>About</span>
            <span onClick={() => navigate("/blogs")}>Blogs</span>
            <span onClick={() => navigate("/contact")}>Contact</span>
          </nav>
        </div>
        <div className="head-right">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
          <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <SideBar menu={menuOpen ? "open" : "closed"} toggle={toggleMenu} />
    </>
  );
};
