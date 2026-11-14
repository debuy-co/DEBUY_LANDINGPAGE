import Head from "next/head";
import OrderWatchPage from "../src/pages/OrderWatchPage";

export default function OrderWatchPagePage() {
  return (
    <>
      <Head>
        <title>DEBUY Order Watch | CC the assistant. Never chase a confirmation again.</title>
        <meta
          name="description"
          content="Order Watch tracks milestones, flags discrepancies and sends a weekly digest on every open order. CC the assistant on a PO thread — that's the whole setup."
        />
      </Head>
      <OrderWatchPage />
    </>
  );
}
