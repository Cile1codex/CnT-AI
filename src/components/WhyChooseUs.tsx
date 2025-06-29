import React, { useEffect, useState } from 'react';
import { Clock, DollarSign, Settings, Zap } from 'lucide-react';

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

  const features = [
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Deploy AI automation solutions in days, not months. Get immediate results with our proven frameworks.',
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
    },
    {
      icon: Settings,
      title: 'Full Customization',
      description: 'Tailored solutions that fit your exact business needs. No cookie-cutter approaches.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      icon: Clock,
      title: 'Save 10+ Hours Weekly',
      description: 'Eliminate repetitive tasks and free up your team to focus on high-value activities.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: DollarSign,
      title: 'Guaranteed ROI',
      description: 'See measurable cost savings within the first month or we work until you do.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Why Choose <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">CnT AI</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't just build automation – we deliver transformation. Here's what sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-slate-200/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies who've already eliminated hours of manual work with our AI automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 font-semibold">
                ⚡ 48-hour implementation
              </span>
              <span className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 font-semibold">
                💰 Average 40% cost reduction
              </span>
              <span className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 font-semibold">
                🎯 100% custom solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};