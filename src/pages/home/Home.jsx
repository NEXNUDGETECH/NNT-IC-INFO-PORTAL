import React, { useRef, useState } from "react";
import { Head } from "../../components/header/Head";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import LawBlogCard from "./Card";
let tempImg =
  "https://media.istockphoto.com/id/1329704926/photo/concept-of-indian-justice-system-showing-by-using-judge-gavel-balance-scale-on-indian-flag-as.jpg?s=612x612&w=0&k=20&c=-E8skqunh-qSszI0etp8-56tp6HfUecFndPAIb5ezoA=";
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
        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />

        <LawBlogCard
          author={"John Doe"}
          date={"2023-10-01"}
          imageSrc={tempImg}
          title={"Understanding the Indian Constitution"}
          tags={["Constitution", "Law", "India"]}
        />
      </div>

      <Footer />
    </div>
  );
};
