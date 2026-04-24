import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "debuy_cookie_notice_accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie notice">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__text">
          <span className="cookie-banner__icon">🍪</span>
          <p>
            We use only essential cookies to keep the site working. No tracking,
            no advertising. Read our{" "}
            <Link href="/cookie" className="cookie-banner__link">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <button
          className="cookie-banner__btn"
          onClick={handleAccept}
          aria-label="Accept cookie notice"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
