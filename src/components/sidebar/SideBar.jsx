import React from "react";
import "./sidebar.css";
import { IoMdClose } from "react-icons/io";
export const SideBar = ({ menu, toggle }) => {
  return (
    <div
      className="sidebar"
      style={{
        animation:
          menu == "initial"
            ? ""
            : menu == "open"
            ? "slideOpen 0.5s forwards"
            : "slideClose 0.5s forwards",
      }}
    >
      <div>
        <IoMdClose size={25} className="sidebar-close" onClick={toggle} />
      </div>
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
      <span>Blog</span>
    </div>
  );
};
