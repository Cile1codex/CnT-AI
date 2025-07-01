import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '../../components/Logo';

export const MacedonianPrivacyPolicy: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Политика за Приватност</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              <strong>Датум на Важење:</strong> 1 јануари, 2025
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-8">
              CnT AI ("ние", "нас", "наше") управува со https://cnt-ai.com ("Услуга"). Вашата приватност и доверба се многу важни за нас. Оваа изјава објаснува кои податоци ги собираме, зошто ги собираме, како ги користиме и вашите права.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Информации што ги Собираме</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Лични Податоци:</strong> Име, email, име на компанија и детали за барањето.</li>
                <li><strong>Технички Податоци:</strong> IP адреса, информации за прелистувач/уред, посетени страници, URL-ови на упатувачи.</li>
                <li><strong>Колачиња:</strong> Користиме колачиња и технологии за следење за управување со сесии, аналитика и корисничко искуство.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Како ги Користиме Вашите Податоци</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Одговараме на барања</li>
                <li>Ги подобруваме перформансите на страницата</li>
                <li>Испраќаме комуникации (ако сте се пријавиле)</li>
                <li>Обезбедуваме правна усогласеност и безбедни операции</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Споделување на Податоци</h2>
              <p className="text-slate-700 leading-relaxed">
                Не ги продаваме или изнајмуваме вашите податоци. Можеме да споделиме информации со доверливи давателите на услуги (на пр. хостинг, CRM) или со властите кога е правно потребно.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Меѓународни Трансфери на Податоци</h2>
              <p className="text-slate-700 leading-relaxed">
                Ако е применливо, вашите податоци можат да се обработуваат надвор од вашата локална јурисдикција. Користиме безбедни, усогласени практики за податоци.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Безбедност</h2>
              <p className="text-slate-700 leading-relaxed">
                Ги следиме најдобрите практики во индустријата, вклучувајќи енкрипција и безбедно складирање. Сепак, ниеден систем не е 100% безбеден.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Вашите Права</h2>
              <p className="text-slate-700 leading-relaxed">
                Можете да побарате пристап до вашите податоци, корекции, бришење или да се исклучите од маркетинг во секое време.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Колачиња</h2>
              <p className="text-slate-700 leading-relaxed">
                Користиме сесиски, преференцијални и безбедносни колачиња. Можете да ги оневозможите во поставките на вашиот прелистувач.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Ажурирања на Политиката</h2>
              <p className="text-slate-700 leading-relaxed">
                Можеме да ја ревидираме оваа политика. Промените стапуваат на сила кога се објавени.
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