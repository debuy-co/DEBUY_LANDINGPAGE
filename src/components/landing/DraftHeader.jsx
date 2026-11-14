import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLang } from "./i18n";

export default function DraftHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { lang, setLang, t } = useLang();

  const scrollToSection = (id) => {
    setOpen(false);
    if (router.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/", { state: { scrollTo: id } });
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <a href="/" className="logo">
            <img
              src="/images/base_icon_transparent_background.png"
              alt="DEBUY | Negotiation intelligence for European manufacturers"
              className="logo-img"
            />
          </a>
          <a href="/" className="logo">
            <img
              src="/images/base_text-logoname_transparent_background.png"
              alt="DEBUY | Negotiation intelligence for European manufacturers"
              className="brand-img"
            />
          </a>
        </div>

        <nav className="nav desktop-nav">
          <button className="nav-item" onClick={() => scrollToSection("products")}>
            {t.nav.platform}
          </button>
          <button
            className="nav-item"
            onClick={() => scrollToSection("how-it-works")}
          >
            {t.nav.how}
          </button>
          <Link href="/about" className="nav-item">
            {t.nav.about}
          </Link>
        </nav>

        <div className="header-right">
          <div className="lang-switch" role="group" aria-label="Language / Lingua">
            <button
              className={lang === "en" ? "lang-btn lang-btn--active" : "lang-btn"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              className={lang === "it" ? "lang-btn lang-btn--active" : "lang-btn"}
              onClick={() => setLang("it")}
            >
              IT
            </button>
          </div>

          <button
            className="burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <a href="#contact" className="nav-cta">
            {t.nav.cta}
          </a>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          <button onClick={() => scrollToSection("products")}>{t.nav.platform}</button>
          <button onClick={() => scrollToSection("how-it-works")}>{t.nav.how}</button>
          <Link href="/about" onClick={() => setOpen(false)}>{t.nav.about}</Link>
          <Link href="/quote-check" onClick={() => setOpen(false)}>
            {t.nav.quoteCheck}
          </Link>
          <Link href="/order-watch" onClick={() => setOpen(false)}>
            {t.nav.orderWatch}
          </Link>
        </div>
      )}
    </header>
  );
}
