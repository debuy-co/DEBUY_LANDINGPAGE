const STEPS = [
  {
    n: "01",
    title: "Bring what you already have",
    body: "Supplier quotes, purchasing data, and order emails. Start with familiar files and workflows.",
  },
  {
    n: "02",
    title: "See the drivers and the facts",
    body: "Understand what changed in a price and what happened after an order was placed.",
  },
  {
    n: "03",
    title: "Go into the conversation prepared",
    body: "Give your buyers an explainable position, supporting evidence, and words to use.",
  },
];

export default function Steps() {
  return (
    <section className="steps section" id="how-it-works">
      <div className="container steps-grid">
        <div className="steps-intro">
          <span className="eyebrow">Simple by design</span>
          <h2>
            Good decisions start
            <br />
            with <em>what you know.</em>
          </h2>
          <p>
            No black box. No long implementation. Just a clearer next step from
            the data and workflows you already use.
          </p>
        </div>

        <div className="step-list">
          {STEPS.map((s) => (
            <div className="step-row" key={s.n}>
              <span className="step-badge step-badge--inline">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <span className="step-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
