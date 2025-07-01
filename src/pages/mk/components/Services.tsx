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

  const services = [
    {
      icon: MessageSquare,
      title: '24/7 АИ Чатбот Системи',
      description: 'Прилагодени чатботови што се справуваат со корисничка поддршка, ЧПП, заробување на потенцијални клиенти и водење на производи — достапни во секое време.',
      color: 'from-sky-500 to-blue-600',
      link: '/mk/ai-chatbots',
    },
    {
      icon: Globe,
      title: 'Веб-страници Оптимизирани за Конверзија',
      description: 'Целосно прилагодени веб-страници изградени од нула за да го конвертираат сообраќајот во клиенти. Дизајнирани со автоматизација и скалабилност.',
      color: 'from-emerald-500 to-teal-600',
      link: '/mk/conversion-websites',
    },
    {
      icon: Users,
      title: 'Заробување на Потенцијални Клиенти и Автоматизација на Фунел',
      description: 'Градиме паметни форми и чет текови што собираат и квалификуваат потенцијални клиенти — автоматски испратени до вашиот CRM или email листа.',
      color: 'from-purple-500 to-indigo-600',
      link: '/mk/lead-funnel-automation',
    },
    {
      icon: Mail,
      title: 'Автоматизирани Email Кампањи и Билтени',
      description: 'Email текови базирани на тригери за вовед, продажба, задржување и објави — испратени без да крените прст.',
      color: 'from-orange-500 to-red-600',
      link: '/mk/email-automation',
    },
    {
      icon: Database,
      title: 'Backend API и CRM Интеграција',
      description: 'Ги поврзуваме сите ваши алатки: CRM-ови, форми, бази на податоци, системи за резервации, аналитички платформи — синхронизирани во реално време.',
      color: 'from-cyan-500 to-blue-600',
      link: '/mk/backend-integration',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Што <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Автоматизираме</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-sky-500/50 transition-all duration-500 hover:transform hover:scale-105 group ${
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
                  className="text-sky-400 font-semibold hover:text-sky-300 transition-colors duration-200 group-hover:translate-x-2 transition-transform inline-block"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Дознајте Повеќе →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};