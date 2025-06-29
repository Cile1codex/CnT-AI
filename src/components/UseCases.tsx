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

  const useCases = [
    {
      icon: Store,
      industry: 'Retail & E-commerce',
      title: 'Automated Order Management',
      challenge: 'Manual order processing taking 5+ hours daily',
      solution: 'AI-powered order routing, inventory updates, and customer notifications',
      results: ['80% faster order processing', '99.5% accuracy rate', '$50K+ annual savings'],
      color: 'from-sky-500 to-blue-600',
    },
    {
      icon: Truck,
      industry: 'Logistics & Supply Chain',
      title: 'Smart Route Optimization',
      challenge: 'Inefficient delivery routes and manual scheduling',
      solution: 'AI route planning with real-time traffic and weather data',
      results: ['30% reduction in fuel costs', '25% faster deliveries', '90% customer satisfaction'],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Users,
      industry: 'Marketing Agencies',
      title: 'Client Reporting Automation',
      challenge: 'Teams spending 15+ hours weekly on manual reports',
      solution: 'Automated data collection and beautiful client dashboards',
      results: ['95% time savings', 'Real-time insights', 'Higher client retention'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Laptop,
      industry: 'SaaS Startups',
      title: 'Customer Onboarding Flow',
      challenge: 'High churn due to complex manual onboarding',
      solution: 'Intelligent onboarding sequences with personalized guidance',
      results: ['40% higher activation', '60% churn reduction', 'Scalable growth'],
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Real-World <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how businesses across different industries are saving time and money with our AI automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.industry}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-transparent hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 mb-1">{useCase.industry}</div>
                  <h3 className="text-xl font-bold text-slate-800">{useCase.title}</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">❌ The Challenge</h4>
                  <p className="text-slate-600">{useCase.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-600 mb-2">🔧 Our Solution</h4>
                  <p className="text-slate-600">{useCase.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-emerald-600 mb-3">✅ Results Achieved</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <button className="text-sky-600 font-semibold hover:text-sky-700 transition-colors duration-200">
                  See Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Your Industry Next?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Every business has unique challenges. Let us show you how AI automation can solve yours with a personalized demo.
            </p>
            <button className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105">
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};