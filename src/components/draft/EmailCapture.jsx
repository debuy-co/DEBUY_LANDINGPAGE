import { useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSevFPy5PgcbUXgM2JOw_8QtCfY8tK6HrUerHYqF22wMRqNHqQ/formResponse";

export default function EmailCapture({
  placeholder = "Work email",
  buttonLabel = "Check your first quote free",
  compact = false,
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("entry.2113702293", e.target.email.value);
    formData.append("entry.1963843016", e.target.company?.value || "");

    fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setSubmitted(true);
    e.target.reset();
  };

  if (submitted) {
    return (
      <div className="capture-success" role="status">
        <strong>You&apos;re in.</strong> Forward a supplier offer and the verdict
        lands in your inbox in minutes.
      </div>
    );
  }

  return (
    <form className={`capture-form${compact ? " capture-form--compact" : ""}`} onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        required
        placeholder={placeholder}
        aria-label="Work email"
      />
      {!compact && (
        <input
          name="company"
          type="text"
          placeholder="Company (optional)"
          aria-label="Company"
        />
      )}
      <button type="submit" className="btn btn-primary">
        {buttonLabel}
      </button>
    </form>
  );
}
