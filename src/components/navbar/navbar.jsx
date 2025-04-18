import "./navbar.css";

function Navbar() {
  const toggleMenu = () => {
    console.log('Menu toggled');  // Check if this is logged
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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