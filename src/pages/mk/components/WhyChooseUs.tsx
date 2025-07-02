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
      title: 'Изградено За Вас',
      description: 'Сè што го градиме е прилагодено. Без готови решенија или пазарни отпадоци. Вашата логика, вашиот стек, вашиот бизнис—поврзано цврсто.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      cardClass: 'premium-card',
    },
    {
      icon: Clock,
      title: 'Резултати Во Рок Од Денови',
      description: 'Заборавете ги долгите циклуси на развој. Повеќето системи работат во рок од 72 часа.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      cardClass: 'premium-card-teal',
    },
    {
      icon: Settings,
      title: 'Седевме Каде Што Седите Вие',
      description: 'Ние бевме оние што се заглавени во CRM-ови, гонејќи фактури и губејќи потенцијални клиенти во email нишки. Затоа изградивме она што сакавме да го имаме.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      cardClass: 'premium-card',
    },
    {
      icon: Target,
      title: 'Тивки Backend Системи Што Едноставно Работат',
      description: 'Ова не е хајп. Ова е тивката, автоматизирана инфраструктура што им овозможува на вистинските тимови да победуваат повеќе без повеќе напор.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      cardClass: 'premium-card-coral',
    },
  ];

  const agitationPoints = [
    'Потенцијални клиенти што се губат низ пукнатините',
    'Вовед што се прави мануелно',
    'Прашања што се одговараат едно…по…едно',
    'Преоптоварен персонал за поддршка',
    'Задачи што се повторуваат секој. еден. ден.'
  ];

  const transformationPoints = [
    'Секој потенцијален клиент е квалификуван и во вашиот CRM пред да се разбудите',
    'Клиентите се воведуваат сами—договори потпишани, плаќања обработени',
    'Поддршката работи 24/7 без ниеден вработен',
    'Вашиот backend е синхронизиран, чист и тивко ја прави работата за вас'
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
            Во моментов, вашиот бизнис губи време.
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agitationPoints.map((point, index) => (
                <div key={index} className="premium-card rounded-xl p-6 hover-lift will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-red-500 mr-4 flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-body">{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-slate-600 max-w-5xl mx-auto leading-relaxed text-body">
            Не растете—пливате на место. И длабоко во себе знаете дека ви чини повеќе од време. Ви чини скала. Репутација. Енергија.
          </p>
        </div>

        <div className="section-divider"></div>

        {/* Emotional Flip Section */}
        <div className={`text-center mb-24 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-hierarchy-2 text-slate-800 mb-12 tracking-tight">
            Сега замислете се најавувате утре… и сфаќате:
          </h2>
          
          <div className="max-w-5xl mx-auto mb-12">
            <div className="space-y-6">
              {transformationPoints.map((point, index) => (
                <div key={index} className="premium-card-green rounded-xl p-6 hover-lift will-change-transform">
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
              Без обука. Без стрес од поставување. Само моќен систем прилагоден на вашиот бизнис—работи од првиот ден.
            </p>
            <p className="text-slate-700 leading-relaxed text-body font-semibold">
              Ова не е теорија. Ова е реално. И е готово за 3 дена или помалку.
            </p>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="premium-button-coral text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg"
          >
            Резервирајте Го Вашиот Бесплатен Стратешки Повик
          </button>
        </div>

        <div className="section-divider"></div>

        {/* Why Us Section */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-hierarchy-2 text-slate-800 mb-8 tracking-tight">
            Зошто Основачите и Операторите Избираат <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">CnT AI</span>
          </h2>
          <p className="text-hierarchy-3 text-slate-700 mb-8">
            Вистински системи. Вистински ROI. Без бучава.
          </p>
          <p className="text-slate-600 max-w-5xl mx-auto leading-relaxed mb-16 text-body">
            Не автоматизираме заради автоматизација. Автоматизираме каде што боли—за да оди вашето време кон скалирање, а не кон борба.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`${feature.cardClass} rounded-2xl p-10 shadow-lg hover-scale border-2 will-change-transform ${
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
            Започнете Со Бесплатен Стратешки Повик
          </button>
        </div>
      </div>
    </section>
  );
};