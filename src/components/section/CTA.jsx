import { useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSevFPy5PgcbUXgM2JOw_8QtCfY8tK6HrUerHYqF22wMRqNHqQ/formResponse";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("entry.1637870561", e.target.name.value);
    formData.append("entry.2113702293", e.target.email.value);
    formData.append("entry.1963843016", e.target.company.value);
    formData.append("entry.2024796181", e.target.message.value);

    fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors", // VERY IMPORTANT
      body: formData,
    });

    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section className="final-cta section" id="contact">
      <div className="final-cta-bg" aria-hidden="true" />

      <div className="container final-cta-grid">
        {/* LEFT */}
        <div className="final-cta-content">
          <h2>See how DEBUY fits into your workflows</h2>

          <p>
            Discover how DEBUY helps purchasing and finance teams gain
            visibility on costs, negotiate with confidence, and achieve
            measurable savings — without changing how they work.
          </p>

          <ul className="final-cta-benefits">
            <li>No complex implementation</li>
            <li>Works with your existing data</li>
            <li>Insights in days, not months</li>
            <li>Designed for buyers and finance teams</li>
          </ul>
        </div>

        {/* RIGHT */}

        <div className="final-cta-form">
          {submitted ? (
            <div className="form-success">
              <h3>Thank you!</h3>
              <p>We’ve received your request and will get back to you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full name</label>
                <input name="name" placeholder="Full name" required />
              </div>

              <div className="form-group">
                <label>Work email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Work email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input name="company" placeholder="Company" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="3"
                  name="message"
                  placeholder="Tell us about your needs"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Request a demo
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
