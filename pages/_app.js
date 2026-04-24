// _app.js è il wrapper globale che Next.js applica automaticamente
// a OGNI pagina del sito. Non lo importi mai tu — lo usa Next.js.

// Flusso invisibile:
// utente visita /features
//   → Next.js chiama _app.js con Component = FeaturesPage
//   → _app.js renderizza <FeaturesPage {...pageProps} />

// ─────────────────────────────────────────
// Il tuo _app.js attuale — corretto così com'è
// ─────────────────────────────────────────
import CookieBanner from "../src/components/Cookiebanner";
import "../src/styles/main.scss"; // ← CSS globale caricato su TUTTE le pagine

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
  // Component = la pagina corrente (index.js, features.js, about.js...)
  // pageProps = eventuali dati passati alla pagina
}
