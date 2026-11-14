import { createContext, useContext, useEffect, useState } from "react";

export const STRINGS = {
  en: {
    nav: {
      platform: "Platform",
      how: "How it works",
      about: "About",
      cta: "Talk to us",
      quoteCheck: "Quote Check",
      orderWatch: "Order Watch",
    },
    hero: {
      eyebrow: "Negotiation intelligence for European manufacturers",
      titleA: "Make every supplier negotiation",
      titleEm: "count.",
      lede: "DEBUY turns every supplier price movement into an explainable negotiation position — and every order outcome into leverage for the next negotiation.",
      ctaPrimary: "See DEBUY in action",
      ctaSecondary: "Explore the platform",
      proof: "Built around the data you already have.",
      proofStrong: "Transparent by design. Buyer-controlled.",
    },
    thesis: {
      eyebrow: "A better way to buy",
      titleA: "From purchasing data",
      titleB: "to",
      titleEm: "negotiation leverage.",
      body: "DEBUY gives buyers the clarity to understand a supplier's price, the confidence to challenge it, and the evidence to make every next conversation stronger.",
    },
    products: {
      eyebrow: "The DEBUY platform",
      titleA: "One negotiation cycle.",
      titleEm: "build leverage.",
      titleB: "Three ways to",
      intro:
        "Find opportunities in purchasing data. Prepare the negotiation. Carry supplier performance into the next one.",
      cards: [
        {
          number: "01",
          name: "RECOVERY SPEND",
          title: "Find the value in your purchasing data.",
          description:
            "DEBUY analyzes the purchasing data you already have to surface supplier price movements and potential recovery opportunities. See what changed and understand the drivers — materials, FX, and volume.",
          detail: "Get a defensible negotiation brief and ready-to-use talk track in days.",
          icon: "✳",
          href: "/platform",
        },
        {
          number: "02",
          name: "QUOTE CHECK",
          title: "Know what to challenge.",
          description:
            "Forward a supplier quote as a PDF, spreadsheet, or email. DEBUY breaks down the price drivers — such as materials, FX, and volume — and prepares a clear negotiation brief with a ready-to-use talk track.",
          detail: "Every assumption is visible and editable by your team.",
          icon: "↗",
          href: "/quote-check",
        },
        {
          number: "03",
          name: "ORDER WATCH",
          title: "Make supplier performance count.",
          description:
            "CC watch@debuy.co on a purchase order. DEBUY follows confirmations, shipments, deliveries, and invoices, flags delays and discrepancies, and prepares follow-ups when needed.",
          detail: "Turn what happens after the order into evidence for your next negotiation.",
          icon: "◎",
          href: "/order-watch",
          emailChip: true,
        },
      ],
      explore: "Explore",
    },
    steps: {
      eyebrow: "Simple by design",
      titleA: "Good decisions start",
      titleEm: "what you know.",
      titleB: "with",
      body: "No black box. No long implementation. Just a clearer next step from the data and workflows you already use.",
      items: [
        {
          title: "Bring what you already have",
          body: "Supplier quotes, purchasing data, and order emails. Start with familiar files and workflows.",
        },
        {
          title: "See the drivers and the facts",
          body: "Understand what changed in a price and what happened after an order was placed.",
        },
        {
          title: "Go into the conversation prepared",
          body: "Give your buyers an explainable position, supporting evidence, and words to use.",
        },
      ],
    },
    closing: {
      eyebrow: "Your next negotiation starts here",
      titleA: "Make your next move",
      titleEm: "with confidence.",
      body: "Bring a supplier quote. Leave with a clearer negotiation position.",
      cta: "Talk to DEBUY",
    },
    detail: {
      back: "← Back to DEBUY",
      problem: "The problem",
      how: "How it works",
      objections: "Objections, answered",
      start: "Start with your data",
      getStarted: "Get started",
      quoteCheckVisual: "QUOTE ANALYSIS",
      products: [
        {
          eyebrow: "Product 01 — email in, verdict out",
          title: "Forward the offer. Get the verdict.",
          sub: "DEBUY decomposes the price into material, FX and volume drivers, benchmarks it against market indices, and replies with the negotiation brief. No black box — every assumption is yours to check.",
          ctaLabel: "Check your first quote free",
          ctaHint: "Forward a supplier offer, get the verdict in minutes",
          problem:
            "A price increase lands and you don't know how much of it is market, how much is the supplier. You negotiate with guesses.",
          steps: [
            { title: "Forward the offer", desc: "Send the supplier's quote or PDF to the Quote Check address. No account, no integration." },
            { title: "We decompose the price", desc: "Material indexes, FX and volume effects are separated from the supplier's own margin." },
            { title: "You get the verdict", desc: "Expected range, driver breakdown and a ready-to-use talk track land in your inbox in minutes." },
          ],
          objections: [
            { q: "Is my supplier's pricing confidential?", a: "Yes. Offers are processed only to produce your verdict — never shared or used across customers. EU data residency, GDPR-compliant." },
            { q: "What if a line item can't be benchmarked?", a: "The verdict says so explicitly. An honest fallback beats a confident guess — you'll never get an unexplained number." },
            { q: "Do I need to connect my ERP first?", a: "No. Quote Check works on the document alone. Connecting your data later unlocks portfolio-level intelligence." },
          ],
        },
        {
          eyebrow: "Product 02 — the core platform",
          title: "Recoverable spend, ready to negotiate.",
          sub: "Connect your purchasing data and DEBUY goes all the way down: from dashboards to drivers to a negotiation brief you can defend in the room.",
          ctaLabel: "Get a free diagnostic on your data",
          ctaHint: "Upload an export, get your first insights in days",
          problem:
            "Analytics flatten material, FX and volume into one line. You know what you spend — not what you should pay.",
          steps: [
            { title: "Connect", desc: "ERP exports or Excel files. No complex integration project." },
            { title: "Automatic analysis", desc: "Inflation, performance indexes and supplier trends are calculated automatically." },
            { title: "Act", desc: "Recoverable spend and negotiation briefs turn analysis into savings." },
          ],
          objections: [
            { q: "How is this different from spend analytics?", a: "Analytics tells you what happened. DEBUY tells you what to do next — with the benchmark and the words to use." },
            { q: "Is the AI a black box?", a: "No. AI extracts, our deterministic engine decides. Every verdict traces back to a driver you can verify and change." },
            { q: "How fast is implementation?", a: "Insights in days, not months — on your existing exports, without changing how your team works." },
          ],
        },
        {
          eyebrow: "Product 03 — orders on autopilot",
          title: "CC the assistant. Never chase a confirmation again.",
          sub: "Order Watch follows every open order: milestones, discrepancies and a weekly digest, so nothing slips through the cracks.",
          ctaLabel: "Watch my first order free",
          ctaHint: "CC the assistant on a PO thread and get the digest",
          problem:
            "Orders slip silently: confirmations chased over email, dates that move and nobody notices until it's too late.",
          steps: [
            { title: "CC the assistant", desc: "Add the Order Watch address to any PO email thread. That's the whole setup." },
            { title: "Milestones tracked", desc: "Confirmation, production, shipment and delivery dates are monitored automatically." },
            { title: "Discrepancies & weekly digest", desc: "Get alerted when reality diverges from the order — and a digest of everything open." },
          ],
          objections: [
            { q: "Does it replace my ERP?", a: "No. It sits on top of your email and orders, catching what systems miss — no migration, no new tool for suppliers to learn." },
            { q: "What happens when a date slips?", a: "You get an alert with the discrepancy and the context, not just a red flag." },
            { q: "Who else sees the thread?", a: "Only people you CC. Order data stays within your workspace, EU-hosted." },
          ],
        },
      ],
    },
  },

  it: {
    nav: {
      platform: "Piattaforma",
      how: "Come funziona",
      about: "About",
      cta: "Parliamone",
      quoteCheck: "Quote Check",
      orderWatch: "Order Watch",
    },
    hero: {
      eyebrow: "Intelligence di negoziazione per i produttori europei",
      titleA: "Rendi ogni negoziazione con i fornitori",
      titleEm: "rilevante.",
      lede: "DEBUY trasforma ogni movimento dei prezzi dei fornitori in una posizione di negoziazione spiegabile — e ogni esito dell'ordine in leva per la prossima negoziazione.",
      ctaPrimary: "Vedi DEBUY in azione",
      ctaSecondary: "Esplora la piattaforma",
      proof: "Costruito sui dati che hai già.",
      proofStrong: "Trasparente by design. Sotto il controllo del buyer.",
    },
    thesis: {
      eyebrow: "Un modo migliore di acquistare",
      titleA: "Dai dati di acquisto",
      titleB: "alla",
      titleEm: "leva negoziale.",
      body: "DEBUY dà ai buyer la chiarezza per capire il prezzo di un fornitore, il coraggio per contestarlo e le prove per rendere ogni conversazione successiva più forte.",
    },
    products: {
      eyebrow: "La piattaforma DEBUY",
      titleA: "Un ciclo di negoziazione.",
      titleB: "Tre modi per",
      titleEm: "creare leva.",
      intro:
        "Trova le opportunità nei dati di acquisto. Prepara la negoziazione. Porta le performance dei fornitori nella successiva.",
      cards: [
        {
          number: "01",
          name: "RECOVERY SPEND",
          title: "Trova il valore nei tuoi dati di acquisto.",
          description:
            "DEBUY analizza i dati di acquisto che hai già per far emergere i movimenti dei prezzi dei fornitori e le opportunità di recupero. Vedi cosa è cambiato e comprendi i driver — materiali, FX e volumi.",
          detail: "Brief di negoziazione difendibile e talk track pronta in pochi giorni.",
          icon: "✳",
          href: "/platform",
        },
        {
          number: "02",
          name: "QUOTE CHECK",
          title: "Sai cosa contestare.",
          description:
            "Inoltra un preventivo del fornitore in PDF, foglio di calcolo o email. DEBUY scompone i driver di prezzo — materiali, FX, volumi — e prepara un brief di negoziazione chiaro con una talk track pronta all'uso.",
          detail: "Ogni assunzione è visibile e modificabile dal tuo team.",
          icon: "↗",
          href: "/quote-check",
        },
        {
          number: "03",
          name: "ORDER WATCH",
          title: "Fai pesare le performance dei fornitori.",
          description:
            "Metti in CC watch@debuy.co su un ordine di acquisto. DEBUY segue conferme, spedizioni, consegne e fatture, segnala ritardi e anomalie e prepara i follow-up quando serve.",
          detail: "Trasforma ciò che succede dopo l'ordine in prove per la prossima negoziazione.",
          icon: "◎",
          href: "/order-watch",
          emailChip: true,
        },
      ],
      explore: "Esplora",
    },
    steps: {
      eyebrow: "Semplice by design",
      titleA: "Le buone decisioni partono",
      titleB: "da",
      titleEm: "ciò che sai.",
      body: "Niente black box. Niente implementazioni lunghe. Solo un passo successivo più chiaro, dai dati e dai flussi che usi già.",
      items: [
        {
          title: "Porta ciò che hai già",
          body: "Preventivi dei fornitori, dati di acquisto, email degli ordini. Inizia da file e flussi familiari.",
        },
        {
          title: "Vedi i driver e i fatti",
          body: "Capisci cosa è cambiato in un prezzo e cosa è successo dopo che un ordine è stato effetuato.",
        },
        {
          title: "Entra in conversazione preparato",
          body: "Dai ai tuoi buyer una posizione spiegabile, le prove a supporto e le parole da usare.",
        },
      ],
    },
    closing: {
      eyebrow: "La tua prossima negoziazione inizia qui",
      titleA: "Fai la tua prossima mossa",
      titleEm: "con fiducia.",
      body: "Porta un preventivo di un fornitore. Esci con una posizione di negoziazione più chiara.",
      cta: "Parla con DEBUY",
    },
    detail: {
      back: "← Torna a DEBUY",
      problem: "Il problema",
      how: "Come funziona",
      objections: "Obiezioni, risposte",
      start: "Inizia dai tuoi dati",
      getStarted: "Inizia ora",
      quoteCheckVisual: "ANALISI DEL PREVENTIVO",
      products: [
        {
          eyebrow: "Prodotto 01 — email in, verdict out",
          title: "Inoltra l'offerta. Ottieni il verdict.",
          sub: "DEBUY scompone il prezzo in driver di materiale, FX e volume, lo confronta con gli indici di mercato e risponde con il brief di negoziazione. Niente black box — ogni assunzione è tua da verificare.",
          ctaLabel: "Controlla gratis il tuo primo preventivo",
          ctaHint: "Inoltra un'offerta di un fornitore, ricevi il verdict in pochi minuti",
          problem:
            "Arriva un aumento di prezzo e non sai quanto è di mercato e quanto è del fornitore. Negozi a intuizione.",
          steps: [
            { title: "Inoltra l'offerta", desc: "Invia il preventivo o il PDF del fornitore all'indirizzo di Quote Check. Nessun account, nessuna integrazione." },
            { title: "Scomponiamo il prezzo", desc: "Indici dei materiali, effetti FX e volumi vengono separati dal margine del fornitore." },
            { title: "Ricevi il verdict", desc: "Range atteso, scomposizione dei driver e talk track pronta arrivano nella tua inbox in pochi minuti." },
          ],
          objections: [
            { q: "I prezzi del mio fornitore sono confidenziali?", a: "Sì. Le offerte sono trattate solo per produrre il tuo verdict — mai condivise né usate tra clienti. Residency dei dati in UE, conforme al GDPR." },
            { q: "E se una voce non è confrontabile?", a: "Il verdict lo dice esplicitamente. Un fallback onesto batte un indovinare sicuro — non riceverai mai un numero inspiegato." },
            { q: "Devo collegare prima il mio ERP?", a: "No. Quote Check funziona solo sul documento. Collegare i dati in seguito sblocca l'intelligence a livello di portafoglio." },
          ],
        },
        {
          eyebrow: "Prodotto 02 — la piattaforma core",
          title: "Spend recuperabile, pronto da negoziare.",
          sub: "Collega i tuoi dati di acquisto e DEBUY va fino in fondo: dalle dashboard ai driver, fino a un brief di negoziazione che puoi difendere nella stanza.",
          ctaLabel: "Diagnostic gratuito sui tuoi dati",
          ctaHint: "Carica un export, primi insight in pochi giorni",
          problem:
            "L'analytics appiattisce materiali, FX e volumi in una sola riga. Sai quanto spendi — non quanto dovresti pagare.",
          steps: [
            { title: "Collega", desc: "Export ERP o file Excel. Nessun progetto di integrazione complesso." },
            { title: "Analisi automatica", desc: "Inflazione, indici di performance e trend dei fornitori calcolati automaticamente." },
            { title: "Agisci", desc: "Spend recuperabile e brief di negoziazione trasformano l'analisi in risparmi." },
          ],
          objections: [
            { q: "Come si differenzia dalla spend analytics?", a: "L'analytics ti dice cosa è successo. DEBUY ti dice cosa fare dopo — con il benchmark e le parole da usare." },
            { q: "L'AI è una black box?", a: "No. L'AI estrae, il nostro motore deterministico decide. Ogni verdict è tracciabile fino a un driver verificabile." },
            { q: "Quanto è veloce l'implementazione?", a: "Insight in giorni, non mesi — sui tuoi export esistenti, senza cambiare il modo di lavorare del team." },
          ],
        },
        {
          eyebrow: "Prodotto 03 — ordini in autopilot",
          title: "CC l'assistente. Niente più conferme inseguite.",
          sub: "Order Watch segue ogni ordine aperto: milestone, anomalie e digest settimanale, così nulla sfugge.",
          ctaLabel: "Guarda gratis il mio primo ordine",
          ctaHint: "CC l'assistente su un thread PO e ricevi il digest",
          problem:
            "Gli ordini slittano in silenzio: conferme inseguite via email, date che si spostano e nessuno se ne accorge finché non è tardi.",
          steps: [
            { title: "CC l'assistente", desc: "Aggiungi l'indirizzo di Order Watch a qualsiasi thread email di un PO. Questa è tutta la configurazione." },
            { title: "Milestone tracciate", desc: "Conferma, produzione, spedizione e consegna monitorate automaticamente." },
            { title: "Anomalie e digest settimanale", desc: "Avviso quando la realtà diverge dall'ordine — e un riepilogo di tutto ciò che è aperto." },
          ],
          objections: [
            { q: "Sostituisce il mio ERP?", a: "No. Si appoggia sopra email e ordini, coglie ciò che i sistemi perdono — nessuna migrazione, nessuno strumento nuovo per i fornitori." },
            { q: "Cosa succede quando una data slitta?", a: "Ricevi un alert con l'anomalia e il contesto, non solo una bandierina rossa." },
            { q: "Chi altro vede il thread?", a: "Solo chi metti in CC. I dati degli ordini restano nel tuo workspace, ospitati in UE." },
          ],
        },
      ],
    },
  },
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const url = new URLSearchParams(window.location.search).get("lang");
    const saved = window.localStorage.getItem("debuy-lang");
    const initial = url === "it" || url === "en" ? url : saved === "it" ? "it" : "en";
    setLangState(initial);
  }, []);

  const setLang = (l) => {
    setLangState(l);
    try {
      window.localStorage.setItem("debuy-lang", l);
    } catch (_) {}
  };

  const dict = STRINGS[lang] || STRINGS.en;

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext) || { lang: "en", setLang: () => {}, t: STRINGS.en };
}
