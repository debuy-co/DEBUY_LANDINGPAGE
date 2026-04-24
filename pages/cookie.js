import Head from "next/head";
import CookiePolicyPage from "../src/pages/CookiePolicyPage";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Cookie Policy Page | DEBUY</title>
        <meta
          name="description"
          content="Helping organizations understand purchasing costs and make better decisions through data."
        />
        <link rel="canonical" href="https://www.debuy.co/cookie" />
      </Head>
      <CookiePolicyPage />
    </>
  );
}
