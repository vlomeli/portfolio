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
        <section id="Intro">
          <Intro />
        </section>
        <hr />
        <section id="About">
          <About />
        </section>
        <hr />
        <section id="Projects">
          <Projects />
        </section>
        <hr />
      </main>
      <Footer />
    </>
  );
}

export default App;
