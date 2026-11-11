const COMPARISONS = [
  {
    vs: "Spend dashboards",
    them: "They describe what happened.",
    us: "We direct what to do next: the recoverable gap, the benchmark, and what to say in the room.",
  },
  {
    vs: "Autonomous AI agents",
    them: "51% of CPOs don't trust AI to replace human judgment in negotiations.",
    us: "Human-in-the-loop: AI extracts, our deterministic engine decides the verdict — and you can check every assumption.",
  },
  {
    vs: "Enterprise suites",
    them: "Months of implementation before the first insight.",
    us: "Insights in days, directly on your exports. No integration project required.",
  },
];

export default function WhyDebuy() {
  return (
    <section className="why section" id="why">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Why DEBUY, not X</span>
          <h2>A verdict, not opinions</h2>
          <p>
            Explainable by design. Every number we hand you traces back to a
            driver you can verify.
          </p>
        </div>

        <div className="why-grid">
          {COMPARISONS.map((c) => (
            <article className="why-card" key={c.vs}>
              <h3>vs {c.vs}</h3>
              <p className="why-card__them">{c.them}</p>
              <p className="why-card__us">{c.us}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
