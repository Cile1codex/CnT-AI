import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Logo } from '../components/Logo';

export const CaseStudyTeamTaskManagement: React.FC = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate('/#contact');
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
            <Link to="/" className="flex items-center group">
              <Logo size="md" className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                CnT AI
              </span>
            </Link>
            <Link
              to="/#use-cases"
              className="flex items-center text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Success Stories
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
                <span className="text-emerald-600 font-semibold text-lg">Case Study</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Team Task Management & Organization System
              </h1>
              <div className="text-slate-600 text-lg">
                <span className="font-semibold">Client:</span> <a href="https://darmadoma.com.mk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">DarmaDoma</a>
                <span className="text-slate-400 mx-2">•</span>
                <span className="text-blue-600">Real Estate Agency</span>
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
                The Challenge
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-4">
                DarmaDoma's CEO faced a critical organizational problem. With a growing team of real estate agents, brokers, and call center staff, managing tasks had become chaotic and inefficient.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
                <h3 className="font-bold text-slate-800 mb-3">Key Problems:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">CEO couldn't track which tasks were assigned to whom</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">Employees frequently missed deadlines and forgot tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">No centralized communication system for task updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">Tasks were lost in email chains and messaging apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-slate-700">No visibility into task status and progress</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                The result was wasted time, missed opportunities, constant stress for management, and reduced profitability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🔧</span>
                Our Solution
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                CnT AI built a comprehensive custom task management platform from the ground up, specifically designed for DarmaDoma's workflow and team structure. The system included:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">👥</span>
                    Role-Based Authentication System
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">CEO account with full administrative access</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Individual accounts for every team member</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Secure login system with profile selection</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    CEO Control Panel
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Complete overview of all tasks across the organization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Task statistics dashboard (Total Tasks, Not Started, In Progress, Completed)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Ability to create and assign tasks to any employee</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Priority level settings for urgent tasks</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">✅</span>
                    Task Management Features
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Three-stage status tracking: Not Started, In Progress, Done</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Deadline tracking with visual indicators</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Notes system for both CEO and employees</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Automatic email notifications when tasks are assigned</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">💼</span>
                    Employee Dashboard
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Personal task view with completion statistics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Progress tracking on assigned tasks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Ability to add notes and update task status</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📋</span>
                    Additional Features
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Call center management module</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Client form system with custom fields</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Professional dark UI matching brand colors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                Results Achieved
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                The custom task management system transformed DarmaDoma's operations completely:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Massive time savings in team organization</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">CEO gained full visibility over all tasks</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Eliminated stress and organizational headaches</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Zero missed tasks with email notifications</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Clear accountability with status tracking</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Better team communication via integrated notes</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Increased efficiency leading to higher profits</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 hover-scale will-change-transform">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Scalable system that grows with the team</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-800 mb-3 text-xl">The Bottom Line</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  By implementing this custom task management system, DarmaDoma not only solved their immediate organizational challenges but also positioned themselves for scalable growth. The CEO can now focus on strategy and business development instead of chasing down task updates, while employees stay on top of their responsibilities with automated reminders and clear visibility.
                </p>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need a Custom Management System for Your Business?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Every business has unique workflows and challenges. Let us build a custom solution tailored specifically to your team's needs and processes.
                </p>
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 premium-button"
                >
                  Book Your Free Consultation
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
