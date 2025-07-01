import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
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
                <span className="text-sky-300 text-sm font-medium">🚀 Transform Your Business with AI Automation</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered Automation
              <span className="block bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-300 bg-clip-text text-transparent">
                for Modern Business
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We build smart systems that automate your backend, customer support, websites, and lead flows — so your business works around the clock.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" onClick={scrollToContact} icon={ArrowRight}>
                Book Demo
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToServices}>
                See What We Automate
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Bot className="h-12 w-12 text-sky-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Real AI. Real Results.</h3>
              <p className="text-gray-400 text-sm">Our solutions integrate directly with your workflows and tools</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Zap className="h-12 w-12 text-emerald-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">24/7 Systems</h3>
              <p className="text-gray-400 text-sm">From chatbots to backend processes, your systems never sleep</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <TrendingUp className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Quick Deployment. Fast ROI.</h3>
              <p className="text-gray-400 text-sm">Our clients start seeing results within days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};