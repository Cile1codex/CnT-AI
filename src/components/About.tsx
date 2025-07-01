import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            About Us
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-8">
            Smarter Systems. Real Results.
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              At CnT AI, we believe the best businesses don't run harder — they run smarter. Our mission is to help modern companies eliminate repetitive tasks, streamline their backend, and unlock scalable growth through tailored AI automation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We're not here to sell templates or plug-ins. We build intelligent, fully customized systems that solve real operational problems — from 24/7 chatbot support and lead capture funnels to backend API workflows, automated email flows, and CRM integrations.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're a startup scaling fast or an established business looking to reduce operational drag, CnT AI brings the tech and strategic thinking to make your entire system run smoother — with fewer people, fewer mistakes, and no wasted time.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              What Sets Us Apart
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-sky-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Real Automation, No Hype</h4>
                  <p className="text-slate-600">We don't automate for the sake of it. We solve for time, performance, and ROI.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Tailored Systems</h4>
                  <p className="text-slate-600">Every business is different. Our builds are customized to fit your exact backend logic and workflow.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Execution-Ready</h4>
                  <p className="text-slate-600">We move fast, and our tech works. Most clients start seeing impact within days of deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Built by Operators */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Built by Operators, for Operators
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We know what it's like to lose time to repetitive tasks and clunky systems. That's why we build platforms that run silently in the background — giving your team space to focus on what really matters: growth, sales, and strategy.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Automate the Boring Stuff</h3>
            <p className="text-sky-100 mb-6 text-lg">
              If it repeats, we automate it.
            </p>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
              Book a free consultation and discover what your business could do without manual bottlenecks slowing it down.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-sky-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              Book Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};