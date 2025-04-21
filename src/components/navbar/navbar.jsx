import "./navbar.css";

function Navbar() {
  const toggleMenu = () => {
    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  };

  return (
    <header className="navbar">
      <h1 className="logo">VLOMELI</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#Intro">Intro</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vlomeliponce/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/vlomeli" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;