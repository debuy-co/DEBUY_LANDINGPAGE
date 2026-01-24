import Header from "../components/layout/Header";
import Hero from "../components/section/Hero";
import Features from "../components/section/Features";
import CTA from "../components/section/CTA";
import Footer from "../components/layout/Footer";
import Implementation from "../components/section/Implementation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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
