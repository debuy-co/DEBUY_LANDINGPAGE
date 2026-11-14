export const PRODUCTS = [
  {
    id: "quote-check",
    num: "01",
    name: "Quote Check",
    claim: "Forward the offer. Get the verdict.",
    desc: "Driver breakdown, expected range and negotiation arguments — delivered by email, in minutes.",
    href: "/quote-check",
    eyebrow: "Product 01 — email in, verdict out",
    title: "Forward the offer. Get the verdict.",
    sub: "DEBUY decomposes the price into material, FX and volume drivers, benchmarks it against market indices, and replies with the negotiation brief. No black box — every assumption is yours to check.",
    ctaLabel: "Check your first quote free",
    ctaHint: "Forward a supplier offer, get the verdict in minutes",
    problem:
      "A price increase lands and you don't know how much of it is market, how much is the supplier. You negotiate with guesses.",
    visual: <QuoteCheckVisual />,
    steps: [
      {
        title: "Forward the offer",
        desc: "Send the supplier's quote or PDF to the Quote Check address. No account, no integration.",
      },
      {
        title: "We decompose the price",
        desc: "Material indexes, FX and volume effects are separated from the supplier's own margin.",
      },
      {
        title: "You get the verdict",
        desc: "Expected range, driver breakdown and a ready-to-use talk track land in your inbox in minutes.",
      },
    ],
    objections: [
      {
        q: "Is my supplier's pricing confidential?",
        a: "Yes. Offers are processed only to produce your verdict — never shared or used across customers. EU data residency, GDPR-compliant.",
      },
      {
        q: "What if a line item can't be benchmarked?",
        a: "The verdict says so explicitly. An honest fallback beats a confident guess — you'll never get an unexplained number.",
      },
      {
        q: "Do I need to connect my ERP first?",
        a: "No. Quote Check works on the document alone. Connecting your data later unlocks portfolio-level intelligence.",
      },
    ],
    finalCtaTitle: "Your next negotiation starts with a verdict.",
    finalCtaText:
      "Forward one real offer and see the difference between arguing from opinion and arguing from numbers.",
  },
  {
    id: "intelligence",
    num: "02",
    name: "DEBUY Intelligence",
    claim: "Recoverable spend, ready to negotiate.",
    desc: "The core platform: recoverable spend and negotiation briefs built on your purchasing data.",
    href: "/platform",
    eyebrow: "Product 02 — the core platform",
    title: "Recoverable spend, ready to negotiate.",
    sub: "Connect your purchasing data and DEBUY goes all the way down: from dashboards to drivers to a negotiation brief you can defend in the room.",
    ctaLabel: "Get a free diagnostic on your data",
    ctaHint: "Upload an export, get your first insights in days",
    problem:
      "Analytics flatten material, FX and volume into one line. You know what you spend — not what you should pay.",
    visual: <PlatformVisual />,
    steps: [
      {
        title: "Connect",
        desc: "ERP exports or Excel files. No complex integration project.",
      },
      {
        title: "Automatic analysis",
        desc: "Inflation, performance indexes and supplier trends are calculated automatically.",
      },
      {
        title: "Act",
        desc: "Recoverable spend and negotiation briefs turn analysis into savings.",
      },
    ],
    objections: [
      {
        q: "How is this different from spend analytics?",
        a: "Analytics tells you what happened. DEBUY tells you what to do next — with the benchmark and the words to use.",
      },
      {
        q: "Is the AI a black box?",
        a: "No. AI extracts, our deterministic engine decides. Every verdict traces back to a driver you can verify and change.",
      },
      {
        q: "How fast is implementation?",
        a: "Insights in days, not months — on your existing exports, without changing how your team works.",
      },
    ],
    finalCtaTitle: "See what your spend is really hiding.",
    finalCtaText:
      "Get a free diagnostic on your data and find out how much of your purchasing is recoverable.",
  },
  {
    id: "order-watch",
    num: "03",
    name: "Order Watch",
    claim: "CC the assistant. Never chase a confirmation again.",
    desc: "Milestone tracking, discrepancy alerts and a weekly digest on every open order.",
    href: "/order-watch",
    eyebrow: "Product 03 — orders on autopilot",
    title: "CC the assistant. Never chase a confirmation again.",
    sub: "Order Watch follows every open order: milestones, discrepancies and a weekly digest, so nothing slips through the cracks.",
    ctaLabel: "Watch my first order free",
    ctaHint: "CC the assistant on a PO thread and get the digest",
    problem:
      "Orders slip silently: confirmations chased over email, dates that move and nobody notices until it's too late.",
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
  },
];

function QuoteCheckVisual() {
  return (
    <div className="verdict-card">
      <div className="verdict-card__head">
        <span className="verdict-card__from">DEBUY Quote Check</span>
        <span className="verdict-card__time">just now</span>
      </div>
      <h2 className="verdict-card__subject">Verdict on offer #4821</h2>
      <div className="verdict-card__score">
        <span className="verdict-card__badge">+11.8% above expected range</span>
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
        <li className="verdict-card__driver--gap">
          <span>Unexplained / supplier margin</span>
          <strong>+7.3%</strong>
        </li>
      </ul>
      <div className="verdict-card__talk">
        <span className="verdict-card__talk-label">Talk track</span>
        <p>“Only 5 of these 12 points are on any index we track.”</p>
      </div>
    </div>
  );
}

function PlatformVisual() {
  const bars = [
    { label: "Material index", pct: 42, cls: "" },
    { label: "FX", pct: 18, cls: "" },
    { label: "Volume", pct: 12, cls: "" },
    { label: "Supplier margin", pct: 28, cls: "bar--gap" },
  ];
  return (
    <div className="waterfall-card">
      <span className="eyebrow">Price movement decomposition</span>
      {bars.map((b) => (
        <div className="waterfall-row" key={b.label}>
          <span className="waterfall-label">{b.label}</span>
          <div className="waterfall-track">
            <div
              className={`waterfall-bar ${b.cls}`}
              style={{ width: `${b.pct}%` }}
            />
          </div>
          <span className="waterfall-pct">{b.pct}%</span>
        </div>
      ))}
    </div>
  );
}

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
          <li
            key={m.label}
            className={`timeline-item timeline-item--${m.state}`}
          >
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
