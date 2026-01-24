import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FinalCTA from "../components/section/CTA";

export default function FeaturesPage() {
  return (
    <>
      <Header />

      <main className="features-page">
        {/* HERO */}
        <section className="features-hero section">
          <div className="container">
            <h1>Everything you need to control purchasing costs</h1>
            <p>
              DEBUY is an advanced procurement performance analytics platform
              designed to transform complex purchasing data into clear,
              defensible, action-oriented insights. DEBUY is not just reporting
              — it’s decision support.
            </p>
          </div>
        </section>

        {/* FEATURE 1 */}
        <section className="feature-block section">
          <div className="container feature-grid">
            <div className="feature-text">
              <h2>Purchasing Performance Dashboard</h2>
              <p>
                The main dashboard provides an immediate, high-level view of
                purchasing performance: • Year-to-date Purchasing Performance
                Index • YTD APV and Savings • Monthly performance trends All
                KPIs are calculated on real transactional data, ensuring
                consistency, traceability, and comparability over time.
              </p>
            </div>

            <div className="feature-media">
              <img src="/illustrations/performance-dashboard.svg" alt="" />
            </div>
          </div>
        </section>

        {/* FEATURE 2 (REVERSED) */}
        <section className="feature-block section feature-block--reverse">
          <div className="container feature-grid">
            <div className="feature-text">
              <h2>Supplier Analysis</h2>
              <p>
                Supplier Analysis enables a structured, comparable view of
                supplier performance. It includes: • Spend share (%) • Total
                savings • Monthly performance index • Performance trends over
                time The table is interactive and filterable, and KPI cards
                update dynamically based on the visible suppliers.
              </p>
            </div>

            <div className="feature-media">
              <img src="/illustrations/supplier-analysis.svg" alt="" />
            </div>
          </div>
        </section>

        {/* FEATURE 3 */}
        <section className="feature-block section">
          <div className="container feature-grid">
            <div className="feature-text">
              <h2>Parts Analysis</h2>
              <p>
                Parts Analysis brings visibility down to the operational level.
                It allows analysis by: • Supplier • Part number • Order type •
                PRIF vs actual price • Volumes, savings, and performance by
                month
              </p>
            </div>

            <div className="feature-media">
              <img src="/illustrations/parts-analysis.svg" alt="" />
            </div>
          </div>
        </section>

        {/* FEATURE 4 (REVERSED) */}
        <section className="feature-block section feature-block--reverse">
          <div className="container feature-grid">
            <div className="feature-text">
              <h2>Market & Material Trend Analysis</h2>
              <p>
                This feature compares external commodity market trends with your
                internal purchasing performance index. It allows you to: • Track
                real market price movements by material and region • Overlay
                internal performance trends • Clearly distinguish inflation
                impact from buyer performance
              </p>
            </div>

            <div className="feature-media">
              <img src="/illustrations/material-trend.svg" alt="" />
            </div>
          </div>
        </section>

        {/* FEATURE 5 */}
        <section className="feature-block section">
          <div className="container feature-grid">
            <div className="feature-text">
              <h2>AI Performance Commentary</h2>
              <p>
                DEBUY includes an AI-powered commentary engine that
                automatically interprets performance data. The AI: • Analyzes
                trends, savings, and indexes • Identifies key performance
                drivers • Generates professional, management-ready commentary
              </p>
            </div>

            <div className="feature-media">
              <img src="/illustrations/ai-commentary.svg" alt="" />
            </div>
          </div>
        </section>

        {/* REUSE FINAL CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
