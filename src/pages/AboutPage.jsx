import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FinalCTA from "../components/section/CTA";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-page">
        {/* HERO */}
        <section className="about-hero">
          <div className="container">
            <h1>About DEBUY</h1>
            <p>
              Helping organizations understand purchasing costs and make better
              decisions through data.
            </p>
          </div>
        </section>

        {/* TWO COLUMN ABOUT SECTION */}
        <section className="about-main section">
          <div className="container about-grid">
            {/* LEFT: IMAGE */}
            <div className="about-media">
              <img
                src="/images/about-picture.jpg"
                alt="Purchasing analytics and decision making"
              />
            </div>

            {/* RIGHT: TEXT */}
            <div className="about-content">
              <div className="about-block">
                <h2>Why DEBUY exists</h2>
                <p>
                  Purchasing teams are under constant pressure to reduce costs,
                  but often lack clarity on what is really driving them.
                </p>
                <p>
                  Inflation, supplier behavior, and internal inefficiencies are
                  frequently mixed together, making effective action difficult.
                </p>
              </div>

              <div className="about-block">
                <h2>Our approach</h2>
                <p>
                  DEBUY focuses on separating these factors and transforming raw
                  purchasing data into clear, negotiation-ready insights.
                </p>
                <p>
                  We believe better decisions come from clarity, simplicity, and
                  transparency — not complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
