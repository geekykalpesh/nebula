import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureCards from "./components/FeatureCards";

const ReelsSection = lazy(() => import("./components/ReelsSection"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const ProcessSection = lazy(() => import("./components/ProcessSection"));
const BentoGrid = lazy(() => import("./components/BentoGrid"));
const CTASection = lazy(() => import("./components/CTASection"));
const Footer = lazy(() => import("./components/Footer"));
const SparklesPreview = lazy(() => import("./components/SparklesPreview"));

// Skeleton loader for sections
const SectionLoader = () => (
  <div className="w-full h-96 bg-white/5 animate-pulse rounded-3xl mx-auto max-w-7xl my-20"></div>
);

const App = () => {
  return (
    <div className="scroll-smooth text-white antialiased selection:bg-blue-500/30 selection:text-blue-200 bg-black min-h-screen font-light">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <ReelsSection />
          <FeatureCards />
          <FeaturesSection />
          <ProcessSection />
          <BentoGrid />
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <SparklesPreview />
      </Suspense>
    </div>
  );
};

export default App;
