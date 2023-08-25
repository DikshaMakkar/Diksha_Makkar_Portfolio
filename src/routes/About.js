import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import HeroImgPro from "../components/HeroImgPro";
import AboutComponent from "../components/AboutComponent";

function About() {
  return (
    <section id="about">
      <NavigationBar />
      <HeroImgPro
        heading="ABOUT"
        text="
        CREATOR: SOFTWARE, ART, WORDS."/>
      <AboutComponent />
      <Footer />
    </section>
  );
}

export default About;
