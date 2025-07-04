import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Logo } from '../../components/Logo';

export const MacedonianCaseStudyLeadQualificationBooking: React.FC = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate('/mk#contact');
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-blue-50 w-full overflow-x-hidden">
      {/* Floating Particles */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/mk" className="flex items-center group">
              <Logo size="md" className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                CnT AI
              </span>
            </Link>
            <Link
              to="/mk#use-cases"
              className="flex items-center text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад кон Приказни за Успех
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="premium-card rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-emerald-500 mr-3" />
                <span className="text-emerald-600 font-semibold text-lg">Студија на Случај</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Квалификација на Потенцијални Клиенти и Резервации
              </h1>
              <div className="text-slate-600 text-lg">
                <span className="font-semibold">Клиент:</span> ServiceNow Co. 
                <span className="text-slate-400 mx-2">•</span>
                <span className="text-emerald-600">Професионални Услуги</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 hover-scale will-change-transform">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                Предизвикот
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                Тимот во ServiceNow мануелно ги следеше потенцијалните клиенти преку email. Закажувањето термини беше бавно и неконзистентно, а неквалификуваните потенцијални клиенти губеа време.
              </p>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🔧</span>
                Нашето Решение
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                CnT AI дизајнираше паметен тек за заробување потенцијални клиенти со:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">Интерактивни форми за квалификување потенцијални клиенти во реално време</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">Автоматизирана интеграција на календар за резервации</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">Email потсетници + секвенци за следење</span>
                </li>
              </ul>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                Постигнати Резултати
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">50% зголемување во квалификувани потенцијални клиенти</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">90% подобрување во време на одговор</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Нула пропуштени откривачки повици во првиот месец</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">2x зголемување во резервирани средби</span>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Готови да Го Пополните Вашиот Календар со Квалификувани Потенцијални Клиенти?</h3>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Да изградиме интелигентен систем за квалификување потенцијални клиенти што автоматски резервира средби со вашите идеални потенцијални клиенти додека ги филтрира губителите на време.
                </p>
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 premium-button"
                >
                  Резервирајте Ја Вашата Бесплатна Консултација
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};