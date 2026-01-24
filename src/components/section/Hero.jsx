export default function Hero() {
  return (
    <section className="hero">
      {/* BACKGROUND VIDEO */}
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

      {/* DARK OVERLAY */}
      <div className="hero-overlay" />

      {/* CONTENT */}
      <div className="container hero-content">
        <div className="hero-card">
          <h1>Turn purchasing data into savings</h1>

          <p>
            DEBUY helps purchasing and finance teams understand cost drivers,
            negotiate better, and achieve measurable savings.
          </p>

          <div className="hero-actions">
            {/*
            we will implement it laater on
            <button
              className="hero-link"
              type="button"
              onClick={() => {
                // placeholder for video modal or scroll
                console.log("How it works clicked");
              }}
            >
              ▶ How it works
            </button>*/}

            <a href="#contact" className="btn btn-primary">
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
