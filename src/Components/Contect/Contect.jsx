import React, { useEffect, useState } from "react";
import "./Contect.css";
import { motion, transform, useScroll } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from "emailjs-com";
import { div } from "framer-motion/client";
function Contect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const [res, setRes] = useState(false);
  // useEffect(() => {
  //   window.setInterval(() => {
  //     console.log(flag);
  //     setFlag(false);
  //   }, 5000);

  // }, [flag]);
  const sendEmail = () => {
    var time1 = new Date();
    if (name != "" && email != "" && message != "") {
      emailjs.send(
        "service_efli1mg",
        "template_z7zs9ki",
        {
          name: `${name}`,
          email: `${email}`,
          time: `${time1}`,
          message: `${message}`,
          subject: `${subject}`,
        },
        "ocrUYNN414NkaV6XY"
      );
      setRes(true);
      setEmail("");
      setMessage("");
      setName("");
      setSubject("");
    } else {
      setRes(false);
      setFlag(true);
    }
    // console.log(time);
    // setTime(new Date());
    // console.log(name);
    // console.log(subject);
    // console.log(email);
    // console.log(message);
  };
  return (
    <div className="contect-container" id="contect">
      <div className="contect-content">
        {/* <div className="filter"></div>   */}
        <h1 className="get-in-touch">
          Keep in touch <span>with me</span>.
        </h1>
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="social-media contect-media"
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
      <div className="contect-form">
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="user-name input"
        >
          <p htmlFor="name">Name : </p>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="true"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="email input"
        >
          <p htmlFor="email">Email : </p>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="true"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="subject input"
        >
          <p htmlFor="subject">Your query : </p>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="text-area input"
        >
          <p htmlFor="message">Message : </p>
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
          className="submit"
        >
          <button type="submit" className="btn submit-btn" onClick={sendEmail}>
            Send Message
          </button>
          {res ? (
            <h3 className="responce">Thank You for message sending</h3>
          ) : null}
        </motion.div>
        {flag ? (
          <motion.div
            initial={{ opacity: 0.5, transform: "translateY(30px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.4 }}
            className="details-error skill-description"
          >
            <p>Pleace enter required fields : Name, email, Message</p>
            <div
              onClick={() => {
                setFlag(false);
              }}
              className="btn"
            >
              OK
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

export default Contect;
