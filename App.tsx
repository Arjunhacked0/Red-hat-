import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrainingSection from './components/TrainingSection';
import RHCSASection from './components/RhscaSection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-white min-h-screen flex flex-col bg-[#030305]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <TrainingSection />
        <RHCSASection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
