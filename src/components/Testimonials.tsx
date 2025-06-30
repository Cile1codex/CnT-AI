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
      name: 'Milan',
      title: 'Founder',
      company: 'FlowPort',
      content: 'CnT AI helped us cut out over 4 hours of manual work every day. Our chatbot is like an extra employee — without the overhead.',
      rating: 5,
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Ana',
      title: 'COO',
      company: 'Nexstore',
      content: 'Our operations used to be messy. Now everything runs cleanly in the background, fully automated and connected. Huge time saver.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Clients Are Saying</span>
          </h2>
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
                <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
                  <div className="flex items-center mb-8">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray-300">{testimonial.title}</p>
                      <p className="text-sm text-sky-400 font-semibold">@ {testimonial.company}</p>
                    </div>
                    <Quote className="w-8 h-8 text-sky-400 ml-auto" />
                  </div>

                  <blockquote className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-3 text-gray-400 font-semibold">5.0/5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ensure proper height for the container */}
          <div className="opacity-0 pointer-events-none">
            <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
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
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};