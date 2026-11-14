export default function HomeHero() {
  return (
    <section className="hero hero--draft">
      <video
        className="hero-video"
        src="videos/hero-video-short-520p.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-draft-grid">
          <div className="hero-card">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow-dot" aria-hidden="true" />
              Negotiation intelligence for European manufacturers
            </span>
            <h1>
              Make every supplier negotiation <em>count.</em>
            </h1>
            <p>
              DEBUY turns every supplier price movement into an explainable
              negotiation position — and every order outcome into leverage for
              the next negotiation.
            </p>

            <div className="hero-actions hero-actions--stack">
              <a href="#contact" className="btn btn-primary">
                See DEBUY in action &rarr;
              </a>
              <a href="#products" className="hero-link">
                Explore the platform &darr;
              </a>
            </div>

            <p className="hero-proof">
              <span aria-hidden="true">✳</span> Built around the data you
              already have.{" "}
              <strong>Transparent by design. Buyer-controlled.</strong>
            </p>
          </div>

          <QuoteAnalysisVisual />
        </div>
      </div>
    </section>
  );
}

function QuoteAnalysisVisual() {
  return (
    <div className="verdict-card quote-visual" aria-label="Illustration of a supplier quote analysis">
      <div className="verdict-card__head">
        <span className="verdict-card__from">QUOTE ANALYSIS</span>
        <span className="live-pill">
          <i /> READY TO NEGOTIATE
        </span>
      </div>
      <h2 className="verdict-card__subject">
        Supplier quote <span className="quote-id">Q-2048</span>
      </h2>

      <div className="supplier-row">
        <span className="supplier-icon" aria-hidden="true">N</span>
        <div>
          <strong>Nordform Components</strong>
          <small>Aluminium housing · 12,000 units</small>
        </div>
        <span className="quote-price">
          €48.60<small>/ unit</small>
        </span>
      </div>

      <div className="driver-heading">
        <strong>What&apos;s driving the price?</strong>
        <span>vs. previous quote</span>
      </div>

      <ul className="driver-list">
        <li>
          <div>
            <span className="driver-dot driver-dot--material" /> Material
          </div>
          <strong>+ €2.10</strong>
          <span className="bar">
            <i style={{ width: "72%" }} />
          </span>
        </li>
        <li>
          <div>
            <span className="driver-dot driver-dot--fx" /> Exchange rate
          </div>
          <strong>+ €0.85</strong>
          <span className="bar">
            <i style={{ width: "39%" }} />
          </span>
        </li>
        <li>
          <div>
            <span className="driver-dot driver-dot--volume" /> Volume
          </div>
          <strong>− €0.40</strong>
          <span className="bar">
            <i style={{ width: "20%" }} />
          </span>
        </li>
      </ul>

      <div className="brief-box">
        <span className="brief-icon" aria-hidden="true">✳</span>
        <div>
          <strong>Your negotiation brief is ready</strong>
          <small>3 price drivers · 2 points to challenge</small>
        </div>
        <span aria-hidden="true">↗</span>
      </div>

      <div className="visual-foot">
        <span>ASSUMPTIONS</span>
        <span className="editable">● Visible &amp; editable</span>
      </div>
    </div>
  );
}
