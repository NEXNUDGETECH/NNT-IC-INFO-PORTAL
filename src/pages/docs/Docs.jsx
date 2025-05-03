import React from "react";
import "./docs.css";
import data from "../../doc.json";
import { Head } from "../../components/header/Head";
export const Docs = () => {
  return (
    <div className="docs">
      <Head />
      <div
        className="show"
        dangerouslySetInnerHTML={{
          __html: data.doc,
        }}
      ></div>
    </div>
  );
};
