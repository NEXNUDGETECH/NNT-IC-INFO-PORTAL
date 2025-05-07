import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Docs } from "./pages/docs/Docs";
import Blog from "./pages/blog/Blog";
import { Blogs } from "./pages/blogs/blogs";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:id" element={<Search />} />
      <Route path="/doc/:id" element={<Docs />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
