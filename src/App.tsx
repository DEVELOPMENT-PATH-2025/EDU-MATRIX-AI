import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSuite from './components/ProductSuite';
import ValueProposition from './components/ValueProposition';
import Pricing from './components/Pricing';
import DemoRequest from './components/DemoRequest';
import AboutFounder from './components/AboutFounder';
import TechSecurity from './components/TechSecurity';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LegalPages from './components/LegalPages';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleRequestDemo = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('products');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('products');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar
        onRequestDemo={handleRequestDemo}
        onNavigate={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onRequestDemo={handleRequestDemo} onExploreProducts={handleExploreProducts} />
            <ProductSuite onRequestDemo={handleRequestDemo} />
            <ValueProposition />
            <Pricing onRequestDemo={handleRequestDemo} />
            <AboutFounder />
            <TechSecurity />
            <DemoRequest />
            <FinalCTA onRequestDemo={handleRequestDemo} onExploreProducts={handleExploreProducts} />
          </>
        )}

        {currentPage === 'privacy' && (
          <LegalPages type="privacy" onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'terms' && (
          <LegalPages type="terms" onBack={() => setCurrentPage('home')} />
        )}
      </main>

      <Footer
        onNavigate={(page) => setCurrentPage(page)}
        onRequestDemo={handleRequestDemo}
      />
    </div>
  );
}
