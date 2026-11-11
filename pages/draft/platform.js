import Head from "next/head";
import DraftPlatform from "../../src/pages/DraftPlatform";

export default function DraftPlatformPage() {
  return (
    <>
      <Head>
        <title>DEBUY Intelligence | Recoverable spend, ready to negotiate.</title>
        <meta
          name="description"
          content="Connect your purchasing data and DEBUY goes all the way down: from dashboards to cost drivers to a negotiation brief you can defend. Insights in days, not months."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <DraftPlatform />
    </>
  );
}
