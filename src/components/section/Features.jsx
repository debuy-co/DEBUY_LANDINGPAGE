export default function Features() {
  return (
    <section
      className="features-dark section"
      id="features"
      aria-labelledby="features-title"
    >
      <div className="container">
        <div className="section-header">
          <h2>Explore our Features</h2>
          <p>
            Everything you need to analyze purchasing data and drive better
            negotiation outcomes.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Purchasing Performance Dashboard</h3>
            <p>
              A real-time overview of purchasing performance with clear,
              consistent KPIs you can trust.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Supplier Analysis</h3>
            <p>
              Compare suppliers by savings, spend share, and performance index
              to identify value drivers and risks.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Parts Analysis</h3>
            <p>
              Drill down to part-level performance: prices, volumes, savings,
              and trends by month and order.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Market & Material Trend Analysis</h3>
            <p>
              Separate market inflation from buyer performance by comparing
              internal indexes with real commodity trends.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Performance Commentary</h3>
            <p>
              Automated, management-ready insights that explain what’s happening
              — and why — in clear business language.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Negotiation Actions</h3>
            <p>
              Turn data into negotiation strategies with AI-driven insights on
              pricing, volumes, and market dynamics.
            </p>
          </div>
        </div>

        <div className="features-cta">
          <a href="/features" className="features-cta-link">
            More about our features →
          </a>
        </div>
      </div>
    </section>
  );
}
