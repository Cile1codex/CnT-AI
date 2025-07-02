import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Floating Particles */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-8">
              <div className="premium-card-dark rounded-full px-6 py-3 animate-fade-in-scale border border-purple-500/30">
                <span className="text-purple-300 text-sm font-medium">Еден стратешки повик. Една прилагодена автоматизација. Во живо за 72 часа.</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-in-up text-glow">
              Ви Губите Време.
              <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-teal-300 bg-clip-text text-transparent text-glow-coral">
                Ние Сме Тука Да Го Завршиме Тоа.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Градиме интелигентни АИ системи што ги водат вашите потенцијални клиенти, корисничка поддршка и backend—за да престанете да го чувате вашиот бизнис и да почнете да го скалирате.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" onClick={() => scrollToSection('contact')} icon={ArrowRight} className="premium-button">
                Резервирајте Ја Вашата Бесплатна Консултација
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('services')} className="hover-glow border-2 border-purple-400 text-purple-300 hover:bg-purple-50 hover:text-purple-600">
                Видете Што Автоматизираме
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="premium-card-dark rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover-scale will-change-transform">
              <Bot className="h-12 w-12 text-purple-400 mb-4 mx-auto icon-hover" />
              <h3 className="text-white font-semibold text-lg mb-2">Вистинска АИ. Вистински Резултати.</h3>
              <p className="text-gray-400 text-sm">Нашите решенија се интегрираат директно со вашите работни процеси и алатки</p>
            </div>
            
            <div className="premium-card-dark rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover-scale will-change-transform">
              <Zap className="h-12 w-12 text-indigo-400 mb-4 mx-auto icon-hover" />
              <h3 className="text-white font-semibold text-lg mb-2">24/7 Системи</h3>
              <p className="text-gray-400 text-sm">Од чатботови до backend процеси, вашите системи никогаш не спијат</p>
            </div>
            
            <div className="premium-card-dark rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 hover-scale will-change-transform">
              <TrendingUp className="h-12 w-12 text-teal-400 mb-4 mx-auto icon-hover" />
              <h3 className="text-white font-semibold text-lg mb-2">Брза Имплементација. Брз ROI.</h3>
              <p className="text-gray-400 text-sm">Нашите клиенти почнуваат да гледаат резултати во рок од денови</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};