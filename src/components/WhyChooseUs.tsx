import React, { useEffect, useState } from 'react';
import { Clock, Settings, Zap, Target, CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

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
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: Clock,
      title: 'Results Within Days',
      description: 'Forget long dev cycles. Most systems are running within 72 hours.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
    },
    {
      icon: Settings,
      title: 'We\'ve Sat Where You Sit',
      description: 'We\'ve been the ones stuck inside CRMs, chasing invoices, and losing leads to email threads. So we built what we wish we had.',
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/20',
    },
    {
      icon: Target,
      title: 'Quiet Backends That Just Work',
      description: 'This isn\'t hype. This is the silent, automated infrastructure that powers real teams to win more without more effort.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
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
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-sky-50 to-purple-50 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Agitation Section */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 tracking-tight">
            Right now, your business is leaking time.
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {agitationPoints.map((point, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 100}
                  className="animate-on-scroll"
                >
                  <div className="flex items-center premium-card rounded-lg p-4 hover-scale will-change-transform border border-red-200">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          
          <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
            You're not growing—you're treading water. And deep down, you know it's costing you more than time. It's costing you scale. Reputation. Energy.
          </p>
        </AnimatedSection>

        <div className="section-divider"></div>

        {/* Emotional Flip Section */}
        <AnimatedSection className="text-center mb-20" delay={200}>
          <h2 className="text-4xl font-bold text-slate-800 mb-8 tracking-tight">
            Now imagine logging in tomorrow… and realizing:
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="space-y-4 text-left">
              {transformationPoints.map((point, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 150}
                  className="animate-on-scroll"
                >
                  <div className="flex items-start premium-card rounded-lg p-4 hover-scale will-change-transform border border-emerald-200">
                    <span className="text-emerald-500 text-xl mr-4 mt-1 flex-shrink-0">→</span>
                    <span className="text-slate-700">{point}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-slate-600 leading-relaxed mb-4">
              No training. No setup stress. Just a powerful system tailored to your business—working from day one.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This isn't theory. This is real. And it's ready in 3 days or less.
            </p>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="premium-button text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 btn-hover"
          >
            Book Your Free Strategy Call
          </button>
        </AnimatedSection>

        <div className="section-divider"></div>

        {/* Why Us Section */}
        <AnimatedSection className="text-center mb-16" delay={400}>
          <h2 className="text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            Why Founders & Operators Choose <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">CnT AI</span>
          </h2>
          <p className="text-xl font-semibold text-slate-700 mb-8">
            Real systems. Real ROI. No noise.
          </p>
          <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            We don't automate for the sake of it. We automate where it hurts—so your time goes to scaling, not scrambling.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              delay={index * 100 + 600}
              className="animate-on-scroll"
            >
              <div className={`premium-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale border ${feature.borderColor} will-change-transform`}>
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 border ${feature.borderColor}`}>
                  <feature.icon className={`h-8 w-8 ${feature.color} icon-hover`} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={800}>
          <button 
            onClick={scrollToContact}
            className="premium-button text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 btn-hover"
          >
            Start With a Free Strategy Call
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};