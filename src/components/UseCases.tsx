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
      industry: 'Real Estate Agency',
      title: 'Automated Customer Support',
      challenge: 'Manual responses, slow lead handling, lost deals.',
      solution: '24/7 chatbot + CRM routing. 70% less manual workload. 2x conversion rate from inbound traffic.',
      results: ['24/7 customer support', '70% reduction in support costs', '95% customer satisfaction'],
      color: 'from-yellow-500 to-orange-600',
      caseStudyPath: '/case-study-automated-customer-support',
    },
    {
      icon: Truck,
      industry: 'Service Businesses',
      title: 'Lead Qualification & Booking',
      challenge: 'Inconsistent booking. Lost leads. Burnout.',
      solution: 'Smart forms + instant booking. 90% faster reply time. Zero missed inquiries.',
      results: ['50% more qualified leads', '90% faster response time', 'Zero missed opportunities'],
      color: 'from-green-500 to-teal-600',
      caseStudyPath: '/case-study-lead-qualification-booking',
    },
    {
      icon: Users,
      industry: 'Marketing Agencies',
      title: 'Client Onboarding Automation',
      challenge: 'Disjointed onboarding. Delayed contracts/payments.',
      solution: 'Automated kickoffs. 5x faster onboarding. Clean, consistent delivery.',
      results: ['5x faster onboarding', 'Consistent client experience', 'More time for strategy'],
      color: 'from-pink-500 to-purple-600',
      caseStudyPath: '/case-study-client-onboarding-automation',
    },
    {
      icon: Laptop,
      industry: 'Software-as-a-Service Companies',
      title: 'User Activation Flows',
      challenge: 'Low user activation. High churn. Support overload.',
      solution: 'Personalized onboarding. Email nurture sequences. 60% higher activation. 40% churn reduction.',
      results: ['60% higher activation', '40% churn reduction', 'Scalable growth'],
      color: 'from-blue-500 to-indigo-600',
      caseStudyPath: '/case-study-user-activation-flows',
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
            Real-World <span className="bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-body">
            See how businesses across different industries are saving time and money with our AI automation solutions.
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
                  <h4 className="font-bold text-red-600 mb-4 text-lg">Before</h4>
                  <p className="text-slate-700 text-body">{useCase.challenge}</p>
                </div>

                <div>
                  <h4 className="font-bold text-green-600 mb-4 text-lg">After</h4>
                  <p className="text-slate-700 text-body">{useCase.solution}</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <Link 
                  to={useCase.caseStudyPath}
                  className="text-indigo-600 font-semibold hover:text-indigo-500 transition-colors duration-200 hover:translate-x-2 transition-transform inline-block text-lg"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  See Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="premium-card-yellow rounded-2xl p-12 border-2">
            <h3 className="text-hierarchy-3 text-slate-800 mb-6">Your Industry Next?</h3>
            <p className="text-slate-600 mb-10 max-w-3xl mx-auto text-body">
              Every business has unique challenges. Let us show you how AI automation can solve yours with a personalized demo.
            </p>
            <button 
              onClick={scrollToContact}
              className="premium-button-coral text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg"
            >
              Let's Build Your Use Case Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};