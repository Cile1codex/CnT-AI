import React, { useEffect, useState } from 'react';
import { Clock, Settings, Zap, Target, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('why-choose-us');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Zap,
      title: 'Built For You',
      description: 'Everything we build is tailored. No cookie-cutter flows or marketplace junk. Your logic, your stack, your business—wired tight.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      cardClass: 'premium-card',
    },
    {
      icon: Clock,
      title: 'Results Within Days',
      description: 'Forget long dev cycles. Most systems are running within 72 hours.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      cardClass: 'premium-card-teal',
    },
    {
      icon: Settings,
      title: 'We\'ve Sat Where You Sit',
      description: 'We\'ve been the ones stuck inside CRMs, chasing invoices, and losing leads to email threads. So we built what we wish we had.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      cardClass: 'premium-card',
    },
    {
      icon: Target,
      title: 'Quiet Backends That Just Work',
      description: 'This isn\'t hype. This is the silent, automated infrastructure that powers real teams to win more without more effort.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      cardClass: 'premium-card-coral',
    },
  ];

  const agitationPoints = [
    'Leads falling through the cracks',
    'Onboarding done manually',
    'Questions answered one…by…one',
    'Support staff overwhelmed',
    'Tasks repeated every. single. day.'
  ];

  const transformationPoints = [
    'Every lead is qualified and in your CRM before you wake up',
    'Clients onboard themselves—contracts signed, payments handled',
    'Support runs 24/7 without a single employee',
    'Your backend is synced, clean, and quietly doing the work for you'
  ];

  return (
    <section id="why-choose-us" className="py-24 section-informational relative overflow-hidden">
      {/* Floating Logo Symbols */}
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Agitation Section */}
        <div className={`text-center mb-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-hierarchy-2 text-slate-800 mb-12 tracking-tight">
            Right now, your business is leaking time.
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agitationPoints.map((point, index) => (
                <div 
                  key={index} 
                  className={`premium-card rounded-xl p-6 hover-lift will-change-transform transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-red-500 mr-4 flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-body">{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-slate-600 max-w-5xl mx-auto leading-relaxed text-body">
            You're not growing—you're treading water. And deep down, you know it's costing you more than time. It's costing you scale. Reputation. Energy.
          </p>
        </div>

        <div className="section-divider"></div>

        {/* Emotional Flip Section */}
        <div className={`text-center mb-24 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-hierarchy-2 text-slate-800 mb-12 tracking-tight">
            Now imagine logging in tomorrow… and realizing:
          </h2>
          
          <div className="max-w-5xl mx-auto mb-12">
            <div className="space-y-6">
              {transformationPoints.map((point, index) => (
                <div 
                  key={index} 
                  className={`premium-card-green rounded-xl p-6 hover-lift will-change-transform transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                >
                  <div className="flex items-start">
                    <span className="text-green-600 text-2xl mr-6 mt-1 flex-shrink-0 font-bold">→</span>
                    <span className="text-slate-700 font-medium text-body text-left">{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12 space-y-6">
            <p className="text-slate-600 leading-relaxed text-body">
              No training. No setup stress. Just a powerful system tailored to your business—working from day one.
            </p>
            <p className="text-slate-700 leading-relaxed text-body font-semibold">
              This isn't theory. This is real. And it's ready in 3 days or less.
            </p>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="premium-button-coral text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg"
          >
            Book Your Free Strategy Call
          </button>
        </div>

        <div className="section-divider"></div>

        {/* Why Us Section */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-hierarchy-2 text-slate-800 mb-8 tracking-tight">
            Why Founders & Operators Choose <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">CnT AI</span>
          </h2>
          <p className="text-hierarchy-3 text-slate-700 mb-8">
            Real systems. Real ROI. No noise.
          </p>
          <p className="text-slate-600 max-w-5xl mx-auto leading-relaxed mb-16 text-body">
            We don't automate for the sake of it. We automate where it hurts—so your time goes to scaling, not scrambling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`${feature.cardClass} rounded-2xl p-10 shadow-lg hover-scale border-2 will-change-transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150 + 600}ms` }}
            >
              <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-8`}>
                <feature.icon className={`h-10 w-10 ${feature.color}`} />
              </div>
              
              <h3 className="text-hierarchy-3 text-slate-800 mb-6">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button 
            onClick={scrollToContact}
            className="premium-button text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg"
          >
            Start With a Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};