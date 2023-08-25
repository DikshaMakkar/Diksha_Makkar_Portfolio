import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import HeroImgPro from "../components/HeroImgPro";
import WorkCard from "../components/WorkCard";
import "../css/WorkCard.css";
import { BlogCardData } from "../components/WorkData";

const Blogs = () => {
  return (
    <div className="blogs">
      <NavigationBar />
      <HeroImgPro heading="BLOGS" text="Explore My Insights!" />
      <div className="blog-container">
        {BlogCardData.map((val, ind) => {
          return (
            // Reusing work Cards
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
