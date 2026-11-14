import Link from "next/link";
import { useLang } from "./i18n";

export default function Products() {
  const { t } = useLang();
  const cards = t.products.cards;

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="products-heading">
          <div>
            <span className="eyebrow">{t.products.eyebrow}</span>
            <h2>
              {t.products.titleA}
              <br />
              {t.products.titleB} <em>{t.products.titleEm}</em>
            </h2>
          </div>
          <p>{t.products.intro}</p>
        </div>

        <div className="feature-grid grid grid-3">
          {cards.map((f) => (
            <article className="feature-cardx" key={f.number}>
              <div className="feature-cardx__top">
                <span>
                  {f.number} / {f.name}
                </span>
                <span className="feature-cardx__icon" aria-hidden="true">
                  {f.icon}
                </span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              <div className="feature-cardx__detail">
                <span aria-hidden="true">✳</span>
                {f.detail}
              </div>
              {f.emailChip && (
                <div className="email-chip">
                  TO: supplier@company.com <span>CC: watch@debuy.co</span>
                </div>
              )}
              <Link className="feature-cardx__link" href={f.href}>
                {t.products.explore} {f.name.toLowerCase()}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
