import React, { useState } from "react";
import "./MiniProjects.css";
import { motion } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";

function MiniProjects() {
  const [visibility1, setVisibility1] = useState(false);
  const [itemid, setItemid] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [desc, setDesc] = useState({
    description: "",
    img: "",
  });
  function HandleVisibility(i) {
    setItemid(i);
    setVisibility1(true);
  }
  const projects = [
    {
      id: 1,
      name: "Accordion",
      gitLink: "https://github.com/Naripinnihemanth/Single-Accordian.git",
      img: "./AccordienHome.jpg",
      description:
        "A single accordion is a collapsible content component that allows users to expand or collapse one section of information at a time. It helps organize and display content in a compact, user-friendly way",
    },
    {
      id: 2,
      name: "Git users search",
      gitLink: "https://github.com/Naripinnihemanth/Git-Users.git",
      img: "./gitUsersHome.jpg",
      description:
        "The Git Users Search project is a web application that allows users to search for GitHub profiles by username using the GitHub API. It provides detailed information about each user, such as their profile picture, bio, repositories, followers, and following count. The app offers a clean and responsive interface, making it easy to explore GitHub users quickly and efficiently.",
    },
    {
      id: 3,
      name: "QR-code generator",
      gitLink: "https://github.com/Naripinnihemanth/QRCode.git",
      img: "./QRCodeHome.jpg",
      description:
        "The QR Code Generator is a React-based web application that allows users to generate QR codes instantly from any text or URL input. Built using the react-qrcode library, the app provides a simple, fast, and responsive interface where users can type or paste data and get a scannable QR code in real-time.",
    },
    {
      id: 4,
      name: "Tab manager",
      gitLink: "https://github.com/Naripinnihemanth/Tabs.git",
      img: "./TabsHome.jpg",
      description:
        "The Tabs Manager project is a React-based web application that replicates the functionality of browser-like tabs (similar to Google Chrome). Users can create, switch between, and close multiple tabs seamlessly within the same interface. Each tab maintains its own content or state, offering an intuitive experience for multitasking or viewing different data simultaneously.",
    },
    {
      id: 5,
      name: "Scroll progress",
      gitLink: "https://github.com/Naripinnihemanth/Scroll-progress.git",
      img: "./ScrollProgressHome.jpg",
      description:
        "The Scroll Progress Indicator is a React-based web project that visually tracks a user’s scroll position on a webpage. As the user scrolls down, a progress bar at the top (or side) dynamically fills, indicating how much of the page content has been viewed. This feature enhances user experience by providing a clear visual cue of reading progress.",
    },
    {
      id: 6,
      name: "Products loading",
      gitLink: "https://github.com/Naripinnihemanth/images-loading.git",
      img: "./MoreImagesHome.jpg",
      description:
        "The Load More Products project is a React-based web application that displays a list of products with a “Load More” button to fetch and show additional items dynamically. Instead of loading all items at once, the app efficiently loads content in smaller batches, improving performance and user experience.",
    },
    {
      id: 7,
      name: "Random color generator",
      gitLink: "https://github.com/Naripinnihemanth/RandomColors.git",
      img: "./RandomColorHome.jpg",
      description:
        "The Random Color Generator is a React-based tool that produces one random color at a time and instantly displays its values in both RGB and HEX formats. Users can generate a new color with a single click (or keyboard shortcut), preview the color in a large swatch, and copy the RGB or HEX value to the clipboard for use in designs or code. The app is lightweight, responsive, and built to be easily dropped into any design workflow.",
    },
    {
      id: 8,
      name: "star ratting",
      gitLink: "https://github.com/Naripinnihemanth/Star-ratting.git",
      img: "./StarRatingHome.jpg",
      description:
        "The Star Rating System is a React-based interactive component that allows users to rate items (such as products, movies, or posts) using clickable star icons. When a user selects a star, all stars up to that point are highlighted, visually representing the rating. This project showcases user interaction, state management, and dynamic UI updates using React.",
    },
  ];

  function HandleOnclick(a) {
    setDesc({
      description: projects[a - 1].description,
      img: projects[a - 1].img,
    });
    setToggle(true);
  }
  return (
    <div className="mini-project-wrapper" id="mini-projects">
      <h1 className="title">MiniProjects</h1>
      <ul className="mini-project-container">
        {projects.map((item) => (
          <motion.li
            initial={{ scaleX: 0, scaleY: 0.5, opacity: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            key={item.id}
            className="project-item"
            onMouseEnter={() => {
              HandleVisibility(item.id);
            }}
            onMouseLeave={() => {
              setVisibility1(false);
            }}
          >
            <p className="item-name">{item.name}</p>
            <a
              href={item.gitLink}
              className="git-logo project-git-logo"
              target="blank"
              style={{
                visibility: `${
                  visibility1 && item.id === itemid ? "visible" : "hidden"
                }`,
              }}
            >
              <VscGithubInverted />
            </a>
            <div className="btn" onClick={() => HandleOnclick(item.id)}>
              About
            </div>
          </motion.li>
        ))}
      </ul>
      {toggle ? (
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.4 }}
          className="skill-description"
        >
          <img src={desc.img} alt="img" className="mini-project-img" />
          <p>{desc.description}</p>
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
    </div>
  );
}

export default MiniProjects;
