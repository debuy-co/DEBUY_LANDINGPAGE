import { useLang } from "./i18n";

export default function DraftCta() {
  const { t } = useLang();

  return (
    <section className="final-cta section" id="contact">
      <div className="final-cta-bg" aria-hidden="true" />

      <div className="container final-cta-grid">
        <div className="final-cta-content">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow-dot" aria-hidden="true" />
            {t.closing.eyebrow}
          </span>
          <h2>
            {t.closing.titleA} <em>{t.closing.titleEm}</em>
          </h2>
          <p>{t.closing.body}</p>
        </div>

        <div className="final-cta-form">
          <a
            className="btn btn-primary btn-block"
            href="mailto:hello@debuy.co?subject=See%20DEBUY%20in%20action"
          >
            {t.closing.cta} &rarr;
          </a>
          <p className="form-note">
            {t.closing.noteBefore}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              {t.closing.noteLink}
            </a>
            {t.closing.noteAfter}
          </p>
        </div>
      </div>
    </section>
  );
}
