import React from "react";
import "./search.css";
import { useParams } from "react-router-dom";
import { Head } from "../../components/header/Head";
import data from "../../tempSearch.json";
export const Search = () => {
  let { id } = useParams();
  return (
    <div className="searchPage">
      <Head />
      <div className="input">
        <input type="text" placeholder="Search..." value={id} />
        <button>Search</button>
      </div>

      <div className="rejs">
        {data.docs.map((items, index) => (
          <div className="rej" key={index}>
            <span className="title">{items.title}</span>

            <span className="desc">{items.headline}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
