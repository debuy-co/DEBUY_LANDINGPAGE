import { useLang } from "./i18n";

export default function HomeHero() {
  const { t } = useLang();

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
              {t.hero.eyebrow}
            </span>
            <h1>
              {t.hero.titleA} <em>{t.hero.titleEm}</em>
            </h1>
            <p>{t.hero.lede}</p>

            <div className="hero-actions hero-actions--stack">
              <a href="#contact" className="btn btn-primary">
                {t.hero.ctaPrimary} &rarr;
              </a>
              <a href="#products" className="hero-link">
                {t.hero.ctaSecondary} &darr;
              </a>
            </div>

            <p className="hero-proof">
              <span aria-hidden="true">✳</span> {t.hero.proof}{" "}
              <strong>{t.hero.proofStrong}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
