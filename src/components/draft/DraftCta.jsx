export default function DraftCta() {
  return (
    <section className="final-cta section" id="contact">
      <div className="final-cta-bg" aria-hidden="true" />

      <div className="container final-cta-grid">
        <div className="final-cta-content">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow-dot" aria-hidden="true" />
            Your next negotiation starts here
          </span>
          <h2>
            Make your next move <em>with confidence.</em>
          </h2>
          <p>Bring a supplier quote. Leave with a clearer negotiation position.</p>
        </div>

        <div className="final-cta-form">
          <a
            className="btn btn-primary btn-block"
            href="mailto:hello@debuy.co?subject=See%20DEBUY%20in%20action"
          >
            Talk to DEBUY &rarr;
          </a>
          <p className="form-note">
            By continuing you accept our{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            (GDPR). Essential cookies only.
          </p>
        </div>
      </div>
    </section>
  );
}
