import React, { useEffect, useState } from 'react';
import { Clock, DollarSign, Settings, Zap, Target } from 'lucide-react';
import { useTranslation } from '../../translations';

export const WhyChooseUsMK: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslation('mk');

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
      title: t.whyChooseUs.realAITitle,
      description: t.whyChooseUs.realAIDesc,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
    },
    {
      icon: Clock,
      title: t.whyChooseUs.systems247Title,
      description: t.whyChooseUs.systems247Desc,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      icon: Settings,
      title: t.whyChooseUs.customBuiltTitle,
      description: t.whyChooseUs.customBuiltDesc,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Target,
      title: t.whyChooseUs.fewerTasksTitle,
      description: t.whyChooseUs.fewerTasksDesc,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: DollarSign,
      title: t.whyChooseUs.quickDeploymentTitle,
      description: t.whyChooseUs.quickDeploymentDesc,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {t.whyChooseUs.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};