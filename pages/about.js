import Head from "next/head";
import AboutPage from "../src/pages/AboutPage";

export default function About() {
  return (
    <>
      <Head>
        <title>About | DEBUY</title>
        <meta
          name="description"
          content="Helping organizations understand purchasing costs and make better decisions through data."
        />
        <link rel="canonical" href="https://www.debuy.co/about" />
      </Head>
      <AboutPage />
    </>
  );
}
