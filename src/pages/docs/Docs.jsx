import React from "react";
import "./docs.css";
import data from "../../doc.json";
import { Head } from "../../components/header/Head";
export const Docs = () => {
  return (
    <div className="docs">
      <Head />
      <div className="show">
        <iframe
          srcDoc={data.doc}
          className="web"
          frameBorder={0}
          title={data.tid}
        />
      </div>
    </div>
  );
};
