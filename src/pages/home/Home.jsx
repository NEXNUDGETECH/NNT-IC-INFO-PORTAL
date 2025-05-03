import React, { useRef, useState } from "react";
import { Head } from "../../components/header/Head";
import "./home.css";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [value, setValue] = useState("");
  let inputRef = useRef();
  let location = useNavigate();
  let check = (e) => {
    // setValue(e.target.value);
    if (e.key === "Enter") {
      location(`/search/${value}`);
    }
  };
  return (
    <div className="home">
      <Head />
      <div className="search">
        <span>search indian law</span>
        <input
          type="text"
          placeholder="Enter Your Query Here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={check}
          ref={inputRef}
        />
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
