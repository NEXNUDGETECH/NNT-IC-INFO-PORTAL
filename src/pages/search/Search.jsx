import React, { useRef, useState } from "react";
import "./search.css";
import { useNavigate, useParams } from "react-router-dom";
import { Head } from "../../components/header/Head";
import data from "../../tempSearch.json";

export const Search = () => {
  let { id } = useParams();
  const [value, setValue] = useState(id || "");
  let inputRef = useRef();
  let location = useNavigate();

  const navigateToDoc = (item) => {
    location(`/doc/${item.tid}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      inputRef.current.blur();
    }
  };

  return (
    <div className="searchPage">
      <Head />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for legal documents..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="results-container">
        {data.docs.map((item, index) => (
          <div
            className="result-card"
            key={index}
            onClick={() => navigateToDoc(item)}
          >
            <h3
              className="result-title"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></h3>
            <p
              className="result-description"
              dangerouslySetInnerHTML={{ __html: item.headline }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};
