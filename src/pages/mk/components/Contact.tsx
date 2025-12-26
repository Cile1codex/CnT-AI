import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { supabase, type ConsultationRequest } from '../../../lib/supabase';

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
              setErrors(prev => ({ ...prev, recaptcha: 'reCAPTCHA истече. Ве молиме верификувајте повторно.' }));
            },
            'error-callback': () => {
              // Handle reCAPTCHA error
              setErrors(prev => ({ ...prev, recaptcha: 'reCAPTCHA грешка. Ве молиме обидете се повторно.' }));
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
      newErrors.privacyAccepted = 'Морате да се согласите со Политиката за Приватност за да продолжите.';
      hasErrors = true;
    }
    
    // Validate reCAPTCHA
    const recaptchaResponse = window.grecaptcha?.getResponse(recaptchaWidgetIdRef.current || undefined);
    if (!recaptchaResponse) {
      newErrors.recaptcha = 'Ве молиме завршете ја reCAPTCHA верификацијата.';
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
      if (supabase) {
        const { error } = await supabase
          .from('consultations')
          .insert([consultationData]);

        if (error) {
          throw error;
        }
      } else {
        console.log('Form data:', consultationData);
      }

      // Success! Show success message and reset form
      setSubmitSuccess(true);
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
      setErrors(prev => ({
        ...prev,
        submission: 'Имаше грешка при испраќањето на вашето барање. Ве молиме обидете се повторно.'
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
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            Имате Прашања или <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Деловни Барања</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontSize: '20px' }}>
            Ако имате дополнителни прашања или сакате да не контактирате директно, слободно контактирајте не:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Резервирајте Ја Вашата Бесплатна Консултација</h3>
              
              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-6 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <h4 className="text-emerald-800 font-bold text-lg mb-3">Што Се Случува Откако Ќе Ја Поднесете Формата?</h4>
                  <div className="space-y-2 text-emerald-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span style={{ fontSize: '16px' }}>Ги прегледуваме вашите работни текови</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span style={{ fontSize: '16px' }}>Ги идентификуваме вашите најголеми тесни грла</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span style={{ fontSize: '16px' }}>Ви покажуваме што можеме да автоматизираме веднаш</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span style={{ fontSize: '16px' }}>Го лансираме вашиот прв систем—често во рок од 48–72 часа</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-emerald-100 rounded-lg">
                    <p className="text-emerald-800 font-medium" style={{ fontSize: '16px' }}>
                      Веќе не погодувате. Не сте заглавени во истражување алатки и спојување работи.
                    </p>
                    <p className="text-emerald-800 font-medium mt-2" style={{ fontSize: '16px' }}>
                      Го најдовте тимот што ја гради машината за вас. Тивко. Моќно. Брзо.
                    </p>
                  </div>
                  <div className="mt-4 text-center">
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="bg-emerald-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                      style={{ fontSize: '18px' }}
                    >
                      Да Разговараме – Резервирајте Го Вашиот Бесплатен Повик Сега
                    </button>
                  </div>
                </div>
              )}
              
              {/* Submission Error */}
              {errors.submission && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    {errors.submission}
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Полно Име *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                      placeholder="Вашето име"
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Адреса *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                      placeholder="vashe@email.com"
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Име на Компанија
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                    placeholder="Вашата компанија"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Кажете Ни За Вашите Потреби за Автоматизација *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                    placeholder="Опишете ги мануелните процеси што ви го губат времето..."
                    style={{ fontSize: '16px' }}
                  />
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="space-y-2">
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
                      className={`mt-1 h-4 w-4 text-sky-600 border-2 rounded focus:ring-sky-500 focus:ring-2 transition-colors duration-200 disabled:opacity-50 ${
                        errors.privacyAccepted ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    <label htmlFor="privacyAccepted" className="ml-3 text-sm text-slate-700 leading-relaxed">
                      Ја прочитав и се согласувам со{' '}
                      <Link
                        to="/mk/privacy-policy"
                        className="text-slate-600 hover:text-sky-400 transition-colors duration-200"
                      >
                        Политиката за Приватност
                      </Link>
                    </label>
                  </div>
                  {errors.privacyAccepted && (
                    <p id="privacy-error" className="text-red-600 text-sm font-medium" role="alert">
                      {errors.privacyAccepted}
                    </p>
                  )}
                </div>

                {/* reCAPTCHA */}
                <div className="space-y-2">
                  <div 
                    id="recaptcha-container" 
                    className={`flex justify-center ${errors.recaptcha ? 'border-2 border-red-500 rounded-lg p-2' : ''}`}
                  ></div>
                  {errors.recaptcha && (
                    <p className="text-red-600 text-sm font-medium text-center" role="alert">
                      {errors.recaptcha}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className={`w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} 
                  icon={Send}
                  onClick={undefined}
                >
                  {isSubmitting ? 'Се испраќа...' : 'Резервирајте Го Вашиот Бесплатен Стратешки Повик Денес'}
                </Button>

                {/* reCAPTCHA Notice */}
                <p className="text-xs text-slate-500 text-center leading-relaxed">
                  Оваа страница е заштитена со reCAPTCHA и се применуваат Google{' '}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-sky-400 transition-colors duration-200"
                  >
                    Политика за Приватност
                  </a>{' '}
                  и{' '}
                  <a 
                    href="https://policies.google.com/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-sky-400 transition-colors duration-200"
                  >
                    Услови за Користење
                  </a>.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Контактирајте Не</h3>
                <p className="text-slate-600 text-lg leading-relaxed" style={{ fontSize: '16px' }}>
                  Ќе ја мапираме вашата можност за автоматизација со најголем ROI—и ќе ви покажеме колку брзо можеме да ја лансираме.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-sky-500/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-slate-800 font-semibold">Повикајте Не</div>
                    <div className="text-slate-600" style={{ fontSize: '16px' }}>+389 70 699 636</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-slate-800 font-semibold">Испратете Email</div>
                    <div className="text-slate-600">
                      <a
                        href="mailto:solutions@ttgai.org"
                        className="hover:text-emerald-600 transition-colors duration-200"
                        style={{ fontSize: '16px' }}
                      >
                        solutions@ttgai.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-slate-800 font-semibold">Базирани во</div>
                    <div className="text-slate-600" style={{ fontSize: '16px' }}>Скопје, Северна Македонија</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-slate-800 font-semibold">Време на Одговор</div>
                    <div className="text-slate-600" style={{ fontSize: '16px' }}>Во рок од 24 часа</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-6 text-white">
                <h4 className="text-white font-bold mb-3">Што Следи?</h4>
                <div className="space-y-2 text-sky-100 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span style={{ fontSize: '16px' }}>Ги прегледуваме вашите работни текови</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span style={{ fontSize: '16px' }}>Ги идентификуваме вашите најголеми тесни грла</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span style={{ fontSize: '16px' }}>Ви покажуваме што можеме да автоматизираме веднаш</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span style={{ fontSize: '16px' }}>Го лансираме вашиот прв систем—често во рок од 48–72 часа</span>
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