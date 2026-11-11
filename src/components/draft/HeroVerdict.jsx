import EmailCapture from "./EmailCapture";

export default function HeroVerdict() {
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
            <h1>Send your supplier&apos;s offer. Get a verdict you can defend.</h1>

            <p>
              DEBUY decomposes every price movement into material, FX and
              volume drivers, benchmarks it against market indices, and hands
              you the negotiation brief. No black box: every assumption is
              yours to check and change.
            </p>

            <div className="hero-actions hero-actions--stack">
              <EmailCapture buttonLabel="Check your first quote free" />
              <p className="hero-hint">
                Forward a supplier offer, get the verdict in minutes
              </p>
              <a href="#products" className="hero-link">
                See the platform &rarr;
              </a>
            </div>

            <ul className="hero-trustbar">
              <li>Verdicts in minutes</li>
              <li>Based on ECB &amp; market indices</li>
              <li>No integration required</li>
            </ul>
          </div>

          <VerdictMockup />
        </div>
      </div>
    </section>
  );
}

function VerdictMockup() {
  return (
    <div className="verdict-card" aria-label="Example of a DEBUY verdict email">
      <div className="verdict-card__head">
        <span className="verdict-card__from">DEBUY Quote Check</span>
        <span className="verdict-card__time">2 min ago</span>
      </div>
      <h2 className="verdict-card__subject">
        Verdict on offer #4821 — steel bracket batch
      </h2>

      <div className="verdict-card__score">
        <span className="verdict-card__badge">+11.8% above expected range</span>
        <span className="verdict-card__price">€61,240 vs €54,780 expected</span>
      </div>

      <div className="verdict-card__range" aria-hidden="true">
        <div className="verdict-card__range-track">
          <div className="verdict-card__range-zone" />
          <div className="verdict-card__range-pin" />
        </div>
        <div className="verdict-card__range-labels">
          <span>€52k</span>
          <span>expected range</span>
          <span>€68k</span>
        </div>
      </div>

      <ul className="verdict-card__drivers">
        <li>
          <span>Material (steel index)</span>
          <strong>+4.2%</strong>
        </li>
        <li>
          <span>FX (EUR/USD)</span>
          <strong>+1.1%</strong>
        </li>
        <li>
          <span>Volume effect</span>
          <strong>-0.8%</strong>
        </li>
        <li className="verdict-card__driver--gap">
          <span>Unexplained / supplier margin</span>
          <strong>+7.3%</strong>
        </li>
      </ul>

      <div className="verdict-card__talk">
        <span className="verdict-card__talk-label">Talk track</span>
        <p>
          &ldquo;Steel and FX explain 5 points of this increase. The remaining
          7 are not on any index we track — let&apos;s look at them
          together.&rdquo;
        </p>
      </div>
    </div>
  );
}
