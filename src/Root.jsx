import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Docs } from "./pages/docs/Docs";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:id" element={<Search />} />
      <Route path="/doc/:id" element={<Docs />} />
    </Routes>
  );
};
