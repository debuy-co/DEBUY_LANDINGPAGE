import Head from "next/head";
import DraftOrderWatch from "../../src/pages/DraftOrderWatch";

export default function DraftOrderWatchPage() {
  return (
    <>
      <Head>
        <title>DEBUY Order Watch | CC the assistant. Never chase a confirmation again.</title>
        <meta
          name="description"
          content="Order Watch tracks milestones, flags discrepancies and sends a weekly digest on every open order. CC the assistant on a PO thread — that's the whole setup."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <DraftOrderWatch />
    </>
  );
}
