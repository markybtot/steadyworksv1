import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsUmbrella from "@/components/WhatIsUmbrella";
import Benefits from "@/components/Benefits";
import PayCalculator from "@/components/PayCalculator";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatIsUmbrella />
        <Benefits />
        <PayCalculator />
        <Services />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
