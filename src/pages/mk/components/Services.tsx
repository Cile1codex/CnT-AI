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
      color: 'from-purple-500 to-indigo-600',
      link: '/mk/ai-chatbots',
    },
    {
      icon: Users,
      title: 'Паметни Фунели за Потенцијални Клиенти',
      description: 'Интерактивен чет + форми што ги квалификуваат потенцијалните клиенти, ги сортираат врз основа на логика и ги насочуваат директно до вашиот CRM или календар.',
      color: 'from-indigo-500 to-teal-600',
      link: '/mk/lead-funnel-automation',
    },
    {
      icon: Mail,
      title: 'Автоматизирани Email Работни Текови',
      description: 'Текови за добредојде. Следења. Задржување. Сè испратено во совршеното време—без да напишете уште еден email мануелно.',
      color: 'from-pink-500 to-rose-600',
      link: '/mk/email-automation',
    },
    {
      icon: Globe,
      title: 'Веб-страници за Конверзија',
      description: 'Изградени од нула со вградена автоматизација. Дизајнирани да го претворат сообраќајот во резервирани повици—не во стапки на напуштање.',
      color: 'from-teal-500 to-emerald-600',
      link: '/mk/conversion-websites',
    },
    {
      icon: Database,
      title: 'CRM + Интеграција на Алатки',
      description: 'API-ја. Zapier. Webhooks. Директни врски. Сите ваши backend алатки синхронизирани во една чиста, одзивна машина.',
      color: 'from-yellow-500 to-orange-600',
      link: '/mk/backend-integration',
    },
  ];

  return (
    <section id="services" className="py-20 animated-gradient relative overflow-hidden">
      {/* Floating Particles */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight text-glow">
            Што <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent text-glow-coral">Автоматизираме</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`premium-card-dark rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover-scale group will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <Link
                  to={service.link}
                  className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-200 group-hover:translate-x-2 transition-transform inline-block"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Дознајте Повеќе →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button 
            onClick={scrollToContact}
            className="premium-button text-white font-medium px-8 py-4 rounded-lg transition-all duration-300"
          >
            Резервирајте Ја Вашата Бесплатна Ревизија за Автоматизација
          </button>
        </div>
      </div>
    </section>
  );
};