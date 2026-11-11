import Link from "next/link";

const PRODUCTS = [
  {
    id: "quote-check",
    num: "01",
    name: "Quote Check",
    claim: "Forward the offer. Get the verdict.",
    desc: "Driver breakdown, expected range and negotiation arguments — delivered by email, in minutes.",
    href: "/draft/quote-check",
    cta: "Check a quote free",
  },
  {
    id: "intelligence",
    num: "02",
    name: "DEBUY Intelligence",
    claim: "Recoverable spend, ready to negotiate.",
    desc: "The core platform: recoverable spend and negotiation briefs built on your purchasing data.",
    href: "/draft/platform",
    cta: "See the platform",
  },
  {
    id: "order-watch",
    num: "03",
    name: "Order Watch",
    claim: "CC the assistant. Never chase a confirmation again.",
    desc: "Milestone tracking, discrepancy alerts and a weekly digest on every open order.",
    href: "/draft/order-watch",
    cta: "Watch an order",
  },
];

export default function Products() {
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Three products, one promise</span>
          <h2>Turn purchasing data into savings — all the way down.</h2>
          <p>
            Start with a single verdict on a single offer, or run the full
            platform on your whole spend.
          </p>
        </div>

        <div className="products-grid grid grid-3">
          {PRODUCTS.map((p) => (
            <article className="product-card" key={p.id}>
              <span className="step-badge">{p.num}</span>
              <h3>{p.name}</h3>
              <p className="product-card__claim">{p.claim}</p>
              <p>{p.desc}</p>
              <Link href={p.href} className="product-card__cta">
                {p.cta} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
