import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, Truck, Users, Laptop } from 'lucide-react';

export const UseCases: React.FC = () => {
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
      industry: 'Агенција за Недвижности',
      title: 'Автоматизирана Корисничка Поддршка',
      challenge: 'Мануелни одговори, бавно ракување со потенцијални клиенти, изгубени договори.',
      solution: '24/7 чатбот + CRM рутирање. 70% помалку мануелна работа. 2x стапка на конверзија од дојдовен сообраќај.',
      results: ['24/7 корисничка поддршка', '70% намалување на трошоците за поддршка', '95% задоволство на клиентите'],
      color: 'from-yellow-500 to-orange-600',
      caseStudyPath: '/mk/case-study-automated-customer-support',
    },
    {
      icon: Truck,
      industry: 'Услужни Бизниси',
      title: 'Квалификација на Потенцијални Клиенти и Резервации',
      challenge: 'Неконзистентни резервации. Изгубени потенцијални клиенти. Изгореност.',
      solution: 'Паметни форми + моментални резервации. 90% побрзо време на одговор. Нула пропуштени барања.',
      results: ['50% повеќе квалификувани потенцијални клиенти', '90% побрзо време на одговор', 'Нула пропуштени можности'],
      color: 'from-green-500 to-teal-600',
      caseStudyPath: '/mk/case-study-lead-qualification-booking',
    },
    {
      icon: Users,
      industry: 'Маркетинг Агенции',
      title: 'Автоматизација на Вовед на Клиенти',
      challenge: 'Неповрзан вовед. Одложени договори/плаќања.',
      solution: 'Автоматизирани започнувања. 5x побрз вовед. Чиста, конзистентна достава.',
      results: ['5x побрз вовед', 'Конзистентно искуство за клиентите', 'Повеќе време за стратегија'],
      color: 'from-pink-500 to-purple-600',
      caseStudyPath: '/mk/case-study-client-onboarding-automation',
    },
    {
      icon: Laptop,
      industry: 'Софтвер-како-Услуга Компании',
      title: 'Текови за Активација на Корисници',
      challenge: 'Ниска активација на корисници. Високо напуштање. Преоптоварување на поддршката.',
      solution: 'Персонализиран вовед. Email секвенци за негување. 60% повисока активација. 40% намалување на напуштање.',
      results: ['60% повисока активација', '40% намалување на напуштање', 'Скалабилен раст'],
      color: 'from-blue-500 to-indigo-600',
      caseStudyPath: '/mk/case-study-user-activation-flows',
    },
  ];

  return (
    <section id="use-cases" className="py-24 section-energizing relative overflow-hidden">
      {/* Floating Logo Symbols */}
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-hierarchy-2 text-slate-800 mb-8 tracking-tight">
            Реални <span className="bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent">Приказни за Успех</span>
          </h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-body">
            Видете како бизнисите од различни индустрии штедат време и пари со нашите АИ решенија за автоматизација.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.industry}
              className={`premium-card rounded-2xl p-10 shadow-lg hover-scale border-2 will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mr-8 flex-shrink-0`}>
                  <useCase.icon className="h-10 w-10 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">{useCase.industry}</div>
                  <h3 className="text-hierarchy-3 text-slate-800">{useCase.title}</h3>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-red-600 mb-4 text-lg">Пред</h4>
                  <p className="text-slate-700 text-body">{useCase.challenge}</p>
                </div>

                <div>
                  <h4 className="font-bold text-green-600 mb-4 text-lg">После</h4>
                  <p className="text-slate-700 text-body">{useCase.solution}</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <Link 
                  to={useCase.caseStudyPath}
                  className="text-indigo-600 font-semibold hover:text-indigo-500 transition-colors duration-200 hover:translate-x-2 transition-transform inline-block text-lg"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Видете Целосна Студија на Случај →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="premium-card-yellow rounded-2xl p-12 border-2">
            <h3 className="text-hierarchy-3 text-slate-800 mb-6">Вашата Индустрија Следна?</h3>
            <p className="text-slate-600 mb-10 max-w-3xl mx-auto text-body">
              Секој бизнис има уникатни предизвици. Дозволете ни да ви покажеме како АИ автоматизацијата може да ги реши вашите со персонализирано демо.
            </p>
            <button 
              onClick={scrollToContact}
              className="premium-button-coral text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg"
            >
              Да Го Изградиме Вашиот Случај на Употреба Следен
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};