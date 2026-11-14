import { useLang } from "./i18n";

export default function Thesis() {
  const { t } = useLang();

  return (
    <section className="thesis section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t.thesis.eyebrow}</span>
          <h2>
            {t.thesis.titleA}
            <br />
            {t.thesis.titleB} <em>{t.thesis.titleEm}</em>
          </h2>
          <p>{t.thesis.body}</p>
        </div>
      </div>
    </section>
  );
}
