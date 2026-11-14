import Head from "next/head";
import PlatformPage from "../src/pages/PlatformPage";

export default function PlatformPagePage() {
  return (
    <>
      <Head>
        <title>DEBUY Intelligence | Recoverable spend, ready to negotiate.</title>
        <meta
          name="description"
          content="Connect your purchasing data and DEBUY goes all the way down: from dashboards to cost drivers to a negotiation brief you can defend. Insights in days, not months."
        />
      </Head>
      <PlatformPage />
    </>
  );
}
