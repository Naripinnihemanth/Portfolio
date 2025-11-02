import React, { useEffect, useState } from "react";
import "./About.css";
import { motion, transform, useScroll } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function About() {
  const skills = [
    {
      id: 1,
      skill: "HTML",
      description:
        "Proficient in structuring and organizing web content using semantic HTML. Skilled at creating responsive and well-structured layouts, ensuring accessibility and SEO-friendly code. Experienced in integrating multimedia elements, forms, and links to build the foundation for modern web applications.",
    },
    {
      id: 2,
      skill: "CSS",
      description:
        "Skilled in designing visually appealing and responsive web interfaces using modern CSS techniques. Proficient in layout management with Flexbox and Grid, applying animations, transitions, and effects for enhanced user experience. Experienced in creating consistent design systems and ensuring cross-browser compatibility.",
    },
    {
      id: 3,
      skill: "JavaScript",
      description:
        "Proficient in developing dynamic and interactive web pages using JavaScript. Skilled in manipulating the DOM, handling events, and working with APIs to create seamless user experiences. Experienced in using modern ES6+ features, debugging, and integrating JavaScript with frameworks like React for efficient front-end development.",
    },
    {
      id: 4,
      skill: "React.js",
      description:
        "Proficient in building dynamic and responsive user interfaces using React.js. Experienced in developing reusable components, managing state with hooks and context, and integrating RESTful APIs. Skilled at optimizing performance, implementing routing, and maintaining clean, modular code for scalable front-end applications.",
    },
    {
      id: 5,
      skill: "Python",
      description:
        "Strong problem-solving skills with the ability to design efficient algorithms and implement logical solutions using Python. Skilled in breaking down complex problems, optimizing code performance, and applying Python libraries to automate tasks and streamline workflows. Experienced in using Python for data processing, debugging, and building practical, real-world solutions.",
    },
    {
      id: 6,
      skill: "SQL",
      description:
        "Proficient in writing efficient SQL queries to extract, analyze, and manage data effectively. Skilled in database design, normalization, and optimization to ensure high performance and accuracy. Strong problem-solving ability in handling complex queries, joins, and subqueries for meaningful data insights and backend integration.",
    },
  ];
  const [toggle, setToggle] = useState(false);
  const [desc, setDesc] = useState("");

  function HandleOnclick(a) {
    setDesc(skills[a - 1].description);
    setToggle(true);
  }

  return (
    <div className="about-container" id="about">
      <div className="about">
        <motion.h1
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="title"
        >
          About Me
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="wish"
        >
          Hi There
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
        >
          I'm <span> Hemanth Naripinni</span> , a passionate React Developer
          dedicated to building dynamic, responsive, and user-focused web
          applications. I love turning ideas into interactive experiences
          through clean code, modern design, and intuitive functionality. With a
          strong foundation in JavaScript, React.js, and front-end development,
          I focus on crafting scalable and maintainable applications that
          deliver smooth user experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="skill-section"
        >
          {skills.map((item) => (
            <div key={item.id} className="skill">
              <div onClick={() => HandleOnclick(item.id)}>{item.skill}</div>
            </div>
          ))}
        </motion.div>
        {toggle ? (
          <motion.div
            initial={{ opacity: 0.5, transform: "translateY(30px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.4 }}
            className="skill-description"
          >
            <p>{desc}</p>
            <div
              onClick={() => {
                setToggle(false);
              }}
              className="btn"
            >
              close
            </div>
          </motion.div>
        ) : null}
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
        >
          <a href="" className="contect-text">
            CONNECT WITH ME
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="social-media"
        >
          <a
            href="https://www.linkedin.com/in/hemanth-naripinni-96393a281"
            className="icon"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:hemanth4119@gmail.com" className="icon">
            <IoMdMail />
          </a>
          <a
            href="https://github.com/Naripinnihemanth"
            className="icon"
            target="blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/hemanth_naripinni"
            className="icon"
            target="blank"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
