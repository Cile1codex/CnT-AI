import React, { useEffect, useState } from 'react';
import { Clock, DollarSign, Settings, Zap, Target } from 'lucide-react';

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
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
    },
    {
      icon: Clock,
      title: 'Results Within Days',
      description: 'Forget long dev cycles. Most systems are running within 72 hours.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      icon: Settings,
      title: 'We\'ve Sat Where You Sit',
      description: 'We\'ve been the ones stuck inside CRMs, chasing invoices, and losing leads to email threads. So we built what we wish we had.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Target,
      title: 'Quiet Backends That Just Work',
      description: 'This isn\'t hype. This is the silent, automated infrastructure that powers real teams to win more without more effort.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Agitation Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Right now, your business is leaking time.
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <span className="text-red-500 text-xl mr-3">✅</span>
                <span className="text-slate-700 text-lg">Leads falling through the cracks</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 text-xl mr-3">✅</span>
                <span className="text-slate-700 text-lg">Onboarding done manually</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 text-xl mr-3">✅</span>
                <span className="text-slate-700 text-lg">Questions answered one…by…one</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 text-xl mr-3">✅</span>
                <span className="text-slate-700 text-lg">Support staff overwhelmed</span>
              </div>
              <div className="flex items-center md:col-span-2 justify-center">
                <span className="text-red-500 text-xl mr-3">✅</span>
                <span className="text-slate-700 text-lg">Tasks repeated every. single. day.</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            You're not growing—you're treading water. And deep down, you know it's costing you more than time. It's costing you scale. Reputation. Energy.
          </p>
        </div>

        {/* Emotional Flip Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            Now imagine logging in tomorrow… and realizing:
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <span className="text-emerald-500 text-xl mr-4 mt-1">→</span>
                <span className="text-slate-700 text-lg">Every lead is qualified and in your CRM before you wake up</span>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 text-xl mr-4 mt-1">→</span>
                <span className="text-slate-700 text-lg">Clients onboard themselves—contracts signed, payments handled</span>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 text-xl mr-4 mt-1">→</span>
                <span className="text-slate-700 text-lg">Support runs 24/7 without a single employee</span>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 text-xl mr-4 mt-1">→</span>
                <span className="text-slate-700 text-lg">Your backend is synced, clean, and quietly doing the work for you</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              No training. No setup stress. Just a powerful system tailored to your business—working from day one.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              This isn't theory. This is real. And it's ready in 3 days or less.
            </p>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            📞 Book Your Free Strategy Call
          </button>
        </div>

        {/* Why Us Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Why Founders & Operators Choose <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">CnT AI</span>
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-8">
            Real systems. Real ROI. No noise.
          </p>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            We don't automate for the sake of it. We automate where it hurts—so your time goes to scaling, not scrambling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-slate-200/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            📞 Start With a Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};