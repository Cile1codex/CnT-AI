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
      color: 'from-purple-500 to-indigo-600',
      caseStudyPath: '/case-study-automated-customer-support',
    },
    {
      icon: Truck,
      industry: 'Service Businesses',
      title: 'Lead Qualification & Booking',
      challenge: 'Inconsistent booking. Lost leads. Burnout.',
      solution: 'Smart forms + instant booking. 90% faster reply time. Zero missed inquiries.',
      results: ['50% more qualified leads', '90% faster response time', 'Zero missed opportunities'],
      color: 'from-teal-500 to-emerald-600',
      caseStudyPath: '/case-study-lead-qualification-booking',
    },
    {
      icon: Users,
      industry: 'Marketing Agencies',
      title: 'Client Onboarding Automation',
      challenge: 'Disjointed onboarding. Delayed contracts/payments.',
      solution: 'Automated kickoffs. 5x faster onboarding. Clean, consistent delivery.',
      results: ['5x faster onboarding', 'Consistent client experience', 'More time for strategy'],
      color: 'from-pink-500 to-rose-600',
      caseStudyPath: '/case-study-client-onboarding-automation',
    },
    {
      icon: Laptop,
      industry: 'Software-as-a-Service Companies',
      title: 'User Activation Flows',
      challenge: 'Low user activation. High churn. Support overload.',
      solution: 'Personalized onboarding. Email nurture sequences. 60% higher activation. 40% churn reduction.',
      results: ['60% higher activation', '40% churn reduction', 'Scalable growth'],
      color: 'from-yellow-500 to-orange-600',
      caseStudyPath: '/case-study-user-activation-flows',
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-teal-50 to-pink-50 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            Real-World <span className="bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how businesses across different industries are saving time and money with our AI automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.industry}
              className={`premium-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover-scale will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">{useCase.industry}</div>
                  <h3 className="text-xl font-bold text-slate-800">{useCase.title}</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-500 mb-2">Before</h4>
                  <p className="text-slate-600">{useCase.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-emerald-500 mb-2">After</h4>
                  <p className="text-slate-600">{useCase.solution}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link 
                  to={useCase.caseStudyPath}
                  className="text-purple-600 font-semibold hover:text-purple-500 transition-colors duration-200 hover:translate-x-2 transition-transform inline-block"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  See Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="cta-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Your Industry Next?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Every business has unique challenges. Let us show you how AI automation can solve yours with a personalized demo.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-purple-600 font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Let's Build Your Use Case Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};