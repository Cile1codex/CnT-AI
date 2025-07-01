import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { NavbarMK } from '../../components/mk/NavbarMK';
import { HeroMK } from '../../components/mk/HeroMK';
import { WhyChooseUsMK } from '../../components/mk/WhyChooseUsMK';
import { ServicesMK } from '../../components/mk/ServicesMK';
import { UseCasesMK } from '../../components/mk/UseCasesMK';
import { AboutMK } from '../../components/mk/AboutMK';
import { ContactMK } from '../../components/mk/ContactMK';
import { FooterMK } from '../../components/mk/FooterMK';
import { SEOHead } from '../../components/SEOHead';

export const HomePageMK: React.FC = () => {
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
    <>
      <SEOHead 
        title="CnT AI - AI-Автоматизација за модерен бизнис | Прилагодени AI решенија"
        description="CnT AI гради паметни системи што ги автоматизираат вашите backend процеси, корисничка поддршка, веб-страници и lead flows. 24/7 AI chatbots, прилагодени веб-страници и автоматизирани работни процеси што работат 24/7."
        keywords="AI автоматизација, бизнис автоматизација, chatbot развој, прилагодени веб-страници, генерирање leads, email автоматизација, CRM интеграција, backend автоматизација"
      />
      <NavbarMK />
      <HeroMK />
      <WhyChooseUsMK />
      <ServicesMK />
      <UseCasesMK />
      <AboutMK />
      <ContactMK />

      {/* Floating CTA Button for Mobile */}
      <button
        onClick={scrollToContact}
        className="fixed bottom-4 right-4 md:hidden bg-gradient-to-r from-sky-500 to-emerald-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
      >
        <span className="text-sm font-semibold">Резервирај демо</span>
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed top-20 left-4 bg-slate-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      <FooterMK />
    </>
  );
};