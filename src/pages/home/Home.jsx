import React from "react";
import { Head } from "../../components/header/Head";
import "./home.css";
import { Card } from "./Card";
export const Home = () => {
  return (
    <div className="home">
      <Head />
      <div className="search">
        <span>search indian law</span>
        <input type="text" placeholder="Enter Your Query Here" />
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
