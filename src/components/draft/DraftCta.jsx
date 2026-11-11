import EmailCapture from "./EmailCapture";

export default function DraftCta() {
  return (
    <section className="final-cta section" id="contact">
      <div className="final-cta-bg" aria-hidden="true" />

      <div className="container final-cta-grid">
        <div className="final-cta-content">
          <h2>Forward an offer. Watch the verdict.</h2>
          <p>
            The fastest way to try DEBUY is also the product: send a supplier
            offer and get a defensible verdict in minutes — before any
            registration or data onboarding.
          </p>
          <ul className="final-cta-benefits">
            <li>Verdict in minutes, not meetings</li>
            <li>No integration required</li>
            <li>Every assumption traceable</li>
            <li>Free for your first quote</li>
          </ul>
        </div>

        <div className="final-cta-form">
          <EmailCapture
            placeholder="Work email"
            buttonLabel="Check your first quote free"
          />
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
