import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DraftHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (id) => {
    setOpen(false);
    if (router.pathname === "/draft" || router.pathname === "/draft/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/draft", { state: { scrollTo: id } });
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <a href="/draft" className="logo">
            <img
              src="images/base_icon_transparent_background.png"
              alt="DEBUY procurement analytics platform"
              className="logo-img"
            />
          </a>
          <a href="/draft" className="logo">
            <img
              src="images/base_text-logoname_transparent_background.png"
              alt="DEBUY procurement analytics platform"
              className="brand-img"
            />
          </a>
        </div>

        <nav className="nav desktop-nav">
          <button className="nav-item" onClick={() => scrollToSection("products")}>
            Products
          </button>
          <button
            className="nav-item"
            onClick={() => scrollToSection("implementation")}
          >
            How it works
          </button>
          <button className="nav-item" onClick={() => scrollToSection("why")}>
            Why DEBUY
          </button>
          <button className="nav-item" onClick={() => scrollToSection("faq")}>
            FAQ
          </button>
        </nav>

        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <a href="#contact" className="nav-cta">
          Check a quote free
        </a>
      </div>

      {open && (
        <div className="mobile-nav">
          <button onClick={() => scrollToSection("products")}>Products</button>
          <button onClick={() => scrollToSection("implementation")}>
            How it works
          </button>
          <button onClick={() => scrollToSection("why")}>Why DEBUY</button>
          <button onClick={() => scrollToSection("faq")}>FAQ</button>
          <Link href="/draft/quote-check" onClick={() => setOpen(false)}>
            Quote Check
          </Link>
          <Link href="/draft/order-watch" onClick={() => setOpen(false)}>
            Order Watch
          </Link>
        </div>
      )}
    </header>
  );
}
