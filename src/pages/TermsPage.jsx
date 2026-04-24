import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  const effectiveDate = "1 June 2025";
  const email = "info@debuy.co";
  const domain = "app.debuy.co";
  const city = "London, United Kingdom";
  return (
    <>
      <Header />
      <main className="terms-page">
        <div className="terms-container">
          {/* HEADER */}
          <div className="terms-header">
            <h1>Terms and Conditions of Service</h1>
            <p className="terms-subtitle">
              {domain} — Business users only (B2B)
            </p>
            <p className="terms-effective">Effective date: {effectiveDate}</p>
          </div>

          {/* 1 */}
          <section className="terms-section">
            <h2>1. Introduction and acceptance</h2>
            <p>
              These Terms and Conditions ("Terms") govern access to and use of
              the Debuy SaaS platform available at <strong>{domain}</strong>{" "}
              ("Service"), provided by Debuy, registered in {city}.
            </p>
            <p>
              The Service is intended exclusively for business users (B2B) —
              legal entities, professionals and commercial operators. Use of the
              Service implies full acceptance of these Terms. If you do not
              accept the Terms, you must immediately cease using the Service.
            </p>
          </section>

          {/* 2 */}
          <section className="terms-section">
            <h2>2. Description of the Service</h2>
            <p>
              Debuy is a SaaS platform that allows companies to upload data
              files (e.g. Excel files), process them through proprietary
              algorithms, and display Purchase Price Index (PPI) analyses,
              procurement KPIs, supplier trends and component analyses.
            </p>
            <p>The Service includes:</p>
            <ul>
              <li>Uploading and processing of business data files</li>
              <li>Calculation and display of KPIs and PPI indices</li>
              <li>Supplier and component trend analysis</li>
              <li>Interactive dashboard for each tenant (customer company)</li>
            </ul>
            <p>
              Each customer has an isolated environment. One customer's data is
              never accessible to other customers.
            </p>
          </section>

          {/* 3 */}
          <section className="terms-section">
            <h2>3. Account registration</h2>
            <p>
              Access to the Service requires registration of a business account.
              The user is responsible for:
            </p>
            <ul>
              <li>
                Providing truthful and up-to-date information during
                registration
              </li>
              <li>Maintaining the confidentiality of access credentials</li>
              <li>All activities carried out through their account</li>
            </ul>
            <p>
              In the event of unauthorised use of the account, the user must
              immediately notify <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </section>

          {/* 4 */}
          <section className="terms-section">
            <h2>4. Subscription and payments</h2>
            <p>
              The Service is available through monthly or annual subscription.
              Prices are indicated on the pricing page at{" "}
              <strong>{domain}</strong> and may be updated with 30 days' notice.
            </p>
            <p>
              Payment is made in advance. In the event of non-payment, Debuy
              reserves the right to suspend or terminate access to the Service.
            </p>
            <p>
              Purchasing process: the user selects a plan, enters payment
              details and confirms the order. The subscription renews
              automatically at expiry, unless cancelled.
            </p>
          </section>

          {/* 5 */}
          <section className="terms-section">
            <h2>5. Refund policy</h2>
            <p>
              Since the Service is aimed exclusively at business users (B2B),
              the right of withdrawal provided for consumers under European
              regulations does not apply.
            </p>
            <p>
              No refunds are provided for subscriptions already commenced. In
              the event of technical issues attributable to Debuy, we will
              evaluate on a case-by-case basis the extension of the subscription
              period. For any requests, contact{" "}
              <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </section>

          {/* 6 */}
          <section className="terms-section">
            <h2>6. Content rights</h2>
            <p>
              Data uploaded by the user remains the exclusive property of the
              user. Debuy does not claim any rights over uploaded business data.
            </p>
            <p>
              Debuy grants the user a limited, non-exclusive and
              non-transferable licence to use the Service in accordance with
              these Terms. All rights to the platform, algorithms, source code
              and Debuy materials are reserved.
            </p>
          </section>

          {/* 7 */}
          <section className="terms-section">
            <h2>7. Acceptable use</h2>
            <p>The user agrees not to use the Service to:</p>
            <ul>
              <li>Violate applicable laws or regulations</li>
              <li>
                Upload unlawful, harmful content or content that violates
                third-party rights
              </li>
              <li>Attempt to access other customers' data</li>
              <li>Perform reverse engineering of the platform</li>
              <li>Intentionally overload the systems of Debuy</li>
              <li>
                Resell or sublicense access to the Service to third parties
              </li>
            </ul>
            <p>
              Debuy reserves the right to suspend or terminate the account in
              case of violation of these rules, without obligation to refund.
            </p>
          </section>

          {/* 8 */}
          <section className="terms-section">
            <h2>8. API</h2>
            <p>
              Any API access is subject to these Terms. Debuy does not guarantee
              continuous availability of APIs and is not responsible for
              interruptions or changes to them. Excessive use of APIs may be
              limited without notice.
            </p>
          </section>

          {/* 9 */}
          <section className="terms-section">
            <h2>9. Limitation of liability</h2>
            <p>
              The Service is provided "as is". Debuy does not warrant that the
              Service will be error-free or uninterrupted.
            </p>
            <p>Debuy is not responsible for:</p>
            <ul>
              <li>
                Business decisions made based on analyses provided by the
                Service
              </li>
              <li>Data loss caused by events outside Debuy's control</li>
              <li>Indirect, consequential damages or loss of profits</li>
            </ul>
            <p>
              To the extent permitted by applicable law, Debuy's total liability
              shall not exceed the amount paid by the user in the last 3 months.
            </p>
          </section>

          {/* 10 */}
          <section className="terms-section">
            <h2>10. Privacy and data protection</h2>
            <p>
              The processing of personal data is governed by the Privacy Policy
              available at{" "}
              <a href={`https://${domain}/privacy`}>{domain}/privacy</a>. For
              business customers, a Data Processing Agreement (DPA) is available
              on request at <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </section>

          {/* 11 */}
          <section className="terms-section">
            <h2>11. Changes to the Terms</h2>
            <p>
              Debuy reserves the right to amend these Terms. Changes will be
              notified by email with at least 30 days' notice. Continued use of
              the Service after that period constitutes acceptance of the new
              Terms.
            </p>
          </section>

          {/* 12 */}
          <section className="terms-section">
            <h2>12. Governing law and jurisdiction</h2>
            <p>
              These Terms are governed by the laws of the United Kingdom. For
              any dispute, the parties undertake to attempt an amicable
              resolution by contacting <a href={`mailto:${email}`}>{email}</a>.
              If no agreement is reached, the competent court shall be that of{" "}
              {city}.
            </p>
            <p>
              Severability: if any provision of these Terms is found to be
              invalid or unenforceable, the remaining provisions shall remain in
              full force and effect.
            </p>
          </section>

          {/* 13 */}
          <section className="terms-section">
            <h2>13. Contact</h2>
            <p>
              For any questions regarding these Terms:{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>Debuy — {city}</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
