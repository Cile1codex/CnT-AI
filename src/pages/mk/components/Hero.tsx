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
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-sky-500/20 to-emerald-500/20 backdrop-blur-sm border border-sky-500/30 rounded-full px-6 py-3">
                <span className="text-sky-300 text-sm font-medium">🚀 Трансформирајте го вашиот бизнис со АИ автоматизација</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              АИ-Автоматизација
              <span className="block bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-300 bg-clip-text text-transparent">
                за Модерен Бизнис
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Градиме паметни системи што ги автоматизираат вашите backend процеси, корисничка поддршка, веб-страници и продажни текови — за да работи вашиот бизнис 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" onClick={() => scrollToSection('contact')} icon={ArrowRight}>
                Резервирај Бесплатна Консултација
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('services')}>
                Видете Што Автоматизираме
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Bot className="h-12 w-12 text-sky-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Вистинска АИ. Вистински Резултати.</h3>
              <p className="text-gray-400 text-sm">Нашите решенија се интегрираат директно со вашите работни процеси и алатки</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Zap className="h-12 w-12 text-emerald-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">24/7 Системи</h3>
              <p className="text-gray-400 text-sm">Од чатботови до backend процеси, вашите системи никогаш не спијат</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <TrendingUp className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Брза Имплементација. Брз ROI.</h3>
              <p className="text-gray-400 text-sm">Нашите клиенти почнуваат да гледаат резултати во рок од денови</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};