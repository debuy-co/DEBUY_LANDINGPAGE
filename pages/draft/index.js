import Head from "next/head";
import DraftHome from "../../src/pages/DraftHome";

export default function DraftHomePage() {
  return (
    <>
      <Head>
        <title>DEBUY | Know what you should pay. Know where every order stands.</title>
        <meta
          name="description"
          content="DEBUY covers purchasing from the first quote to the final delivery: Quote Check gives a defensible verdict on every offer, Intelligence finds recoverable spend, Order Watch tracks every order."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <DraftHome />
    </>
  );
}
