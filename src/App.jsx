import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import LogoPage from "./pages/LogoPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/logo" element={<LogoPage />} />
      </Routes>
    </HashRouter>
  );
}
