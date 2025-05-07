import React, { useEffect, useRef, useState } from "react";
import "./search.css";
import { useNavigate, useParams } from "react-router-dom";
import { Head } from "../../components/header/Head";
import data from "../../tempSearch.json";
import axios from "axios";

export const Search = () => {
  let { id } = useParams();
  const [value, setValue] = useState(id || "");
  const [arrticle, setArrticle] = useState([]);
  let inputRef = useRef();
  let location = useNavigate();
  const [count, setCount] = useState(1);
  let uri = `https://api.indiankanoon.org/search/?formInput=${value}&pagenum=${count}`;
  let fetchData = async () => {
    try {
      let fetchData = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
        },
      });
      let data = await fetchData.json();
      setArrticle(data);
      console.log(data);
    } catch (error) {
      alert("Error fetching data");
      console.log(error);
    }
  };

  useEffect(() => {
    if (value) {
      fetchData();
    }
  }, []);

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
