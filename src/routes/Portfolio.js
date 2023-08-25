import React from "react";
// import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import HeroImg from "../components/HeroImg";
import Work from "../components/Work";

import Footer from "../components/Footer";

function Portfolio() {
  return (
    <section id="portfolio">
      <NavigationBar />
      <HeroImg />
      <Work/>
      <Footer/>
    </section>
  );
}

export default Portfolio;
