import Link from "next/link";

const FEATURES = [
  {
    number: "01",
    name: "RECOVERY SPEND",
    title: "Find the value in your purchasing data.",
    description:
      "DEBUY analyzes the purchasing data you already have to surface supplier price movements and potential recovery opportunities. See what changed and understand the drivers — materials, FX, and volume.",
    detail: "Get a defensible negotiation brief and ready-to-use talk track in days.",
    icon: "✳",
    href: "/draft/platform",
  },
  {
    number: "02",
    name: "QUOTE CHECK",
    title: "Know what to challenge.",
    description:
      "Forward a supplier quote as a PDF, spreadsheet, or email. DEBUY breaks down the price drivers — such as materials, FX, and volume — and prepares a clear negotiation brief with a ready-to-use talk track.",
    detail: "Every assumption is visible and editable by your team.",
    icon: "↗",
    href: "/draft/quote-check",
  },
  {
    number: "03",
    name: "ORDER WATCH",
    title: "Make supplier performance count.",
    description:
      "CC watch@debuy.co on a purchase order. DEBUY follows confirmations, shipments, deliveries, and invoices, flags delays and discrepancies, and prepares follow-ups when needed.",
    detail: "Turn what happens after the order into evidence for your next negotiation.",
    icon: "◎",
    href: "/draft/order-watch",
    emailChip: true,
  },
];

export default function Products() {
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="products-heading">
          <div>
            <span className="eyebrow">The DEBUY platform</span>
            <h2>
              One negotiation cycle.
              <br />
              Three ways to <em>build leverage.</em>
            </h2>
          </div>
          <p>
            Find opportunities in purchasing data. Prepare the negotiation.
            Carry supplier performance into the next one.
          </p>
        </div>

        <div className="feature-grid grid grid-3">
          {FEATURES.map((f) => (
            <article className="feature-cardx" key={f.number}>
              <div className="feature-cardx__top">
                <span>
                  {f.number} / {f.name}
                </span>
                <span className="feature-cardx__icon" aria-hidden="true">
                  {f.icon}
                </span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              <div className="feature-cardx__detail">
                <span aria-hidden="true">✳</span>
                {f.detail}
              </div>
              {f.emailChip && (
                <div className="email-chip">
                  TO: supplier@company.com <span>CC: watch@debuy.co</span>
                </div>
              )}
              <Link className="feature-cardx__link" href={f.href}>
                Explore {f.name.toLowerCase()} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
