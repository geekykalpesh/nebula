import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureCards from "./components/FeatureCards";

import ProcessSection from "./components/ProcessSection";
import BentoGrid from "./components/BentoGrid";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";

const App = () => {
  return (
    <div className="scroll-smooth text-white antialiased selection:bg-blue-500/30 selection:text-blue-200 bg-black min-h-screen font-light">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <FeaturesSection />
        <ProcessSection />
        <BentoGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
