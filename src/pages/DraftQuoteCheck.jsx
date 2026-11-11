import DraftProductPage from "./DraftProductPage";

const product = {
  name: "Quote Check",
  eyebrow: "Product 01 — email in, verdict out",
  title: "Forward the offer. Get the verdict.",
  sub: "DEBUY decomposes the price into material, FX and volume drivers, benchmarks it against market indices, and replies with the negotiation brief. No black box — every assumption is yours to check.",
  ctaLabel: "Check your first quote free",
  ctaHint: "Forward a supplier offer, get the verdict in minutes",
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
};

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

export default function DraftQuoteCheck() {
  return <DraftProductPage product={product} />;
}
