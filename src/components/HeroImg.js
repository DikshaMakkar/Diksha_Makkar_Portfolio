import "../css/HeroImg.css";
import React from "react";
import IntroImg from "../assets/introimg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="" />
      </div>
      <div className="content">
        <p>Hey! I'm Diksha Makkar</p>
        <h1>Software Engineer</h1>
        <div>
          <Link to="/Projects" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
