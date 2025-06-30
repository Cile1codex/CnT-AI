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
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Built for Businesses That Want to <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Scale Smarter</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              CnT AI is a modern automation agency focused on eliminating repetitive tasks for businesses that want to grow. We design intelligent systems that streamline operations, reduce human error, and keep your business running on autopilot.
            </p>
            <p className="text-lg text-slate-700 font-medium">
              From startups to agencies to online stores — if it repeats, we automate it.
            </p>
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <Zap className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Ready to Automate and Grow?</h3>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Let's build a system that saves you time, reduces stress, and keeps working while you sleep.
            </p>
            <button className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};