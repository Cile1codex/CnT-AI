import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CEO, TechFlow Solutions',
      company: 'SaaS Startup',
      content: 'CnT AI transformed our customer onboarding process completely. What used to take our team 8 hours daily now runs automatically. Our activation rate increased by 40% and customer satisfaction is through the roof.',
      rating: 5,
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Operations Director',
      company: 'LogiCore Shipping',
      content: 'The route optimization AI they built for us is incredible. We\'re saving 30% on fuel costs and our delivery times improved by 25%. The ROI was evident within the first month.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Amanda Foster',
      title: 'Marketing Agency Owner',
      company: 'Digital Dynamics',
      content: 'Our team was spending 15+ hours weekly on client reports. Now it\'s completely automated and our clients love the real-time dashboards. We can focus on strategy instead of data entry.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            What Our <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders are saying about their automation success.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentTestimonial 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
                  <div className="flex items-center mb-8">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{testimonial.name}</h3>
                      <p className="text-slate-600">{testimonial.title}</p>
                      <p className="text-sm text-sky-600 font-semibold">{testimonial.company}</p>
                    </div>
                    <Quote className="w-8 h-8 text-sky-400 ml-auto" />
                  </div>

                  <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-3 text-slate-600 font-semibold">5.0/5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ensure proper height for the container */}
          <div className="opacity-0 pointer-events-none">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full mr-6"></div>
                <div>
                  <h3 className="text-xl font-bold">Placeholder</h3>
                  <p>Placeholder</p>
                  <p className="text-sm">Placeholder</p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed mb-6">
                Placeholder content for height calculation
              </blockquote>
              <div className="flex items-center">
                <div className="flex">{[...Array(5)].map((_, i) => <div key={i} className="w-5 h-5 mr-1"></div>)}</div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-sky-500 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Ready to see similar results in your business? Let's discuss how we can automate your success.
            </p>
            <button className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Share Your Success Story Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};