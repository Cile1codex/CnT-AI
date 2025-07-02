import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Globe, Users, Mail, Database } from 'lucide-react';

export const Services: React.FC = () => {
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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: MessageSquare,
      title: 'АИ Чатботови Што Никогаш Не Спијат',
      description: 'Прилагодено обучени, со глас на брендот и изградени врз вашата бизнис логика. Поддршка, продажба и заробување потенцијални клиенти—направено без луѓе.',
      color: 'from-indigo-500 to-purple-600',
      link: '/mk/ai-chatbots',
    },
    {
      icon: Users,
      title: 'Паметни Фунели за Потенцијални Клиенти',
      description: 'Интерактивен чет + форми што ги квалификуваат потенцијалните клиенти, ги сортираат врз основа на логика и ги насочуваат директно до вашиот CRM или календар.',
      color: 'from-purple-500 to-pink-600',
      link: '/mk/lead-funnel-automation',
    },
    {
      icon: Mail,
      title: 'Автоматизирани Email Работни Текови',
      description: 'Текови за добредојде. Следења. Задржување. Сè испратено во совршеното време—без да напишете уште еден email мануелно.',
      color: 'from-pink-500 to-red-600',
      link: '/mk/email-automation',
    },
    {
      icon: Globe,
      title: 'Веб-страници за Конверзија',
      description: 'Изградени од нула со вградена автоматизација. Дизајнирани да го претворат сообраќајот во резервирани повици—не во стапки на напуштање.',
      color: 'from-teal-500 to-green-600',
      link: '/mk/conversion-websites',
    },
    {
      icon: Database,
      title: 'CRM + Интеграција на Алатки',
      description: 'API-ја. Zapier. Webhooks. Директни врски. Сите ваши backend алатки синхронизирани во една чиста, одзивна машина.',
      color: 'from-blue-500 to-teal-600',
      link: '/mk/backend-integration',
    },
  ];

  return (
    <section id="services" className="py-24 services-gradient relative overflow-hidden">
      {/* Floating Logo Symbols */}
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-hierarchy-2 text-white mb-8 tracking-tight">
            Што <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">Автоматизираме</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`premium-card-dark rounded-2xl p-10 border-2 border-purple-500/30 hover-scale group will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-hierarchy-3 text-white mb-6">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-body">
                {service.description}
              </p>

              <div className="mt-8 pt-6 border-t border-purple-500/30">
                <Link
                  to={service.link}
                  className="text-purple-300 font-semibold hover:text-purple-200 transition-colors duration-200 group-hover:translate-x-2 transition-transform inline-block"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Дознајте Повеќе →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button 
            onClick={scrollToContact}
            className="premium-button-yellow text-slate-800 font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg"
          >
            Резервирајте Ја Вашата Бесплатна Ревизија за Автоматизација
          </button>
        </div>
      </div>
    </section>
  );
};