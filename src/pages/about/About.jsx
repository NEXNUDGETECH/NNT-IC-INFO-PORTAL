import React from "react";
import "./about.css";
import { Head } from "../../components/header/Head";

export const About = () => {
  return (
    <div className="about">
      <Head />
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          We are dedicated to helping people easily find information about laws
          and legal matters so they can become more educated on how to deal with
          legal problems.
        </p>
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals by providing accessible and
            reliable legal information. We aim to bridge the gap between complex
            legal systems and everyday people, making legal knowledge easy to
            understand and use.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has the knowledge and resources
            to navigate legal challenges confidently. By simplifying legal
            education, we hope to create a more informed and empowered society.
          </p>
        </section>
        <section className="about-section">
          <h2>Meet the Team</h2>
          <div className="team">
            <div className="team-member">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                alt="John Doe"
                className="team-member-image"
              />
              <h3>Kaushal Shome</h3>
              <p>Founder</p>
            </div>
            <div className="team-member">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                alt="Jane Smith"
                className="team-member-image"
              />
              <h3>Bhaskar Mandal</h3>
              <p>Co Founder</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
