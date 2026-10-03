import About from "./components/about/about";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") ?? "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} onThemeToggle={() => setTheme((current) => current === "dark" ? "light" : "dark")} />
      <main className="page">
        <Intro />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
