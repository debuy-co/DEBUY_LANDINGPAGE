import { useLang } from "./i18n";

/* Copy localizzato dal dizionario i18n; i visual restano qui. */
export function useProduct(index) {
  const { t } = useLang();
  const data = t.detail.products[index];
  const visuals = [<QuoteCheckVisual key="v0" />, <PlatformVisual key="v1" />, <OrderWatchVisual key="v2" />];
  return { ...data, visual: visuals[index] };
}

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
