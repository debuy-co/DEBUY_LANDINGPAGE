import { useLang } from "./i18n";

export default function Steps() {
  const { t } = useLang();

  return (
    <section className="steps section" id="how-it-works">
      <div className="container steps-grid">
        <div className="steps-intro">
          <span className="eyebrow">{t.steps.eyebrow}</span>
          <h2>
            {t.steps.titleA}
            <br />
            {t.steps.titleB} <em>{t.steps.titleEm}</em>
          </h2>
          <p>{t.steps.body}</p>
        </div>

        <div className="step-list">
          {t.steps.items.map((s, i) => (
            <div className="step-row" key={s.title}>
              <span className="step-badge step-badge--inline">
                {String(i + 1).padStart(2, "0")}
              </span>
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
