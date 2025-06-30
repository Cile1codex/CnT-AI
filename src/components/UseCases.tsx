import React, { useEffect, useState } from 'react';
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
      industry: 'E-commerce & Retail',
      title: 'Automated Customer Support',
      challenge: 'Overwhelming customer inquiries and support tickets',
      solution: 'AI chatbots handling 80% of customer questions automatically',
      results: ['24/7 customer support', '70% reduction in support costs', '95% customer satisfaction'],
      color: 'from-sky-500 to-blue-600',
    },
    {
      icon: Truck,
      industry: 'Service Businesses',
      title: 'Lead Qualification & Booking',
      challenge: 'Manual lead follow-up and appointment scheduling',
      solution: 'Automated lead capture with smart qualification and booking flows',
      results: ['50% more qualified leads', '90% faster response time', 'Zero missed opportunities'],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Users,
      industry: 'Marketing Agencies',
      title: 'Client Onboarding Automation',
      challenge: 'Time-consuming manual client onboarding processes',
      solution: 'Automated workflows for contracts, payments, and project kickoffs',
      results: ['5x faster onboarding', 'Consistent client experience', 'More time for strategy'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Laptop,
      industry: 'SaaS Companies',
      title: 'User Activation Flows',
      challenge: 'Low user activation and high churn rates',
      solution: 'Intelligent onboarding sequences with personalized guidance',
      results: ['60% higher activation', '40% churn reduction', 'Scalable growth'],
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Real-World <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how businesses across different industries are saving time and money with our AI automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.industry}
              className={`bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-sky-500/50 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">{useCase.industry}</div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">❌ The Challenge</h4>
                  <p className="text-gray-300">{useCase.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-400 mb-2">🔧 Our Solution</h4>
                  <p className="text-gray-300">{useCase.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-emerald-400 mb-3">✅ Results Achieved</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        <span className="text-gray-300 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <button className="text-sky-400 font-semibold hover:text-sky-300 transition-colors duration-200">
                  See Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Your Industry Next?</h3>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Every business has unique challenges. Let us show you how AI automation can solve yours with a personalized demo.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};