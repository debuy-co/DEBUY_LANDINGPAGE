import { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "./productsData";
import EmailCapture from "./EmailCapture";

export const BRAND_MESSAGE = "Know what you should pay. Know where every order stands.";

export default function Products() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const go = (idx) => {
    if (idx === active) return;
    setActive(idx);
    setAnimKey((k) => k + 1);
  };

  const p = PRODUCTS[active];

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Three products, one promise</span>
          <h2>{BRAND_MESSAGE}</h2>
          <p>
            From the first quote to the final delivery. Select a product to see
            exactly what you get.
          </p>
        </div>

        <div className="explorer">
          {/* RAIL — the other two products move aside here */}
          <div className="explorer-rail" role="tablist" aria-label="DEBUY products">
            {PRODUCTS.map((prod, i) => (
              <button
                key={prod.id}
                role="tab"
                aria-selected={i === active}
                className={`explorer-tab${i === active ? " explorer-tab--active" : ""}`}
                onClick={() => go(i)}
              >
                <span className="step-badge">{prod.num}</span>
                <span className="explorer-tab__body">
                  <strong>{prod.name}</strong>
                  <em>{prod.claim}</em>
                </span>
              </button>
            ))}
          </div>

          {/* DETAIL — expands on the same page */}
          <div className="explorer-detail" key={animKey} role="tabpanel">
            <div className="explorer-detail__head">
              <div className="explorer-detail__intro">
                <h3>{p.name}</h3>
                <p className="product-card__claim">{p.claim}</p>
                <p>{p.desc}</p>
                <EmailCapture compact buttonLabel={p.ctaLabel} />
                <p className="hero-hint hero-hint--dark">{p.ctaHint}</p>
                <Link href={p.href} className="explorer-detail__link">
                  Open the full {p.name} page &rarr;
                </Link>
              </div>
              <div className="explorer-detail__visual">{p.visual}</div>
            </div>

            <div className="explorer-block">
              <h4>The problem</h4>
              <p>{p.problem}</p>
            </div>

            <div className="explorer-block">
              <h4>How it works</h4>
              <div className="implementation-grid implementation-grid--compact">
                {p.steps.map((s, i) => (
                  <div className="implementation-card" key={s.title}>
                    <span className="step-badge">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="explorer-block">
              <h4>Objections, answered</h4>
              <div className="why-grid">
                {p.objections.map((o) => (
                  <article className="why-card" key={o.q}>
                    <h3>{o.q}</h3>
                    <p className="why-card__us">{o.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
