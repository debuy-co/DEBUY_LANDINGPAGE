import Head from "next/head";
import DraftQuoteCheck from "../../src/pages/DraftQuoteCheck";

export default function DraftQuoteCheckPage() {
  return (
    <>
      <Head>
        <title>DEBUY Quote Check | Forward the offer. Get the verdict.</title>
        <meta
          name="description"
          content="Forward a supplier offer and get a defensible verdict in minutes: driver breakdown, expected range and a negotiation talk track. No integration required."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <DraftQuoteCheck />
    </>
  );
}
