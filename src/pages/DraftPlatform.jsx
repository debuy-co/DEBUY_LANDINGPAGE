import DraftProductPage from "./DraftProductPage";

const product = {
  name: "DEBUY Intelligence",
  eyebrow: "Product 02 — the core platform",
  title: "Recoverable spend, ready to negotiate.",
  sub: "Connect your purchasing data and DEBUY goes all the way down: from dashboards to drivers to a negotiation brief you can defend in the room.",
  ctaLabel: "Get a free diagnostic on your data",
  ctaHint: "Upload an export, get your first insights in days",
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
};

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

export default function DraftPlatform() {
  return <DraftProductPage product={product} />;
}
