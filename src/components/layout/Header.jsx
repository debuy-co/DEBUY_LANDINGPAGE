import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setOpen(false);

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        {/* BRAND — ALWAYS VISIBLE */}
        <div className="brand">
          <a href="/" className="logo">
            <img
              src="images/base_icon_transparent_background.png"
              alt="DEBUY procurement analytics platform"
              className="logo-img"
            />
          </a>
          <a href="/" className="logo">
            <img
              src="images/base_text-logoname_transparent_background.png"
              alt="DEBUY procurement analytics platform"
              className="brand-img"
            />
          </a>
        </div>

        {/* DESKTOP NAV ONLY */}
        <nav className="nav desktop-nav">
          <button
            className="nav-item"
            onClick={() => scrollToSection("features")}
          >
            Features
          </button>

          <button
            className="nav-item"
            onClick={() => scrollToSection("implementation")}
          >
            Implementation
          </button>

          <Link to="/about" className="nav-item">
            About
          </Link>

          <button
            className="nav-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>

        {/* BURGER — MOBILE ONLY */}
        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* DESKTOP ONLY CTA */}
        <a href="#contact" className="nav-cta">
          Get Started
        </a>
      </div>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="mobile-nav">
          <Link to="/features" onClick={() => setOpen(false)}>
            Features
          </Link>
          <button onClick={() => scrollToSection("implementation")}>
            Implementation
          </button>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </header>
  );
}
