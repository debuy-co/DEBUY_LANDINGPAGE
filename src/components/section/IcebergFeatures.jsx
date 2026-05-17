import { useState } from "react";

const SECTIONS = [
  {
    id: "surface",
    tag: "Industry standard",
    label: "Common analytics dashboards",
    description:
      "A flat spending overview. Basic charts, standard reports. Useful — but it tells you what happened, not what to do next.",
    features: [],
  },
  {
    id: "analytics",
    tag: "Debuy Analytics",
    label: "Purchasing insights",
    description:
      "Identify exactly who your top suppliers are, where savings are being left on the table, and which parts are driving spend.",
    features: [
      {
        name: "Purchasing Performance Dashboard",
        desc: "Real-time KPIs you can trust",
      },
      {
        name: "Supplier Analysis",
        desc: "Top suppliers and top offenders by savings",
      },
      {
        name: "Parts Analysis",
        desc: "Part-level prices, volumes and trends",
      },
    ],
  },
  {
    id: "intelligence",
    tag: "Debuy Intelligence",
    label: "Negotiation leverage",
    description:
      "Separate market inflation from supplier-driven increases. Identify recoverable spend. Walk into every negotiation knowing exactly what leverage you have.",
    features: [
      {
        name: "Material trend vs Supplier prices",
        desc: "See who's padding margins",
      },
      {
        name: "Volumes vs Supplier prices",
        desc: "Correlate scale with pricing",
      },
      {
        name: "Market trends vs Supplier prices",
        desc: "Benchmark against real commodity data",
      },
      {
        name: "Negotiation ready insights",
        desc: "AI-driven, management-ready actions",
      },
    ],
  },
];

/* (Geometric FeatureMark removed — numbers moved into the icon slot) */

export default function IcebergFeatures() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const go = (idx) => {
    if (idx === active || idx < 0 || idx >= SECTIONS.length) return;
    setActive(idx);
    setAnimKey((k) => k + 1);
  };

  const s = SECTIONS[active];

  return (
    <section
      className="iceberg-section section"
      id="features"
      aria-labelledby="iceberg-title"
    >
      <BlueprintGrid />

      <div className="container">
        <div className="section-header">
          <h2>Explore our Features</h2>
          <p>
            Everything you need to analyze purchasing data and drive better
            negotiation outcomes. Most tools stop at the surface. Debuy goes all
            the way down to negotiation leverage.
          </p>
        </div>

        <div className="iceberg-grid">
          {/* LEFT — iceberg (now larger) */}
          <div className="iceberg-visual">
            <IcebergSVG active={active} onZoneClick={go} />
            <div
              className="iceberg-dots"
              role="tablist"
              aria-label="Depth zones"
            >
              {SECTIONS.map((sec, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={sec.tag}
                  className={`iceberg-dot${i === active ? " iceberg-dot--active" : ""}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — content panel (now more compact) */}
          <div className="iceberg-panel" key={animKey}>
            <p className="iceberg-tag">
              <span className="iceberg-tag__line" aria-hidden="true" />
              {s.tag}
            </p>

            <h3 className="iceberg-heading">{s.label}</h3>

            <p className="iceberg-desc">{s.description}</p>

            {s.features.length > 0 && (
              <div className="iceberg-features">
                {s.features.map((f, i) => (
                  <div
                    className="feature-card iceberg-feature-card"
                    key={i}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <div className="feature-icon">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="iceberg-feature-card__body">
                      <h4>{f.name}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="iceberg-nav">
              <button
                className="iceberg-btn"
                disabled={active === 0}
                onClick={() => go(active - 1)}
              >
                ↑ Surface
              </button>
              <button
                className={`iceberg-btn${active < SECTIONS.length - 1 ? " iceberg-btn--primary" : ""}`}
                disabled={active === SECTIONS.length - 1}
                onClick={() => go(active + 1)}
              >
                ↓ Go deeper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Blueprint grid ─────────────────────────────────────────────────────── */
function BlueprintGrid() {
  return (
    <svg
      className="iceberg-grid-bg"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="bp-sm"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="#0d6efd"
            strokeWidth="0.4"
          />
        </pattern>
        <pattern
          id="bp-lg"
          width="160"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          <rect width="160" height="160" fill="url(#bp-sm)" />
          <path
            d="M 160 0 L 0 0 0 160"
            fill="none"
            stroke="#0d6efd"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bp-lg)" />
    </svg>
  );
}

/* ─── Iceberg SVG — enlarged ─────────────────────────────────────────────── */
function IcebergSVG({ active, onZoneClick }) {
  // Scaled up from 360x520 to 520x720 (proportionally)
  const W = 520,
    H = 720;
  const wY = 246;

  const tip = [W / 2, 48];
  const wL = [W / 2 - 98, wY];
  const wR = [W / 2 + 98, wY];
  const mL = [W / 2 - 182, wY + 196];
  const mR = [W / 2 + 182, wY + 196];
  const bL = [W / 2 - 127, H - 36];
  const bR = [W / 2 + 127, H - 36];

  const pt = (p) => p.join(",");

  const facets = [
    [tip, [W / 2 - 40, wY - 58]],
    [tip, [W / 2 + 26, wY - 78]],
    [
      [W / 2 - 40, wY - 58],
      [W / 2 + 26, wY - 78],
    ],
    [[W / 2 - 40, wY - 58], wL],
    [[W / 2 + 26, wY - 78], wR],
  ];
  const uFacets = [
    [wL, [W / 2 - 58, wY + 116]],
    [wR, [W / 2 + 78, wY + 90]],
    [
      [W / 2 - 58, wY + 116],
      [W / 2 + 78, wY + 90],
    ],
    [[W / 2 - 58, wY + 116], mL],
    [[W / 2 + 78, wY + 90], mR],
    [mL, [W / 2 - 43, wY + 328]],
    [mR, [W / 2 + 60, wY + 300]],
    [
      [W / 2 - 43, wY + 328],
      [W / 2 + 60, wY + 300],
    ],
  ];

  const ACCENT = "#0d6efd";

  const aStroke = (z) => (z === active ? ACCENT : "rgba(13,110,253,0.28)");
  const aWidth = (z) => (z === active ? 1.8 : 1);

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Interactive iceberg diagram showing procurement depth"
    >
      <defs>
        <linearGradient id="waterG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1f3c" />
          <stop offset="100%" stopColor="#030d1c" />
        </linearGradient>
        <linearGradient id="iceTopG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="iceZ1G" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.52" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="iceZ2G" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.44" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.32" />
        </linearGradient>
        <filter id="iceglow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ocean */}
      <rect x={0} y={wY} width={W} height={H - wY} fill="url(#waterG)" />
      {[26, 60, 100, 150, 208, 274, 346, 424].map((dy, i) => (
        <line
          key={i}
          x1={12}
          y1={wY + dy}
          x2={W - 12}
          y2={wY + dy}
          stroke="#1d4ed8"
          strokeWidth={0.4}
          opacity={Math.max(0, 0.13 - i * 0.01)}
        />
      ))}

      {/* zone 0 — peak */}
      <polygon
        points={`${pt(tip)} ${pt(wL)} ${pt(wR)}`}
        fill="url(#iceTopG)"
        stroke={aStroke(0)}
        strokeWidth={aWidth(0)}
        style={{
          cursor: "pointer",
          transition: "stroke .3s, stroke-width .3s",
        }}
        onClick={() => onZoneClick(0)}
      />
      {active === 0 && (
        <polygon
          points={`${pt(tip)} ${pt(wL)} ${pt(wR)}`}
          fill="none"
          stroke={ACCENT}
          strokeWidth={3}
          opacity={0.28}
          filter="url(#iceglow)"
        />
      )}
      {facets.map(([a, b], i) => (
        <line
          key={i}
          x1={a[0]}
          y1={a[1]}
          x2={b[0]}
          y2={b[1]}
          stroke="rgba(255,255,255,0.26)"
          strokeWidth={0.6}
        />
      ))}
      <line
        x1={tip[0]}
        y1={tip[1]}
        x2={wL[0]}
        y2={wL[1]}
        stroke="rgba(255,255,255,0.48)"
        strokeWidth={1.1}
      />

      {/* zone 1 — analytics */}
      <polygon
        points={`${pt(wL)} ${pt(wR)} ${pt(mR)} ${pt(mL)}`}
        fill="url(#iceZ1G)"
        stroke={aStroke(1)}
        strokeWidth={aWidth(1)}
        style={{
          cursor: "pointer",
          transition: "stroke .3s, stroke-width .3s",
        }}
        onClick={() => onZoneClick(1)}
      />
      {active === 1 && (
        <polygon
          points={`${pt(wL)} ${pt(wR)} ${pt(mR)} ${pt(mL)}`}
          fill="none"
          stroke={ACCENT}
          strokeWidth={3}
          opacity={0.26}
          filter="url(#iceglow)"
        />
      )}
      {uFacets.slice(0, 5).map(([a, b], i) => (
        <line
          key={i}
          x1={a[0]}
          y1={a[1]}
          x2={b[0]}
          y2={b[1]}
          stroke="rgba(13,110,253,0.16)"
          strokeWidth={0.6}
        />
      ))}

      {/* separator */}
      <line
        x1={mL[0]}
        y1={mL[1]}
        x2={mR[0]}
        y2={mR[1]}
        stroke="rgba(13,110,253,0.38)"
        strokeWidth={1}
        strokeDasharray="8 6"
      />

      {/* zone 2 — intelligence */}
      <polygon
        points={`${pt(mL)} ${pt(mR)} ${pt(bR)} ${pt(bL)}`}
        fill="url(#iceZ2G)"
        stroke={aStroke(2)}
        strokeWidth={aWidth(2)}
        style={{
          cursor: "pointer",
          transition: "stroke .3s, stroke-width .3s",
        }}
        onClick={() => onZoneClick(2)}
      />
      {active === 2 && (
        <polygon
          points={`${pt(mL)} ${pt(mR)} ${pt(bR)} ${pt(bL)}`}
          fill="none"
          stroke={ACCENT}
          strokeWidth={3}
          opacity={0.24}
          filter="url(#iceglow)"
        />
      )}
      {uFacets.slice(5).map(([a, b], i) => (
        <line
          key={i}
          x1={a[0]}
          y1={a[1]}
          x2={b[0]}
          y2={b[1]}
          stroke="rgba(13,110,253,0.11)"
          strokeWidth={0.6}
        />
      ))}

      {/* waterline */}
      <line
        x1={0}
        y1={wY}
        x2={W}
        y2={wY}
        stroke={ACCENT}
        strokeWidth={1.2}
        strokeDasharray="10 6"
        opacity={0.42}
      />
      {[12, 28, 48].map((dy, i) => (
        <line
          key={i}
          x1={W / 2 - 74 + i * 20}
          y1={wY + dy}
          x2={W / 2 + 74 - i * 20}
          y2={wY + dy}
          stroke="#6ea8fe"
          strokeWidth={0.8}
          opacity={0.16 - i * 0.04}
        />
      ))}

      {/* SVG labels — scaled up. Zone 0 sits well above the tip; zones 1-2 are centered inside their underwater body */}
      {[
        {
          // Zone 0 — placed well above the iceberg tip, fully outside the shape
          y: 22,
          text: "COMMON DASHBOARDS",
          sub: "flat spend overview",
          z: 0,
        },
        {
          y: wY + 94,
          text: "DEBUY ANALYTICS",
          sub: "suppliers · parts · KPIs",
          z: 1,
        },
        {
          y: wY + 280,
          text: "DEBUY INTELLIGENCE",
          sub: "negotiation leverage",
          z: 2,
        },
      ].map(({ y, text, sub, z }) => (
        <g key={z}>
          <text
            x={W / 2}
            y={y}
            textAnchor="middle"
            fontSize={14}
            fontWeight={700}
            fontFamily="Inter, sans-serif"
            fill={
              active === z
                ? "#ffffff"
                : z === 0
                  ? "#6b7280"
                  : "rgba(13,110,253,0.45)"
            }
            style={{ transition: "fill .3s" }}
          >
            {text}
          </text>
          <text
            x={W / 2}
            y={y + 20}
            textAnchor="middle"
            fontSize={11}
            fontFamily="Inter, sans-serif"
            fill={active === z ? "#adb5bd" : "#374151"}
            style={{ transition: "fill .3s" }}
          >
            {sub}
          </text>
        </g>
      ))}

      <text
        x={12}
        y={wY - 7}
        fontSize={10}
        fontFamily="Inter, sans-serif"
        fill={ACCENT}
        opacity={0.45}
      >
        waterline
      </text>

      {/* depth ruler */}
      <line
        x1={W - 18}
        y1={wY}
        x2={W - 18}
        y2={H - 38}
        stroke="rgba(13,110,253,0.16)"
        strokeWidth={0.9}
      />
      {[
        [wY, "0m"],
        [wY + 98, "-14m"],
        [wY + 196, "-28m"],
        [wY + 372, "-52m"],
      ].map(([y, lbl], i) => (
        <g key={i}>
          <line
            x1={W - 24}
            y1={y}
            x2={W - 14}
            y2={y}
            stroke="rgba(13,110,253,0.26)"
            strokeWidth={0.8}
          />
          <text
            x={W - 11}
            y={+y + 4}
            fontSize={9}
            fontFamily="Inter, sans-serif"
            fill="rgba(13,110,253,0.36)"
          >
            {lbl}
          </text>
        </g>
      ))}

      {/* active bracket — points to the relevant label area */}
      {active === 0 && <Bracket x={W / 2 - 110} y={12} />}
      {active === 1 && <Bracket x={wL[0] - 26} y={wY + 12} />}
      {active === 2 && <Bracket x={mL[0] - 26} y={mL[1] + 12} />}
    </svg>
  );
}

function Bracket({ x, y }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <polyline
        points="16,0 0,0 0,16"
        fill="none"
        stroke="#0d6efd"
        strokeWidth={1.5}
        opacity={0.6}
      />
    </g>
  );
}
