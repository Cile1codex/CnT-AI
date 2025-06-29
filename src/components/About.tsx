import React, { useEffect, useState } from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

export const About: React.FC = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">CnT AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded by automation experts who understand the pain of manual processes firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-6">Meet Our Founders: Cile & Tase</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                After spending years watching businesses lose countless hours to repetitive backend tasks, 
                Cile and Tase founded CnT AI with a simple mission: make AI automation accessible to every business.
              </p>
              <p>
                With combined experience of 15+ years in software development and business automation, 
                they've helped over 200 companies eliminate manual work and focus on what matters most - growth.
              </p>
              <p>
                Their approach is simple: understand your pain points, build custom solutions, and deliver 
                measurable results fast.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700">
                <div className="text-3xl font-bold text-sky-400 mb-2">200+</div>
                <div className="text-gray-300 text-sm">Businesses Automated</div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700">
                <div className="text-3xl font-bold text-emerald-400 mb-2">10K+</div>
                <div className="text-gray-300 text-sm">Hours Saved Monthly</div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700">
                <div className="text-3xl font-bold text-orange-400 mb-2">99%</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'Eliminate time-wasting manual processes so businesses can focus on innovation and growth.',
              color: 'text-sky-400',
            },
            {
              icon: Users,
              title: 'Our Approach',
              description: 'We partner with you, not just serve you. Your success is our success.',
              color: 'text-emerald-400',
            },
            {
              icon: Award,
              title: 'Our Promise',
              description: 'Deliver measurable results within 30 days or work until you see the ROI you deserve.',
              color: 'text-purple-400',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-sky-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <item.icon className={`h-12 w-12 ${item.color} mx-auto mb-4`} />
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-900/50 to-emerald-900/50 backdrop-blur-sm border border-sky-500/30 rounded-2xl p-8">
            <Zap className="h-16 w-16 text-sky-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate Your Success?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the growing community of businesses that trust CnT AI to handle their automation needs.
            </p>
            <button className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105">
              Start Your Automation Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};