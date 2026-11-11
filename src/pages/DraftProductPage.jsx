import Link from "next/link";
import DraftHeader from "../components/draft/DraftHeader";
import EmailCapture from "../components/draft/EmailCapture";
import Footer from "../components/layout/Footer";

export default function DraftProductPage({ product }) {
  return (
    <>
      <DraftHeader />

      <section className="product-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/draft">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>{product.name}</span>
          </nav>

          <div className="product-hero-grid">
            <div>
              <span className="eyebrow">{product.eyebrow}</span>
              <h1>{product.title}</h1>
              <p className="product-hero__sub">{product.sub}</p>
              <EmailCapture
                buttonLabel={product.ctaLabel}
                placeholder="Work email"
                compact
              />
              <p className="hero-hint">{product.ctaHint}</p>
            </div>

            <div className="product-hero__visual" aria-hidden="true">
              {product.visual}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>How it works</h2>
          </div>
          <div className="implementation-grid">
            {product.steps.map((s, i) => (
              <div className="implementation-card" key={s.title}>
                <span className="step-badge">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2>Objections, answered</h2>
          </div>
          <div className="why-grid">
            {product.objections.map((o) => (
              <article className="why-card" key={o.q}>
                <h3>{o.q}</h3>
                <p className="why-card__us">{o.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section" id="contact">
        <div className="final-cta-bg" aria-hidden="true" />
        <div className="container final-cta-grid">
          <div className="final-cta-content">
            <h2>{product.finalCtaTitle}</h2>
            <p>{product.finalCtaText}</p>
          </div>
          <div className="final-cta-form">
            <EmailCapture
              buttonLabel={product.ctaLabel}
              placeholder="Work email"
            />
            <p className="form-note">
              By continuing you accept our{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{" "}
              (GDPR). Essential cookies only.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
