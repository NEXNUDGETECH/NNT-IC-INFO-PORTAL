import React, { useState } from "react";
import "./head.css";
import { FaBalanceScale } from "react-icons/fa"; // Importing an icon for the logo
import { SideBar } from "../sidebar/SideBar"; // Importing the SideBar component

export const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="head">
        <div className="head-left">
          <FaBalanceScale className="logo-icon" />
          <span className="logo-text">NN IC INFO</span>
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
