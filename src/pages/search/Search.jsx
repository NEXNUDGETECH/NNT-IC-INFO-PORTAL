import React, { useRef, useState } from "react";
import "./search.css";
import { useNavigate, useParams } from "react-router-dom";
import { Head } from "../../components/header/Head";
import data from "../../tempSearch.json";
export const Search = () => {
  let { id } = useParams();
  const [value, setValue] = useState(id);
  let inputRef = useRef();
  let location = useNavigate();
  let natigate = (e) => {
    location(`/doc/${e.tid}`);
  };
  let check = (e) => {
    if (e.key === "Enter") {
      inputRef.current.blur();
    }
  };
  return (
    <div className="searchPage">
      <Head />
      <div className="input">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={check}
          ref={inputRef}
        />
        <button>Search</button>
      </div>

      <div className="rejs">
        {data.docs.map((items, index) => (
          <div className="rej" key={index} onClick={() => natigate(items)}>
            <span
              className="title"
              dangerouslySetInnerHTML={{
                __html: items.title,
              }}
            ></span>

            <span
              className="desc"
              dangerouslySetInnerHTML={{
                __html: items.headline,
              }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};
