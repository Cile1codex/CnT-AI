import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { Toast } from './ui/Toast';
import { useToast } from '../hooks/useToast';
import { supabase, type ConsultationRequest } from '../lib/supabase';

// Declare global grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      render: (container: string | Element, parameters: any) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
      execute: (widgetId?: number) => void;
    };
  }
}

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const recaptchaWidgetIdRef = useRef<number | null>(null);
  const { toast, showToast, hideToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    privacyAccepted: false,
  });
  const [errors, setErrors] = useState({
    privacyAccepted: '',
    recaptcha: '',
    submission: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  useEffect(() => {
    // Initialize reCAPTCHA when the API is fully loaded
    const initRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render && recaptchaWidgetIdRef.current === null) {
        try {
          // Clear any existing content in the container before rendering
          const container = document.getElementById('recaptcha-container');
          if (container) {
            container.innerHTML = '';
          }
          
          const widgetId = window.grecaptcha.render('recaptcha-container', {
            sitekey: '6Lc0_3IrAAAAAAQdJ98YcfxXp4Ebve7HWsysMNCu',
            theme: 'light',
            size: 'normal',
            callback: () => {
              // Clear reCAPTCHA error when user completes it
              setErrors(prev => ({ ...prev, recaptcha: '' }));
            },
            'expired-callback': () => {
              // Handle expired reCAPTCHA
              setErrors(prev => ({ ...prev, recaptcha: 'reCAPTCHA has expired. Please verify again.' }));
            },
            'error-callback': () => {
              // Handle reCAPTCHA error
              setErrors(prev => ({ ...prev, recaptcha: 'reCAPTCHA error. Please try again.' }));
            }
          });
          recaptchaWidgetIdRef.current = widgetId;
        } catch (error) {
          console.error('Error initializing reCAPTCHA:', error);
        }
      }
    };

    // Listen for the custom recaptchaLoaded event
    const handleRecaptchaLoad = () => {
      initRecaptcha();
    };

    // Check if reCAPTCHA is already loaded
    if (window.grecaptcha && window.grecaptcha.render) {
      initRecaptcha();
    } else {
      // Listen for the recaptchaLoaded event
      window.addEventListener('recaptchaLoaded', handleRecaptchaLoad);
    }

    // Cleanup function
    return () => {
      window.removeEventListener('recaptchaLoaded', handleRecaptchaLoad);
      
      // Reset reCAPTCHA widget when component unmounts
      if (window.grecaptcha && recaptchaWidgetIdRef.current !== null) {
        try {
          window.grecaptcha.reset(recaptchaWidgetIdRef.current);
        } catch (error) {
          console.error('Error resetting reCAPTCHA:', error);
        }
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({ privacyAccepted: '', recaptcha: '', submission: '' });
    setSubmitSuccess(false);
    
    let hasErrors = false;
    const newErrors = { privacyAccepted: '', recaptcha: '', submission: '' };
    
    // Validate required fields
    if (!formData.name.trim()) {
      hasErrors = true;
    }
    
    if (!formData.email.trim()) {
      hasErrors = true;
    }
    
    if (!formData.message.trim()) {
      hasErrors = true;
    }
    
    // Validate privacy policy checkbox
    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'You must agree to the Privacy Policy to continue.';
      hasErrors = true;
    }
    
    // Validate reCAPTCHA
    const recaptchaResponse = window.grecaptcha?.getResponse(recaptchaWidgetIdRef.current || undefined);
    if (!recaptchaResponse) {
      newErrors.recaptcha = 'Please complete the reCAPTCHA verification.';
      hasErrors = true;
    }
    
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for Supabase
      const consultationData: Omit<ConsultationRequest, 'id' | 'submitted_at'> = {
        full_name: formData.name.trim(),
        email: formData.email.trim(),
        company_name: formData.company.trim() || null,
        automation_needs: formData.message.trim(),
        policy_accepted: formData.privacyAccepted,
      };
      
      // Insert into Supabase
      const { error } = await supabase
        .from('consultations')
        .insert([consultationData]);
      
      if (error) {
        throw error;
      }
      
      // Success! Show success message and reset form
      setSubmitSuccess(true);
      showToast('Your consultation request has been submitted successfully!', 'success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        privacyAccepted: false,
      });
      
      // Reset reCAPTCHA
      if (window.grecaptcha && recaptchaWidgetIdRef.current !== null) {
        window.grecaptcha.reset(recaptchaWidgetIdRef.current);
      }
      
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      showToast('There was an error submitting your request. Please try again.', 'error');
      setErrors(prev => ({ 
        ...prev, 
        submission: 'There was an error submitting your request. Please try again.' 
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error when user checks the checkbox
    if (name === 'privacyAccepted' && checked) {
      setErrors(prev => ({ ...prev, privacyAccepted: '' }));
    }
    
    // Clear submission error when user starts typing
    if (errors.submission) {
      setErrors(prev => ({ ...prev, submission: '' }));
    }
  };

  return (
    <>
      <section id="contact" className="py-24 section-professional relative overflow-hidden">
        {/* Floating Logo Symbols */}
        <div className="floating-logo"></div>
        <div className="floating-logo"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-hierarchy-2 text-white mb-8 tracking-tight">
              Have Questions or <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">Business Inquiries</span>?
            </h2>
            <p className="text-blue-100 max-w-4xl mx-auto text-body">
              If you have additional questions or want to reach us directly, feel free to get in touch:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="premium-card rounded-2xl p-10 border-2 border-indigo-200">
                <h3 className="text-hierarchy-3 text-slate-800 mb-8">Book Your Free Consultation</h3>
                
                {/* Success Message */}
                {submitSuccess && (
                  <div className="mb-8 premium-card-green rounded-xl p-8 border-2 border-green-300 animate-fade-in-scale">
                    <h4 className="text-green-800 font-bold text-xl mb-6">What Happens After You Submit the Form?</h4>
                    <div className="space-y-4 text-green-700">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                        <span className="text-body">We review your workflows</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                        <span className="text-body">Identify your biggest bottlenecks</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                        <span className="text-body">Show you what we can automate immediately</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                        <span className="text-body">Launch your first system—often within 48–72 hours</span>
                      </div>
                    </div>
                    <div className="mt-6 premium-card-yellow rounded-lg p-6">
                      <p className="text-slate-800 font-semibold text-body mb-4">
                        You're no longer guessing. You're not stuck researching tools and patching things together.
                      </p>
                      <p className="text-slate-800 font-semibold text-body">
                        You've just found the team that builds the machine for you. Quietly. Powerfully. Fast.
                      </p>
                    </div>
                    <div className="mt-6 text-center">
                      <button 
                        onClick={() => setSubmitSuccess(false)}
                        className="premium-button-coral text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg hover-scale"
                      >
                        Let's Talk – Book Your Free Call Now
                      </button>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 text-body hover:border-indigo-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 text-body hover:border-indigo-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 text-body hover:border-indigo-300"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                      Tell Us About Your Automation Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 text-body hover:border-indigo-300"
                      placeholder="Describe the manual processes that are wasting your time..."
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacyAccepted"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        aria-describedby="privacy-error"
                        className={`mt-1 h-5 w-5 text-indigo-600 border-2 rounded focus:ring-indigo-500 focus:ring-2 transition-colors duration-200 disabled:opacity-50 ${
                          errors.privacyAccepted ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      <label htmlFor="privacyAccepted" className="ml-4 text-slate-700 leading-relaxed text-body">
                        I have read and agree to the{' '}
                        <Link
                          to="/privacy-policy"
                          className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200 font-semibold"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    {errors.privacyAccepted && (
                      <p id="privacy-error" className="text-red-600 font-semibold animate-slide-in-left" role="alert">
                        {errors.privacyAccepted}
                      </p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  <div className="space-y-3">
                    <div 
                      id="recaptcha-container" 
                      className={`flex justify-center ${errors.recaptcha ? 'border-2 border-red-500 rounded-xl p-4' : ''}`}
                    ></div>
                    {errors.recaptcha && (
                      <p className="text-red-600 font-semibold text-center animate-slide-in-left" role="alert">
                        {errors.recaptcha}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className={`w-full premium-button text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover-scale'}`} 
                    icon={Send}
                    onClick={undefined}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="loading-dots mr-2">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                        Submitting...
                      </span>
                    ) : (
                      'Book Your Free Strategy Call Today'
                    )}
                  </Button>

                  {/* reCAPTCHA Notice */}
                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a 
                      href="https://policies.google.com/terms" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                    >
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-10">
                <div>
                  <h3 className="text-hierarchy-3 text-white mb-8">Get In Touch</h3>
                  <p className="text-blue-100 leading-relaxed text-body">
                    We'll map your highest-ROI automation opportunity—and show you how fast we can launch it.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="premium-card rounded-xl p-6 hover-lift will-change-transform">
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-4 rounded-xl mr-6">
                        <Phone className="h-8 w-8 text-indigo-600 icon-hover" />
                      </div>
                      <div>
                        <div className="text-slate-800 font-bold text-lg">Call Us</div>
                        <div className="text-slate-600 text-body">+389 78 508 690</div>
                        <div className="text-slate-600 text-body">+389 70 699 636</div>
                      </div>
                    </div>
                  </div>

                  <div className="premium-card rounded-xl p-6 hover-lift will-change-transform">
                    <div className="flex items-center">
                      <div className="bg-teal-100 p-4 rounded-xl mr-6">
                        <Mail className="h-8 w-8 text-teal-600 icon-hover" />
                      </div>
                      <div>
                        <div className="text-slate-800 font-bold text-lg">Email Us</div>
                        <div className="text-slate-600">
                          <a 
                            href="mailto:ilekostadinov15@gmail.com" 
                            className="hover:text-teal-600 transition-colors duration-200 text-body"
                          >
                            ilekostadinov15@gmail.com
                          </a>
                        </div>
                        <div className="text-slate-600">
                          <a 
                            href="mailto:matej.tasevski11@gmail.com" 
                            className="hover:text-teal-600 transition-colors duration-200 text-body"
                          >
                            matej.tasevski11@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="premium-card rounded-xl p-6 hover-lift will-change-transform">
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-4 rounded-xl mr-6">
                        <MapPin className="h-8 w-8 text-purple-600 icon-hover" />
                      </div>
                      <div>
                        <div className="text-slate-800 font-bold text-lg">Based in</div>
                        <div className="text-slate-600 text-body">Skopje, North Macedonia</div>
                      </div>
                    </div>
                  </div>

                  <div className="premium-card rounded-xl p-6 hover-lift will-change-transform">
                    <div className="flex items-center">
                      <div className="bg-pink-100 p-4 rounded-xl mr-6">
                        <Calendar className="h-8 w-8 text-pink-600 icon-hover" />
                      </div>
                      <div>
                        <div className="text-slate-800 font-bold text-lg">Response Time</div>
                        <div className="text-slate-600 text-body">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="premium-card-yellow rounded-2xl p-8 border-2 animate-fade-in-scale">
                  <h4 className="text-slate-800 font-bold text-xl mb-6">What Happens Next?</h4>
                  <div className="space-y-4 text-slate-700">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-600 rounded-full mr-4"></div>
                      <span className="text-body">We review your workflows</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-600 rounded-full mr-4"></div>
                      <span className="text-body">Identify your biggest bottlenecks</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-600 rounded-full mr-4"></div>
                      <span className="text-body">Show you what we can automate immediately</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-600 rounded-full mr-4"></div>
                      <span className="text-body">Launch your first system—often within 48–72 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
};