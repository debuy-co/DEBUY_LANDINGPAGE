import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSc0Gf2AHXxDoZsFVTGB90vCMj4qkfczJ0blc3dSbOzrnqZlMA/formResponse";

const ENTRY_NAME = "entry.1637870561";
const ENTRY_EMAIL = "entry.2113702293";

export default function DigestLanding() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim()) return "Please enter your work email.";
    if (!/\S+@\S+\.\S+/.test(email))
      return "Please enter a valid email address.";
    if (!privacy) return "Please accept the Privacy Policy to continue.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setLoading(true);

    const body = new URLSearchParams();
    body.append(ENTRY_NAME, name.trim());
    body.append(ENTRY_EMAIL, email.trim());

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="digest-page section">
        <div className="container digest-inner">
          {/* LEFT */}
          <div className="digest-copy">
            <span className="digest-badge">Daily AI Digest</span>
            <h1 className="digest-heading">
              Procurement intel,
              <br />
              every <em>morning</em>.
            </h1>
            <p className="digest-sub">
              One email before 7&nbsp;AM. Commodity prices, supplier risks and
              market shifts — distilled so you can act on them today.
            </p>
            <ul className="digest-bullets">
              <li>AI-curated, 5-min read</li>
              <li>Weekdays at 7 AM sharp</li>
              <li>No spam, ever</li>
              <li>Free, unsubscribe anytime</li>
            </ul>
          </div>

          {/* RIGHT — form card */}
          <div className="digest-card">
            {done ? (
              <div className="digest-success">
                <span className="digest-success__icon">✓</span>
                <h3>You're in.</h3>
                <p>
                  First digest lands tomorrow at 7&nbsp;AM.
                  <br />
                  Whitelist <strong>digest@procureintel.io</strong> so it
                  doesn't end up in spam.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="inp-name">Full name</label>
                  <input
                    id="inp-name"
                    type="text"
                    name="name"
                    placeholder="Marco Rossi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inp-email">Work email</label>
                  <input
                    id="inp-email"
                    type="email"
                    name="email"
                    placeholder="marco@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>

                {error && <p className="digest-error">{error}</p>}

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="digest-spinner" aria-hidden="true" />
                  ) : (
                    "Get the daily digest →"
                  )}
                </button>

                <label className="form-checkbox">
                  <input
                    type="checkbox"
                    checked={privacy}
                    onChange={(e) => setPrivacy(e.target.checked)}
                  />
                  I confirm that I have read the{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>{" "}
                  and consent to the processing of my personal data to receive a
                  response.
                </label>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
