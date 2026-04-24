import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function CookiePolicyPage() {
  const lastUpdate = "April 22, 2026";
  const email = "info@debuy.co";

  return (
    <>
      <Header />
      <main className="terms-page">
        <div className="terms-container">
          {/* HEADER */}
          <div className="terms-header">
            <h1>Cookie Policy of Debuy</h1>
            <p className="terms-subtitle">
              Welcome to the cookie policy of Debuy. This policy will help you
              understand what cookies and tracking technologies we use, how we
              use them and what your rights are in relation to it.
            </p>
            <p className="terms-effective">Latest update: {lastUpdate}</p>
          </div>

          {/* TABLE OF CONTENTS */}
          <section className="terms-section">
            <h2>Table of contents</h2>
            <ul>
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#owner">Owner and Data Controller</a>
              </li>
              <li>
                <a href="#trackers">How this Application uses Trackers</a>
              </li>
              <li>
                <a href="#manage">How to manage preferences</a>
              </li>
              <li>
                <a href="#definitions">Definitions and legal references</a>
              </li>
            </ul>
          </section>

          {/* 1 */}
          <section className="terms-section" id="introduction">
            <h2>Introduction</h2>
            <p>
              This document informs Users about the technologies that help this
              Application to achieve the purposes described below. Such
              technologies allow the Owner to access and store information (for
              example by using a Cookie) or use resources (for example by
              running a script) on a User's device as they interact with this
              Application.
            </p>
            <p>
              For simplicity, all such technologies are defined as "Trackers"
              within this document – unless there is a reason to differentiate.
              For example, while Cookies can be used on both web and mobile
              browsers, it would be inaccurate to talk about Cookies in the
              context of mobile apps as they are a browser-based Tracker. For
              this reason, within this document, the term Cookies is only used
              where it is specifically meant to indicate that particular type of
              Tracker.
            </p>
            <p>
              Some of the purposes for which Trackers are used may also require
              the User's consent. Whenever consent is given, it can be freely
              withdrawn at any time following the instructions provided in this
              document.
            </p>
            <p>
              This Application only uses Trackers managed directly by the Owner
              (so-called "first-party" Trackers). The validity and expiration
              periods of first-party Cookies and other similar Trackers may vary
              depending on the lifetime set by the Owner. Some of them expire
              upon termination of the User's browsing session.
            </p>
          </section>

          {/* 2 */}
          <section className="terms-section" id="owner">
            <h2>Owner and Data Controller</h2>
            <p>Debuy</p>
            <p>
              Owner contact email: <a href={`mailto:${email}`}>{email}</a>
            </p>
          </section>

          {/* 3 */}
          <section className="terms-section" id="trackers">
            <h2>How this Application uses Trackers</h2>

            <h3>Necessary</h3>
            <p>
              This Application uses so-called "technical" Cookies and other
              similar Trackers to carry out activities that are strictly
              necessary for the operation or delivery of the Service.
            </p>
          </section>

          {/* 4 */}
          <section className="terms-section" id="manage">
            <h2>How to manage preferences</h2>

            <h3>How to provide or withdraw consent on this Application</h3>
            <p>
              Whenever the use of Trackers is based on consent, users can
              provide or withdraw such consent by setting or updating their
              preferences via the relevant privacy choices panel available on
              this Application.
            </p>

            <h3>How to control or delete Cookies via your device settings</h3>
            <p>Users may use their own browser settings to:</p>
            <ul>
              <li>
                See what Cookies or other similar technologies have been set on
                the device
              </li>
              <li>Block Cookies or similar technologies</li>
              <li>Clear Cookies or similar technologies from the browser</li>
            </ul>
            <p>
              The browser settings, however, do not allow granular control of
              consent by category.
            </p>
            <p>
              Users can find information about how to manage Cookies in the most
              commonly used browsers at the following addresses:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Internet Explorer
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a
                  href="https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brave
                </a>
              </li>
              <li>
                <a
                  href="https://help.opera.com/en/latest/web-preferences/#cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opera
                </a>
              </li>
            </ul>
            <p>
              Users may also manage certain categories of Trackers used on
              mobile apps by opting out through relevant device settings such as
              the device advertising settings for mobile devices, or tracking
              settings in general (Users may open the device settings and look
              for the relevant setting).
            </p>

            <h3>Consequences of denying the use of Trackers</h3>
            <p>
              Users are free to decide whether or not to allow the use of
              Trackers. However, please note that Trackers help this Application
              to provide a better experience and advanced functionalities to
              Users (in line with the purposes outlined in this document).
              Therefore, if the User chooses to block the use of Trackers, the
              Owner may be unable to provide related features.
            </p>
          </section>

          {/* 5 */}
          <section className="terms-section" id="definitions">
            <h2>Definitions and legal references</h2>

            <h3>Personal Data (or Data)</h3>
            <p>
              Any information that directly, indirectly, or in connection with
              other information — including a personal identification number —
              allows for the identification or identifiability of a natural
              person.
            </p>

            <h3>Usage Data</h3>
            <p>
              Information collected automatically through this Application (or
              third-party services employed in this Application), which can
              include: the IP addresses or domain names of the computers
              utilized by the Users who use this Application, the URI addresses
              (Uniform Resource Identifier), the time of the request, the method
              utilized to submit the request to the server, the size of the file
              received in response, the numerical code indicating the status of
              the server's answer (successful outcome, error, etc.), the country
              of origin, the features of the browser and the operating system
              utilized by the User, the various time details per visit (e.g.,
              the time spent on each page within the Application) and the
              details about the path followed within the Application with
              special reference to the sequence of pages visited, and other
              parameters about the device operating system and/or the User's IT
              environment.
            </p>

            <h3>User</h3>
            <p>
              The individual using this Application who, unless otherwise
              specified, coincides with the Data Subject.
            </p>

            <h3>Data Subject</h3>
            <p>The natural person to whom the Personal Data refers.</p>

            <h3>Data Processor (or Processor)</h3>
            <p>
              The natural or legal person, public authority, agency or other
              body which processes Personal Data on behalf of the Controller, as
              described in this privacy policy.
            </p>

            <h3>Data Controller (or Owner)</h3>
            <p>
              The natural or legal person, public authority, agency or other
              body which, alone or jointly with others, determines the purposes
              and means of the processing of Personal Data, including the
              security measures concerning the operation and use of this
              Application. The Data Controller, unless otherwise specified, is
              the Owner of this Application.
            </p>

            <h3>This Application</h3>
            <p>
              The means by which the Personal Data of the User is collected and
              processed.
            </p>

            <h3>Service</h3>
            <p>
              The service provided by this Application as described in the
              relative terms (if available) and on this site/application.
            </p>

            <h3>European Union (or EU)</h3>
            <p>
              Unless otherwise specified, all references made within this
              document to the European Union include all current member states
              to the European Union and the European Economic Area.
            </p>

            <h3>Legal information</h3>
            <p>
              This policy relates solely to this Application, if not stated
              otherwise within this document.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
