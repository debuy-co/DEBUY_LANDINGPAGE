import Head from "next/head";
import DraftHome from "../../src/pages/DraftHome";

export default function DraftHomePage() {
  return (
    <>
      <Head>
        <title>DEBUY | Send your supplier&apos;s offer. Get a verdict you can defend.</title>
        <meta
          name="description"
          content="DEBUY decomposes every price movement into material, FX and volume drivers, benchmarks it against market indices, and hands you the negotiation brief. Forward a supplier offer, get the verdict in minutes."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <DraftHome />
    </>
  );
}
