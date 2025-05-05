import React, { useState } from "react";
import { GoLaw } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import "./head.css";
import { SideBar } from "../sidebar/SideBar";
import { useNavigate } from "react-router-dom";
export const Head = () => {
  const [menu, setMenu] = useState("initial");
  let location = useNavigate();
  const toggle = () => {
    if (menu == "initial" || menu == "close") {
      setMenu("open");
    } else {
      setMenu("close");
    }
  };
  return (
    <div className="head">
      <SideBar menu={menu} toggle={toggle} />
      <div className="one" onClick={() => location("/")}>
        <GoLaw size={20} />
        <span>nn ic info</span>
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
        <IoIosMenu size={25} onClick={toggle} className="line" />
      </div>
    </div>
  );
};
