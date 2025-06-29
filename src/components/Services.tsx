import React, { useEffect, useState } from 'react';
import { MessageSquare, Workflow, Database, Mail, ShoppingCart, BarChart3 } from 'lucide-react';

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
      title: 'AI Chatbot Automation',
      description: 'Intelligent customer service bots that handle inquiries 24/7, reducing support costs by up to 70%.',
      features: ['Multi-platform integration', 'Natural language processing', 'Escalation protocols'],
      color: 'from-sky-500 to-blue-600',
    },
    {
      icon: Workflow,
      title: 'Backend API Workflows',
      description: 'Automated data processing pipelines that connect your systems and eliminate manual data entry.',
      features: ['Real-time data sync', 'Error handling', 'Custom integrations'],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Smart CRM automation that captures leads, nurtures prospects, and tracks customer interactions.',
      features: ['Lead scoring', 'Automated follow-ups', 'Pipeline management'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Personalized email campaigns that engage customers at scale with AI-driven content.',
      features: ['Behavioral triggers', 'A/B testing', 'Performance analytics'],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Automation',
      description: 'Order processing, inventory management, and customer service automation for online stores.',
      features: ['Inventory tracking', 'Order fulfillment', 'Return processing'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Automated reporting dashboards that provide real-time insights into your business metrics.',
      features: ['Custom dashboards', 'Automated alerts', 'Predictive analytics'],
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">AI Automation Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive suite of AI-powered automation solutions.
          </p>
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

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <button className="text-sky-400 font-semibold hover:text-sky-300 transition-colors duration-200 group-hover:translate-x-2 transition-transform">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-900/50 to-emerald-900/50 backdrop-blur-sm border border-sky-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions Available</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't see exactly what you need? We specialize in building custom AI automation solutions tailored to your unique business requirements.
            </p>
            <button className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105">
              Discuss Custom Solution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};