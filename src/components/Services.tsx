import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Globe, Users, Mail, Database, Bot } from 'lucide-react';

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
      title: '💬 AI Chatbots That Never Sleep',
      description: 'Custom-trained, brand-voiced, and built on your business logic. Support, sales, and lead capture—done without humans.',
      color: 'from-sky-500 to-blue-600',
      link: '/ai-chatbots',
    },
    {
      icon: Users,
      title: '🧲 Smart Lead Funnels',
      description: 'Interactive chat + forms that qualify leads, sort them based on logic, and route them directly to your CRM or calendar.',
      color: 'from-purple-500 to-indigo-600',
      link: '/lead-funnel-automation',
    },
    {
      icon: Mail,
      title: '📬 Automated Email Workflows',
      description: 'Welcome flows. Follow-ups. Retention. Everything sent at the perfect time—without writing another email manually.',
      color: 'from-orange-500 to-red-600',
      link: '/email-automation',
    },
    {
      icon: Globe,
      title: '🌐 Conversion Websites',
      description: 'Built from scratch with automation baked in. Designed to turn traffic into booked calls—not bounce rates.',
      color: 'from-emerald-500 to-teal-600',
      link: '/conversion-websites',
    },
    {
      icon: Database,
      title: '🔗 CRM + Tool Integration',
      description: 'APIs. Zapier. Webhooks. Direct connects. All your backend tools synced into one clean, responsive machine.',
      color: 'from-cyan-500 to-blue-600',
      link: '/backend-integration',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What We <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Automate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  Learn More →
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
            className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            📞 Book Your Free Automation Audit
          </button>
        </div>
      </div>
    </section>
  );
};