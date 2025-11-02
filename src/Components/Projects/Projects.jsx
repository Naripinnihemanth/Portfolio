import React from "react";
import "./projects.css";
import { VscGithubInverted } from "react-icons/vsc";
import { motion } from "framer-motion";
// import MiniProjects from "../MiniProjects/MiniProjects";
function Projects() {
  return (
    <div className="project-container" id="projects">
      <h1 className="title">Real Time Projects</h1>
      <div className="card-container">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="card"
        >
          <img src="/portfolio.jpg" alt="tumbanail" className="project-img" />
          <h2 className="project-title">PortFolio</h2>
          <p className="project-description">
            The website highlights my technical expertise in front-end
            technologies and provides visitors with a smooth and engaging user
            experience.
          </p>
          <ul className="tech-stack">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
          <div className="btn-container">
            <a
              href="https://github.com/Naripinnihemanth/Portfolio.git"
              target="blank"
              className="git-logo"
            >
              <VscGithubInverted />
            </a>
            <div className="btn">Live Site</div>
          </div>
        </motion.div>
      </div>
      {/* <MiniProjects /> */}
    </div>
  );
}

export default Projects;
