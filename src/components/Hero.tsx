import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';
import { AnimatedSection } from './AnimatedSection';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger page load animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Floating Logo Symbols */}
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animationType="fadeIn" delay={0}>
            <div className="flex justify-center mb-8">
              <div className="premium-card-dark rounded-full px-8 py-4 hover-glow">
                <span className="text-purple-300 font-medium">One strategy call. One custom automation. Live in 72 hours.</span>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="slideUp" delay={200}>
            <h1 className="text-hierarchy-1 text-white mb-8 leading-tight tracking-tight">
              You're Wasting Time.
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-teal-300 bg-clip-text text-transparent mt-4">
                We're Here to End That.
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="slideUp" delay={400}>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We build intelligent AI systems that run your lead intake, customer support, and backend—so you stop babysitting your business and start scaling it.
            </p>
          </AnimatedSection>

          <AnimatedSection animationType="slideUp" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')} 
                icon={ArrowRight} 
                className="premium-button btn-hover"
              >
                Book Your Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('services')} 
                className="premium-card border-2 border-purple-400 text-purple-300 hover:bg-purple-50 btn-hover"
              >
                See What We Automate
              </Button>
            </div>
          </AnimatedSection>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <AnimatedSection animationType="slideUp" delay={800}>
              <div className="premium-card-dark rounded-2xl p-8 card-hover gpu-accelerated">
                <Bot className="h-16 w-16 text-purple-400 mb-6 mx-auto" />
                <h3 className="text-white font-bold text-xl mb-4">Real AI. Real Results.</h3>
                <p className="text-gray-400">Our solutions integrate directly with your workflows and tools</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slideUp" delay={1000}>
              <div className="premium-card-dark rounded-2xl p-8 card-hover gpu-accelerated">
                <Zap className="h-16 w-16 text-teal-400 mb-6 mx-auto" />
                <h3 className="text-white font-bold text-xl mb-4">24/7 Systems</h3>
                <p className="text-gray-400">From chatbots to backend processes, your systems never sleep</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slideUp" delay={1200}>
              <div className="premium-card-dark rounded-2xl p-8 card-hover gpu-accelerated">
                <TrendingUp className="h-16 w-16 text-pink-400 mb-6 mx-auto" />
                <h3 className="text-white font-bold text-xl mb-4">Quick Deployment. Fast ROI.</h3>
                <p className="text-gray-400">Our clients start seeing results within days</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};