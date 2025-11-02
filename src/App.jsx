import React from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/NavBar/Nav";
import About from "./Components/About/About";
// import Light from "./Components/Light/Light";
import Projects from "./Components/Projects/Projects";
import MiniProjects from "./Components/MiniProjects/MiniProjects";
import Contect from "./Components/Contect/Contect";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <MiniProjects />
      <Contect />
      <Footer></Footer>
    </>
  );
}

export default App;
