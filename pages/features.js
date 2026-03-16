import Head from "next/head";
import FeaturesPage from "../src/pages/FeaturesPage";

export default function Features() {
  return (
    <>
      <Head>
        <title>DEBUY | Features </title>
        <meta
          name="description"
          content="Everything you need to analyze purchasing data and drive better negotiation outcomes."
        />
        <link rel="canonical" href="https://www.debuy.co/features" />
      </Head>
      <FeaturesPage />
    </>
  );
}
