import DraftProductPage from "./DraftProductPage";

const product = {
  name: "Order Watch",
  eyebrow: "Product 03 — orders on autopilot",
  title: "CC the assistant. Never chase a confirmation again.",
  sub: "Order Watch follows every open order: milestones, discrepancies and a weekly digest, so nothing slips through the cracks.",
  ctaLabel: "Watch my first order free",
  ctaHint: "CC the assistant on a PO thread and get the digest",
  visual: <OrderWatchVisual />,
  steps: [
    {
      title: "CC the assistant",
      desc: "Add the Order Watch address to any PO email thread. That's the whole setup.",
    },
    {
      title: "Milestones tracked",
      desc: "Confirmation, production, shipment and delivery dates are monitored automatically.",
    },
    {
      title: "Discrepancies & weekly digest",
      desc: "Get alerted when reality diverges from the order — and a digest of everything open.",
    },
  ],
  objections: [
    {
      q: "Does it replace my ERP?",
      a: "No. It sits on top of your email and orders, catching what systems miss — no migration, no new tool for suppliers to learn.",
    },
    {
      q: "What happens when a date slips?",
      a: "You get an alert with the discrepancy and the context, not just a red flag.",
    },
    {
      q: "Who else sees the thread?",
      a: "Only people you CC. Order data stays within your workspace, EU-hosted.",
    },
  ],
  finalCtaTitle: "Stop chasing confirmations.",
  finalCtaText:
    "CC the assistant on your next PO thread and get your first weekly digest.",
};

function OrderWatchVisual() {
  const milestones = [
    { label: "Order confirmed", state: "done" },
    { label: "In production", state: "done" },
    { label: "Shipped", state: "current" },
    { label: "Delivered", state: "todo" },
  ];
  return (
    <div className="orderwatch-card">
      <div className="verdict-card__head">
        <span className="verdict-card__from">DEBUY Order Watch</span>
        <span className="verdict-card__time">weekly digest</span>
      </div>
      <h2 className="verdict-card__subject">PO #2291 — CNC parts</h2>
      <ul className="orderwatch-timeline">
        {milestones.map((m) => (
          <li key={m.label} className={`timeline-item timeline-item--${m.state}`}>
            <span className="timeline-dot" aria-hidden="true" />
            <span>{m.label}</span>
            {m.state === "current" && (
              <span className="timeline-flag">ETA slipped 4 days</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DraftOrderWatch() {
  return <DraftProductPage product={product} />;
}
