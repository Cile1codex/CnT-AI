import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, Truck, Users, Laptop } from 'lucide-react';
import { useTranslation } from '../../translations';

export const UseCasesMK: React.FC = () => {
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

    const element = document.getElementById('use-cases');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const useCases = [
    {
      icon: Store,
      industry: t.useCases.ecommerce.industry,
      title: t.useCases.ecommerce.title,
      challenge: t.useCases.ecommerce.challenge,
      solution: t.useCases.ecommerce.solution,
      results: t.useCases.ecommerce.results,
      color: 'from-sky-500 to-blue-600',
      caseStudyPath: '/mk/case-study-automated-customer-support',
    },
    {
      icon: Truck,
      industry: t.useCases.service.industry,
      title: t.useCases.service.title,
      challenge: t.useCases.service.challenge,
      solution: t.useCases.service.solution,
      results: t.useCases.service.results,
      color: 'from-emerald-500 to-teal-600',
      caseStudyPath: '/mk/case-study-lead-qualification-booking',
    },
    {
      icon: Users,
      industry: t.useCases.agency.industry,
      title: t.useCases.agency.title,
      challenge: t.useCases.agency.challenge,
      solution: t.useCases.agency.solution,
      results: t.useCases.agency.results,
      color: 'from-purple-500 to-indigo-600',
      caseStudyPath: '/mk/case-study-client-onboarding-automation',
    },
    {
      icon: Laptop,
      industry: t.useCases.saas.industry,
      title: t.useCases.saas.title,
      challenge: t.useCases.saas.challenge,
      solution: t.useCases.saas.solution,
      results: t.useCases.saas.results,
      color: 'from-orange-500 to-red-600',
      caseStudyPath: '/mk/case-study-user-activation-flows',
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.useCases.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.useCases.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.industry}
              className={`bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-sky-500/50 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">{useCase.industry}</div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">❌ {t.common.challenge}</h4>
                  <p className="text-gray-300">{useCase.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-400 mb-2">🔧 {t.common.solution}</h4>
                  <p className="text-gray-300">{useCase.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-emerald-400 mb-3">✅ {t.common.results}</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        <span className="text-gray-300 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <Link 
                  to={useCase.caseStudyPath}
                  className="text-sky-400 font-semibold hover:text-sky-300 transition-colors duration-200 hover:translate-x-2 transition-transform inline-block"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t.useCases.seeFullCaseStudy} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t.useCases.yourIndustryNext}</h3>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              {t.useCases.yourIndustryDesc}
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {t.useCases.scheduleCall}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};