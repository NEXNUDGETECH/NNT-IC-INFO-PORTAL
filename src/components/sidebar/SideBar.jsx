import React, { useEffect } from "react";
import "./sidebar.css";
import { IoMdClose } from "react-icons/io";

export const SideBar = ({ menu, toggle }) => {
  useEffect(() => {
    if (menu === "open") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menu]);

  return (
    <div className={`sidebar ${menu === "open" ? "show" : ""}`}>
      <div className="sidebar-close-wrapper">
        <IoMdClose size={28} className="sidebar-close" onClick={toggle} />
      </div>

      <div className="sidebar-content">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Blog</span>
      </div>
    </div>
  );
};
