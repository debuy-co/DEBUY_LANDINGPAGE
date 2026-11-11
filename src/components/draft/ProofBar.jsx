const PROOF = [
  {
    value: "5–12%",
    label: "avg. savings on analyzed spend",
  },
  {
    value: "Days",
    label: "from data to insights, not months",
  },
  {
    value: "100%",
    label: "of numbers traceable to a driver",
  },
];

export default function ProofBar() {
  return (
    <section className="proofbar">
      <div className="container proofbar-grid">
        {PROOF.map((p) => (
          <div className="proofbar-item" key={p.label}>
            <span className="proofbar-value">{p.value}</span>
            <span className="proofbar-label">{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
