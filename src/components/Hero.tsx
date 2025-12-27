import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

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
    <section id="home" className="min-h-screen christmas-gradient relative overflow-hidden pt-16">
      {/* Floating Particles - Christmas themed */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

      {/* Warm Christmas ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(193,18,31,0.12) 0%, transparent 70%)', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(74,157,95,0.1) 0%, transparent 70%)', animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-8">
              <div className="premium-card-dark rounded-full px-6 py-3 animate-fade-in-scale">
                <span className="text-sky-300 text-sm font-medium">One strategy call. One custom automation. Live in 72 hours.</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-in-up" style={{ fontSize: '48px', textShadow: '0 0 30px rgba(255, 215, 0, 0.3)' }}>
              You're Wasting Time.
              <span className="block bg-gradient-to-r from-amber-300 via-red-300 to-emerald-300 bg-clip-text text-transparent" style={{ textShadow: '0 0 40px rgba(255, 215, 0, 0.4)' }}>
                We're Here to End That.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-in-up" style={{ fontSize: '20px', animationDelay: '0.2s' }}>
              We build intelligent AI systems that run your lead intake, customer support, and backend—so you stop babysitting your business and start scaling it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" onClick={() => scrollToSection('contact')} icon={ArrowRight} className="christmas-button">
                Book Your Free Consultation
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('services')} className="hover-glow" style={{ borderColor: 'rgba(255, 215, 0, 0.5)', color: '#FFD700' }}>
                See What We Automate
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="premium-card-dark rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 hover-scale will-change-transform">
              <Bot className="h-12 w-12 text-sky-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Real AI. Real Results.</h3>
              <p className="text-gray-400 text-sm">Our solutions integrate directly with your workflows and tools</p>
            </div>
            
            <div className="premium-card-dark rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover-scale will-change-transform">
              <Zap className="h-12 w-12 text-emerald-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">24/7 Systems</h3>
              <p className="text-gray-400 text-sm">From chatbots to backend processes, your systems never sleep</p>
            </div>
            
            <div className="premium-card-dark rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover-scale will-change-transform">
              <TrendingUp className="h-12 w-12 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Quick Deployment. Fast ROI.</h3>
              <p className="text-gray-400 text-sm">Our clients start seeing results within days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};