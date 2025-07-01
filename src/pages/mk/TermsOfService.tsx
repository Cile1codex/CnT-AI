import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '../../components/Logo';

export const MacedonianTermsOfService: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
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
              to="/mk"
              className="flex items-center text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад кон Почетна
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Услови за Користење</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              <strong>Датум на Важење:</strong> 1 јануари, 2025
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-8">
              Овие Услови за Користење ("Услови") го регулираат вашето користење на нашата веб-страница и услуги. Со користењето на нашата страница, се согласувате со овие Услови и нашата Политика за Приватност.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Прифаќање</h2>
              <p className="text-slate-700 leading-relaxed">
                Користењето на оваа веб-страница означува прифаќање на овие Услови.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Понудени Услуги</h2>
              <p className="text-slate-700 leading-relaxed">
                CnT AI обезбедува АИ автоматизација, чатботови, автоматизирани веб-страници, backend интеграции и поврзани услуги.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Одговорности на Корисникот</h2>
              <p className="text-slate-700 leading-relaxed">
                Се согласувате да не се ангажирате во незаконско однесување, злоупотреба на нашите системи или поднесување лажни информации.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Интелектуална Сопственост</h2>
              <p className="text-slate-700 leading-relaxed">
                Сиот содржај на страницата е во сопственост на CnT AI. Репродукцијата или неовластената употреба е забранета.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Одрекувања и Ограничувања</h2>
              <p className="text-slate-700 leading-relaxed">
                Услугата се обезбедува "како што е". Не сме одговорни за штети, загуби или прекини. Максималната одговорност е ограничена на таксите за услуги платени во последните 6 месеци, ако има такви.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Прекинување</h2>
              <p className="text-slate-700 leading-relaxed">
                Можеме да го ограничиме пристапот или да ги прекинеме сметките што ги прекршуваат нашите услови или злоупотребуваат услугата.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Применливо Право</h2>
              <p className="text-slate-700 leading-relaxed">
                Овие Услови се регулирани од законите на Соединетите Американски Држави.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Промени во Условите</h2>
              <p className="text-slate-700 leading-relaxed">
                Можеме да ги модифицираме овие Услови во секое време. Продолженото користење означува прифаќање.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Контакт</h2>
              <div className="text-slate-700 leading-relaxed">
                <p><strong>Email:</strong> hello@cnt-ai.com</p>
                <p><strong>Веб-страница:</strong> https://cnt-ai.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};