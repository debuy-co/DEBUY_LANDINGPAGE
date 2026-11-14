import Head from "next/head";
import HomePage from "../src/pages/HomePage";

export default function HomePagePage() {
  return (
    <>
      <Head>
        <title>DEBUY | Make every supplier negotiation count.</title>
        <meta
          name="description"
          content="DEBUY turns every supplier price movement into an explainable negotiation position — Recovery Spend, Quote Check and Order Watch — and every order outcome into leverage for the next negotiation."
        />
      </Head>
      <HomePage />
    </>
  );
}
