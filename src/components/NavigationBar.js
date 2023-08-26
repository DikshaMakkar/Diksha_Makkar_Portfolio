import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavigationBar.css";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
// import { use } from "i18next";

function NavigationBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/Diksha_Makkar_Portfolio/Portfolio">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/MainPage" target="_blank">
            <FaSearch />
          </Link>
        </li>
        <li>
          <Link
            to="https://drive.google.com/file/d/1vnzcuQopyjvmK-1RChDCDLOPYzNbt6Q7/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
