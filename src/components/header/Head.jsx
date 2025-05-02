import React, { useState } from "react";
import { GoLaw } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import "./head.css";
import { SideBar } from "../sidebar/SideBar";
export const Head = () => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  return (
    <div className="head">
      <SideBar menu={menu} toggle={toggle} />
      <div className="one">
        <span>nex nudge</span>
      </div>

      <div className="two">
        <div className="two-one">Home</div>
        <div className="two-two">About</div>
        <div className="two-three">Contact</div>
        <div className="two-four">Blog</div>
      </div>
      <div className="three">
        <button className="three-one">Login</button>
        <button className="three-two">Sign Up</button>
        <IoIosMenu size={25} onClick={toggle} />
      </div>
    </div>
  );
};
