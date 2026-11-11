import { useState } from "react";

const FAQS = [
  {
    q: "Where is my data stored?",
    a: "In the EU. DEBUY is GDPR-compliant with EU data residency — supplier documents you forward are processed under the same standard.",
  },
  {
    q: "Is the verdict really explainable?",
    a: "Yes. AI extracts the data from the offer; our deterministic engine decides the verdict. No black box: every assumption is listed and yours to check and change.",
  },
  {
    q: "What if a part isn't mapped to an index?",
    a: "We tell you. If a line item can't be benchmarked, the verdict says so explicitly instead of guessing — an honest fallback beats a confident guess.",
  },
  {
    q: "Who sees my supplier's prices?",
    a: "Only you. Offers are analyzed to produce your verdict; supplier data is never shared, resold, or used to train models visible to other customers.",
  },
];

export default function TrustFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="trust section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Trust</span>
          <h2>Selling trust before features</h2>
          <p>
            GDPR-compliant, EU data residency, essential cookies only — no
            tracking, coherent with the product.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div
              className={`faq-item${open === i ? " faq-item--open" : ""}`}
              key={f.q}
            >
              <button
                className="faq-q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {f.q}
                <span aria-hidden="true">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
