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
