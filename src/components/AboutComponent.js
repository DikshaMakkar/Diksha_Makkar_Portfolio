import "../css/AboutComponent.css";
import { Link } from "react-router-dom";
import React from "react";
import pic1 from "../assets/html.jpg";
import pic2 from "../assets/css.jpg";
import pic3 from "../assets/react-js.jpg";

const AboutComponent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          <p>
            I'm a passionate software developer based in India. With a keen
            interest in crafting elegant code and creating meaningful
            applications, I'm dedicated to turning innovative ideas into
            functional solutions.
          </p>
          <p>
            I have been honing my software development skills over 2 years,
            continuously learning and experimenting with various technologies.
            My journey is fueled by curiosity and a desire to contribute
            positively to the tech industry.
          </p>
          <p>
            My goal is to contribute to projects that align with my values and
            expertise, ultimately making a meaningful impact in the software
            development realm.
          </p>
          <p>
            When I'm not immersed in code, you'll often find me engaged in two
            equally compelling passions: Using a pen and paper to craft my
            thoughts into captivating Medium blog posts or a paintbrush in hand,
            bringing imagination to life on canvas.
          </p>
          <p>
            Feel free to explore my portfolio to get a glimpse of my works. If
            you're interested in collaborating or have any questions, don't
            hesitate to <a href="/contact">get in touch</a>.
          </p>
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={pic1} className="img" alt="true" />
          </div>
          <div className="img-stack middle">
            <img src={pic2} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={pic3} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
