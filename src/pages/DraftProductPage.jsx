import Link from "next/link";
import DraftHeader from "../components/draft/DraftHeader";
import Footer from "../components/layout/Footer";

export default function DraftProductPage({ product }) {
  return (
    <>
      <DraftHeader />

      <section className="product-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/draft">← Back to DEBUY</Link>
          </nav>

          <div className="product-hero-grid">
            <div>
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" aria-hidden="true" />
                {product.eyebrow}
              </span>
              <h1>{product.title}</h1>
              <p className="product-hero__sub">{product.sub}</p>
              <a href="#contact" className="btn btn-primary">
                {product.ctaLabel} &rarr;
              </a>
              <p className="hero-hint">{product.ctaHint}</p>
            </div>

            <div className="product-hero__visual">{product.visual}</div>
          </div>
        </div>
      </section>

      <section className="section detail-problem" id="problem">
        <div className="container">
          <span className="eyebrow">The problem</span>
          <h2 className="detail-problem__text">{product.problem}</h2>
        </div>
      </section>

      <section className="section section--alt" id="how">
        <div className="container">
          <span className="eyebrow">How it works</span>
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

      <section className="section" id="faq">
        <div className="container">
          <span className="eyebrow">Objections, answered</span>
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
        <div className="container final-cta-content final-cta-content--center">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow-dot" aria-hidden="true" />
            Start with your data
          </span>
          <h2>{product.ctaLabel}</h2>
          <p>{product.ctaHint}</p>
          <a className="btn btn-primary" href="mailto:hello@debuy.co">
            Get started &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
