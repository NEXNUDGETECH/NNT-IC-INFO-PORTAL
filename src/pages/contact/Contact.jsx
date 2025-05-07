import React from "react";
import "./Contact.css";
import { Head } from "../../components/header/Head";

export const Contact = () => {
  let founder =
    "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg";
  let coFounder =
    "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg";
  let facebook = "https://freepnglogo.com/images/all_img/facebook-logo.png";
  let linkedin =
    "https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png";
  let instagram =
    "https://png.pngtree.com/png-clipart/20180518/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3571406.png";
  let twitter =
    "https://static.vecteezy.com/system/resources/previews/016/716/467/non_2x/twitter-icon-free-png.png";
  let founderName = "Kaushal Shome";
  let coFounderName = "Bhaskar Mandal";
  let founderRole = "Founder";
  let coFounderRole = "Co-Founder";
  return (
    <div className="contact">
      <Head />
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions or need assistance? Feel free to reach out to us
          through the contact details below.
        </p>
      </div>
      <div className="contact-content">
        <section className="contact-section">
          <h2>Founders' Contact</h2>
          <div className="founders">
            <div className="founder">
              <img src={founder} alt={founderName} className="founder-image" />
              <h3>{founderName}</h3>
              <p>{founderRole}</p>
              <p>Email: john.doe@example.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
            <div className="founder">
              <img
                src={coFounder}
                alt={coFounderName}
                className="founder-image"
              />
              <h3>{coFounderName}</h3>
              <p>{coFounderRole}</p>
              <p>Email: jane.smith@example.com</p>
              <p>Phone: +1 987 654 321</p>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <h2>Company Contact</h2>
          <div className="social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" className="social-icon" />
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="social-icon" />
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="social-icon" />
              Twitter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
