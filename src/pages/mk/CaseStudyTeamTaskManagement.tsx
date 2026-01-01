import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Logo } from '../../components/Logo';

export const MacedonianCaseStudyTeamTaskManagement: React.FC = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate('/mk#contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-blue-50 w-full overflow-x-hidden">
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="premium-card rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-emerald-500 mr-3" />
                <span className="text-emerald-600 font-semibold text-lg">Студија на Случај</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Систем за Управување со Тимски Задачи и Организација
              </h1>
              <div className="text-slate-600 text-lg">
                <span className="font-semibold">Клиент:</span> <a href="https://darmadoma.com.mk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">DarmaDoma</a>
                <span className="text-slate-400 mx-2">•</span>
                <span className="text-blue-600">Агенција за Недвижности</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 hover-scale will-change-transform">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                Предизвикот
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-4">
                Директорот на DarmaDoma се соочуваше со критичен организациски проблем. Со растечкиот тим од агенти за недвижности, брокери и персонал во центарот за повици, управувањето со задачите стана хаотично и неефикасно.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
                <h3 className="font-bold text-slate-800 mb-3">Клучни Проблеми:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">Директорот не можеше да следи кои задачи се доделени на кого</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">Вработените често ги пропуштаа роковите и ги заборавуваа задачите</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">Немаше централизиран систем за комуникација за ажурирања на задачи</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">Задачите се губеа во email ланци и апликации за пораки</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">Немаше видливост во статусот и прогресот на задачите</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                Резултатот беше загубено време, пропуштени можности, константен стрес за менаџментот и намалена профитабилност.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🔧</span>
                Нашето Решение
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                CnT AI изгради сеопфатна прилагодена платформа за управување со задачи од нула, специјално дизајнирана за работниот тек и структурата на тимот на DarmaDoma. Системот вклучуваше:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">👥</span>
                    Систем за Автентикација Базиран на Улоги
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Сметка на директорот со целосен административен пристап</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Индивидуални сметки за секој член на тимот</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Безбеден систем за најава со избор на профил</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    Контролен Панел за Директорот
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Целосен преглед на сите задачи низ организацијата</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Статистички dashboard за задачи (Вкупно Задачи, Не Започнати, Во Тек, Завршени)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Можност за креирање и доделување задачи на секој вработен</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Поставки за ниво на приоритет за итни задачи</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">✅</span>
                    Функции за Управување со Задачи
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Следење на статусот во три фази: Не Започната, Во Тек, Завршена</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Следење на рокови со визуелни индикатори</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Систем за белешки и за директорот и за вработените</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Автоматски email известувања кога се доделуваат задачи</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">💼</span>
                    Dashboard за Вработени
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Личен преглед на задачи со статистики за завршување</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Следење на прогресот на доделени задачи</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Можност за додавање белешки и ажурирање на статусот на задачата</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📋</span>
                    Дополнителни Функции
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Модул за управување со центар за повици</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Систем за форми за клиенти со прилагодени полиња</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Професионален темен UI кој одговара на бојите на брендот</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                Постигнати Резултати
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                Прилагодениот систем за управување со задачи целосно ги трансформираше операциите на DarmaDoma:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Масивна заштеда на време во организацијата на тимот</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Директорот доби целосна видливост над сите задачи</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Елиминиран стрес и организациски главоболки</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Нула пропуштени задачи со email известувања</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Јасна одговорност со следење на статусот</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Подобра тимска комуникација преку интегрирани белешки</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Зголемена ефикасност што води до повисоки профити</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Скалабилен систем што расте со тимот</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-800 mb-3 text-xl">Заклучокот</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Со имплементирањето на овој прилагоден систем за управување со задачи, DarmaDoma не само што ги реши своите непосредни организациски предизвици, туку се позиционираше и за скалабилен раст. Директорот сега може да се фокусира на стратегија и развој на бизнисот наместо да трча по ажурирања на задачи, додека вработените останува на врвот на своите одговорности со автоматизирани потсетници и јасна видливост.
                </p>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Потребен Ви е Прилагоден Систем за Управување за Вашиот Бизнис?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Секој бизнис има уникатни работни текови и предизвици. Дозволете ни да изградиме прилагодено решение специјално за потребите и процесите на вашиот тим.
                </p>
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 premium-button"
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
