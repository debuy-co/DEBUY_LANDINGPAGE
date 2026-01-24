import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
