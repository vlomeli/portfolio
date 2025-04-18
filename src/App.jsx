import { useState } from "react";
import About from "./components/about/about";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="intro">
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
