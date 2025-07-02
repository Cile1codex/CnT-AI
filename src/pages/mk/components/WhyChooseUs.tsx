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
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: Clock,
      title: 'Резултати Во Рок Од Денови',
      description: 'Заборавете ги долгите циклуси на развој. Повеќето системи работат во рок од 72 часа.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
    },
    {
      icon: Settings,
      title: 'Седевме Каде Што Седите Вие',
      description: 'Ние бевме оние што се заглавени во CRM-ови, гонејќи фактури и губејќи потенцијални клиенти во email нишки. Затоа изградивме она што сакавме да го имаме.',
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/20',
    },
    {
      icon: Target,
      title: 'Тивки Backend Системи Што Едноставно Работат',
      description: 'Ова не е хајп. Ова е тивката, автоматизирана инфраструктура што им овозможува на вистинските тимови да победуваат повеќе без повеќе напор.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
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
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-sky-50 to-purple-50 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Agitation Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-8 tracking-tight">
            Во моментов, вашиот бизнис губи време.
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {agitationPoints.map((point, index) => (
                <div key={index} className="flex items-center premium-card rounded-lg p-4 hover-scale will-change-transform border border-red-200">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Не растете—пливате на место. И длабоко во себе знаете дека ви чини повеќе од време. Ви чини скала. Репутација. Енергија.
          </p>
        </div>

        <div className="section-divider"></div>

        {/* Emotional Flip Section */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-8 tracking-tight">
            Сега замислете се најавувате утре… и сфаќате:
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="space-y-4 text-left">
              {transformationPoints.map((point, index) => (
                <div key={index} className="flex items-start premium-card rounded-lg p-4 hover-scale will-change-transform border border-emerald-200">
                  <span className="text-emerald-500 text-xl mr-4 mt-1 flex-shrink-0">→</span>
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-slate-600 leading-relaxed mb-4">
              Без обука. Без стрес од поставување. Само моќен систем прилагоден на вашиот бизнис—работи од првиот ден.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ова не е теорија. Ова е реално. И е готово за 3 дена или помалку.
            </p>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="premium-button text-white font-medium px-8 py-4 rounded-lg transition-all duration-300"
          >
            Резервирајте Го Вашиот Бесплатен Стратешки Повик
          </button>
        </div>

        <div className="section-divider"></div>

        {/* Why Us Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            Зошто Основачите и Операторите Избираат <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">CnT AI</span>
          </h2>
          <p className="text-xl font-semibold text-slate-700 mb-8">
            Вистински системи. Вистински ROI. Без бучава.
          </p>
          <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Не автоматизираме заради автоматизација. Автоматизираме каде што боли—за да оди вашето време кон скалирање, а не кон борба.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`premium-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale border ${feature.borderColor} will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
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
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button 
            onClick={scrollToContact}
            className="premium-button text-white font-medium px-8 py-4 rounded-lg transition-all duration-300"
          >
            Започнете Со Бесплатен Стратешки Повик
          </button>
        </div>
      </div>
    </section>
  );
};