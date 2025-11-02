import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-text">Hemanth naripinni</h1>
      <ul className="footer-navigation">
        <h3>Navigations</h3>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#mini-projects">Mini-Projects</a>
        </li>
        <li>
          <a href="#contect">Contect</a>
        </li>
      </ul>
      <ul className="footer-links">
        <h3>Reach Out</h3>
        <a
          href="https://www.linkedin.com/in/hemanth-naripinni-96393a281"
          className="icon"
          target="blank"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:hemanth4119@gmail.com" className="icon">
          <IoMdMail /> hemanthnaripinni125@gmail.com
        </a>
        <a
          href="https://github.com/Naripinnihemanth"
          className="icon"
          target="blank"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.instagram.com/hemanth_naripinni"
          className="icon"
          target="blank"
        >
          <FaInstagram />
          Instagram
        </a>
      </ul>
      {/* <p>Copy rights Hemanth Naripinni</p> */}
    </div>
  );
}

export default Footer;
