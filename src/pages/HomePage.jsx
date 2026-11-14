import DraftHeader from "../components/landing/DraftHeader";
import HomeHero from "../components/landing/HomeHero";
import Thesis from "../components/landing/Thesis";
import Products from "../components/landing/Products";
import Steps from "../components/landing/Steps";
import DraftCta from "../components/landing/DraftCta";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <DraftHeader />
      <HomeHero />
      <Thesis />
      <Products />
      <Steps />
      <DraftCta />
      <Footer />
    </>
  );
}
