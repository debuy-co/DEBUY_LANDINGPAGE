import Head from "next/head";
import Home from "../src/pages/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>DEBUY | Turn purchasing data into savings</title>
        <meta
          name="description"
          content="DEBUY helps purchasing and finance teams understand cost drivers, negotiate better, and achieve measurable savings."
        />
        <link rel="canonical" href="https://www.debuy.co/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="DEBUY | Turn purchasing data into savings"
        />
        <meta
          property="og:description"
          content="DEBUY helps organizations understand purchasing costs and make better decisions through data."
        />
        <meta property="og:url" content="https://www.debuy.co/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.debuy.co/images/cover.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "DEBUY",
              url: "https://www.debuy.co",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DEBUY",
              url: "https://www.debuy.co",
              logo: "https://www.debuy.co/images/logo.png",
              sameAs: ["https://www.linkedin.com/company/debuy"],
            }),
          }}
        />
      </Head>
      <Home />
    </>
  );
}
