import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Profile from "../../assets/Profile.jpg";
import { motion } from "framer-motion";
import "./Nav.css";
import { AiOutlineImport } from "react-icons/ai";
function Nav() {
  const [navTogg, setNavTogg] = useState(false);
  function togg() {
    setNavTogg(!navTogg);
  }
  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 700) {
      setNavTogg(true);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="name">
        <img src={Profile} alt="" className="profile" />
        <h1>Hemanth Naripinni</h1>
      </div>
      <div className="item-wrap" style={{ display: navTogg ? "flex" : "none" }}>
        <a href="#home" className="item">
          Home
        </a>
        <a href="#about" className="item">
          About
        </a>
        <a href="#projects" className="item">
          Projects
        </a>
        <a href="#mini-projects" className="item">
          Mini Projects
        </a>
        <a href="#contect" className="item">
          Contect
        </a>
      </div>
      <a className="cv" href="./Hemanth_naripinni.pdf" download>
        <p>Get my CV</p>
      </a>
      <RxHamburgerMenu className="menu" onClick={togg} />
    </div>
  );
}

export default Nav;
