import Head from "next/head";
import Home from "../src/pages/Home"; // importa il tuo componente esistente

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
      </Head>
      <Home />
    </>
  );
}
