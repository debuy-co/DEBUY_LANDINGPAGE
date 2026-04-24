import Head from "next/head";
import PrivacyPolicyPage from "../src/pages/PrivacyPolicyPage";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Privacy Policy | DEBUY</title>
        <meta
          name="description"
          content="Helping organizations understand purchasing costs and make better decisions through data."
        />
        <link rel="canonical" href="https://www.debuy.co/privacy" />
      </Head>
      <PrivacyPolicyPage />
    </>
  );
}
