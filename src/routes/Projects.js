import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import HeroImgPro from "../components/HeroImgPro";
import Work from "../components/Work";

const Projects = () => {
  return (
    <div className="projects">
      <NavigationBar />
      <HeroImgPro heading="PROJECTS" text="My most recent works!" />
      <Work />
      <Footer />
    </div>
  );
};

export default Projects;
