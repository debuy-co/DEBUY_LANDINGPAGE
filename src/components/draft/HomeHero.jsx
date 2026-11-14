export default function HomeHero() {
  return (
    <section className="hero hero--draft">
      <video
        className="hero-video"
        src="/videos/hero-video-short-520p.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-draft-grid hero-draft-grid--single">
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
        </div>
      </div>
    </section>
  );
}
