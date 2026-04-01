import "./navbar.css";
import { useEffect, useMemo, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  const navItems = useMemo(
    () => [
      { href: "#intro", label: "Intro" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      {
        href: "https://www.linkedin.com/in/vlomeliponce/",
        label: "LinkedIn",
        external: true,
      },
      { href: "https://github.com/vlomeli", label: "GitHub", external: true },
    ],
    []
  );

  useEffect(() => {
    const sectionIds = ["intro", "about", "projects"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { root: null, threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="logo" href="#intro" onClick={closeMenu}>
          VLOMELI
        </a>

        <nav className="nav" aria-label="Primary">
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-nav-links"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="nav-toggle-lines" aria-hidden="true" />
          </button>

          <div
            className={`nav-backdrop ${menuOpen ? "open" : ""}`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <ul
            id="primary-nav-links"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            {navItems.map((item) => {
              const isActive =
                !item.external && item.href === `#${activeSection}`;

              const rel = item.external ? "noopener noreferrer" : undefined;
              const target = item.external ? "_blank" : undefined;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={target}
                    rel={rel}
                    className={isActive ? "active" : undefined}
                    onClick={!item.external ? closeMenu : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
