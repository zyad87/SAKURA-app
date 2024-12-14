import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import WhatWeOffer from "./components/WhatWeOffer";
import PricingPlans from "./components/PricingPlans";
import Footer from "./components/Footer";
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <WhatWeOffer />
      <PricingPlans />
      <Footer />
    </div>
  );
};

export default App;
