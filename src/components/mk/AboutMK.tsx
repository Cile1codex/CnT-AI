import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../translations';

export const AboutMK: React.FC = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-8">
            {t.about.subtitle}
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.description2}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.description3}
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              {t.about.whatSetsUsApart}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-sky-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{t.about.realAutomation}</h4>
                  <p className="text-slate-600">{t.about.realAutomationDesc}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{t.about.tailoredSystems}</h4>
                  <p className="text-slate-600">{t.about.tailoredSystemsDesc}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{t.about.executionReady}</h4>
                  <p className="text-slate-600">{t.about.executionReadyDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Built by Operators */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              {t.about.builtByOperators}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.builtByOperatorsDesc}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.about.ctaTitle}</h3>
            <p className="text-sky-100 mb-6 text-lg">
              {t.about.ctaSubtitle}
            </p>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
              {t.about.ctaDescription}
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-sky-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              {t.about.ctaButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};