export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* TOP LOGO */}
        <div className="footer-top">
          <img
            src="images/white_logo_transparent_background.png"
            alt="DEBUY procurement analytics platform"
            className="footer-logo"
          />
        </div>

        {/* BOTTOM GRID */}
        <div className="footer-inner">
          {/* LEFT */}
          <div className="footer-brand">
            <span className="footer-copy">
              © {new Date().getFullYear()} DEBUY. All rights reserved.
            </span>
          </div>

          {/* CENTER */}
          <div className="footer-social">
            <span>Follow us on</span>
            <a
              href="https://www.linkedin.com/company/debuy-co"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DEBUY on LinkedIn"
            >
              <img
                src="images/linkedin-white.svg"
                alt="LinkedIn"
                className="linkedin-icon"
              />
            </a>
          </div>

          {/* RIGHT */}
          <nav className="footer-nav">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
