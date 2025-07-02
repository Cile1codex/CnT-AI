import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Globe, Users, Mail, Database } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

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
      title: 'AI Chatbots That Never Sleep',
      description: 'Custom-trained, brand-voiced, and built on your business logic. Support, sales, and lead capture—done without humans.',
      color: 'from-indigo-500 to-purple-600',
      link: '/ai-chatbots',
    },
    {
      icon: Users,
      title: 'Smart Lead Funnels',
      description: 'Interactive chat + forms that qualify leads, sort them based on logic, and route them directly to your CRM or calendar.',
      color: 'from-purple-500 to-pink-600',
      link: '/lead-funnel-automation',
    },
    {
      icon: Mail,
      title: 'Automated Email Workflows',
      description: 'Welcome flows. Follow-ups. Retention. Everything sent at the perfect time—without writing another email manually.',
      color: 'from-pink-500 to-red-600',
      link: '/email-automation',
    },
    {
      icon: Globe,
      title: 'Conversion Websites',
      description: 'Built from scratch with automation baked in. Designed to turn traffic into booked calls—not bounce rates.',
      color: 'from-teal-500 to-green-600',
      link: '/conversion-websites',
    },
    {
      icon: Database,
      title: 'CRM + Tool Integration',
      description: 'APIs. Zapier. Webhooks. Direct connects. All your backend tools synced into one clean, responsive machine.',
      color: 'from-blue-500 to-teal-600',
      link: '/backend-integration',
    },
  ];

  return (
    <section id="services" className="py-24 services-gradient relative overflow-hidden">
      {/* Floating Logo Symbols */}
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>
      <div className="floating-logo"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animationType="slideUp" className="text-center mb-20">
          <h2 className="text-hierarchy-2 text-white mb-8 tracking-tight">
            What We <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">Automate</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animationType="slideUp"
              delay={index * 150}
              className="premium-card-dark rounded-2xl p-10 border-2 border-purple-500/30 hover-scale group will-change-transform"
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
                  Learn More →
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animationType="slideUp" delay={800} className="text-center">
          <button 
            onClick={scrollToContact}
            className="premium-button-yellow text-slate-800 font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg"
          >
            Book Your Free Automation Audit
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};