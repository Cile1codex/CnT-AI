import React, { useEffect, useState } from 'react';
import { Send, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    timeFrame: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest! We\'ll be in touch within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Automate Your Success</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can eliminate your time-consuming backend processes and boost your productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Book Your Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="timeFrame" className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline for Implementation
                  </label>
                  <select
                    id="timeFrame"
                    name="timeFrame"
                    value={formData.timeFrame}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 2 weeks)</option>
                    <option value="month">Within a month</option>
                    <option value="quarter">Within 3 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell Us About Your Automation Needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Describe the manual processes that are wasting your time..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" icon={Send}>
                  Schedule Free Consultation
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to transform your business operations? We're here to help you eliminate manual work 
                  and focus on what matters most - growing your business.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-sky-500/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Call Us</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email Us</div>
                    <div className="text-gray-300">hello@cntai.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Visit Us</div>
                    <div className="text-gray-300">San Francisco, CA</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Response Time</div>
                    <div className="text-gray-300">Within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-900/50 to-emerald-900/50 backdrop-blur-sm border border-sky-500/30 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-3">What Happens Next?</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    We analyze your current processes
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Create a custom automation plan
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Show you the potential ROI
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Start implementation within 48 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};