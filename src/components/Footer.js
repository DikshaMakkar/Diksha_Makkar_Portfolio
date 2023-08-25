import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "../css/Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="address">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Punjab, India</p>
            </div>
          </div>
          {/* <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              123-456-789
            </h4>
          </div> */}
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              makkardiksha02@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            Hi there! I'm Diksha, a creative soul deeply passionate about
            software development, art, and writing. I thrive on transforming
            ideas into functional software, channeling imagination onto
            canvases, and expressing thoughts through captivating blogs. From
            coding to crafting, I find joy in every facet of creation, always
            eager to learn, share, and make a positive impact.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/diksha.makkar.31/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />{" "}
            </a>
            <a
              href="https://twitter.com/MakkarDiksha02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/diksha-makkar-ba56091a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <h6>Thanks for reading, and feel free to reach out to me.</h6>
    </div>
  );
};

export default Footer;
