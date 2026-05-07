import Head from "next/head";
import DigestLandingPage from "../src/pages/DigestLandingPage";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Daily Digest | DEBUY</title>
        <meta
          name="description"
          content="Helping organizations understand purchasing costs and make better decisions through data."
        />
        <link rel="canonical" href="https://www.debuy.co/digest" />
      </Head>
      <DigestLandingPage />
    </>
  );
}
