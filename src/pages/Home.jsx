import Header from "../components/layout/Header";
import Hero from "../components/section/Hero";
import Features from "../components/section/Features";
import CTA from "../components/section/CTA";
import Footer from "../components/layout/Footer";
import Implementation from "../components/section/Implementation";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
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
      <Header />
      <Hero />
      <Features />
      <Implementation />
      <CTA />
      <Footer />
    </>
  );
}
