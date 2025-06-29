import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { UseCases } from './components/UseCases';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Logo } from './components/Logo';
import { StarBackground } from './components/StarBackground';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 relative">
      {/* Ambient Star Background */}
      <StarBackground />
      
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <UseCases />
      <About />
      <Testimonials />
      <Contact />

      {/* Floating CTA Button for Mobile */}
      <button
        onClick={scrollToContact}
        className="fixed bottom-4 right-4 md:hidden bg-gradient-to-r from-sky-500 to-emerald-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
      >
        <span className="text-sm font-semibold">Book Demo</span>
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 left-4 bg-slate-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Logo size="sm" className="mr-3" />
              <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                CnT AI
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through intelligent automation solutions.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>© 2025 CnT AI. All rights reserved.</span>
              <span>•</span>
              <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;