import React, { useEffect } from "react";
import "./sidebar.css";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ menu, toggle }) => {
  let location = useNavigate();
  useEffect(() => {
    if (menu === "open") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menu]);

  let navigate = (path) => {
    location(path);
    // setMenuOpen(false);
  };

  return (
    <div className={`sidebar ${menu === "open" ? "show" : ""}`}>
      <div className="sidebar-close-wrapper">
        <IoMdClose size={28} className="sidebar-close" onClick={toggle} />
      </div>

      <div className="sidebar-content">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/about")}>About</span>
        <span onClick={() => navigate("/blogs")}>Blogs</span>
        <span onClick={() => navigate("/contact")}>Contact</span>
      </div>
    </div>
  );
};
