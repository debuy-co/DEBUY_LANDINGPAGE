import DraftHeader from "../components/draft/DraftHeader";
import HomeHero from "../components/draft/HomeHero";
import Thesis from "../components/draft/Thesis";
import Products from "../components/draft/Products";
import Steps from "../components/draft/Steps";
import DraftCta from "../components/draft/DraftCta";
import Footer from "../components/layout/Footer";

export default function DraftHome() {
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
