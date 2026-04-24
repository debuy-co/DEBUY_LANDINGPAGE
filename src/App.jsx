import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import LogoPage from "./pages/LogoPage";
import TermsPage from "./pages/TermsPage";
import IubendaCookieBanner from "./components/iubenda/IubendaCookieBanner";

export default function App() {
  return (
    <HashRouter>
      <IubendaCookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/logo" element={<LogoPage />} />
      </Routes>
    </HashRouter>
  );
}
