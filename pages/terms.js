import Head from "next/head";
import TermsPage from "../src/pages/TermsPage";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | DEBUY</title>
        <meta
          name="description"
          content="Helping organizations understand purchasing costs and make better decisions through data."
        />
        <link rel="canonical" href="https://www.debuy.co/terms" />
      </Head>
      <TermsPage />
    </>
  );
}
