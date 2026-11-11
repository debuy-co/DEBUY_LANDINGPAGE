import { useEffect } from "react";
import { useRouter } from "next/router";
import DraftHeader from "../components/draft/DraftHeader";
import HeroVerdict from "../components/draft/HeroVerdict";
import ProofBar from "../components/draft/ProofBar";
import Problem from "../components/draft/Problem";
import Products from "../components/draft/Products";
import Implementation from "../components/section/Implementation";
import WhyDebuy from "../components/draft/WhyDebuy";
import TrustFaq from "../components/draft/TrustFaq";
import DraftCta from "../components/draft/DraftCta";
import Footer from "../components/layout/Footer";

export default function DraftHome() {
  const router = useRouter();

  useEffect(() => {
    const scrollTarget = router.query.scrollTo;
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.query]);

  return (
    <>
      <DraftHeader />
      <HeroVerdict />
      <ProofBar />
      <Problem />
      <Products />
      <Implementation />
      <WhyDebuy />
      <TrustFaq />
      <DraftCta />
      <Footer />
    </>
  );
}
