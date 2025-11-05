import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const MainContent = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Latest news section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-500 uppercase tracking-wide">ОСТАННІ НОВИНИ</span>
            </div>
            
            <article className="news-card">
              <h2 className="news-title">
                06 ЛИСТОПАДА ПО ЗАПОРІЗЬКІЙ ОБЛАСТІ ДІЯТИМУТЬ ГТВ
              </h2>
              <div className="news-meta flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>5 листопада 2025</span>
              </div>
              <div className="news-content">
                <p className="mb-4">
                  Відповідно до команди НЕК «Укренерго», з метою стабілізації ситуації в ОЕС України 
                  енергосистемі, 06 листопада по Запорізькій області будуть застосовані графіки погодинних 
                  відключень (ГПВ). Орієнтовно вимикатимуться з 08:00 до 10:00 - 0,5 черги, з 14:00 до 16:00 - 1 
                  черга, з 20:00 до 22:00 - 1,5 черги, з 16:00 до 20:00 - 2 черги.
                </p>
                <p className="mb-4">
                  Години вимушених електропостачання по чергам (підгрупам) в урахуванням часу на 
                  перемикання:
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li>1.1: 19:00 - 20:30</li>
                  <li>1.2: 19:00 - 22:30</li>
                  <li>2.1: 15:30 - 19:00</li>
                  <li>2.2: 15:30 - 19:00</li>
                  <li>3.1: 15:30 - 19:00</li>
                  <li>3.2: 15:30 - 19:00</li>
                  <li>4.1 - не вимикається</li>
                  <li>4.2: 08:30 - 10:30</li>
                  <li>5.1: 19:00 - 22:30</li>
                  <li>5.2: 19:00 - 22:30</li>
                  <li>6.1: 13:30 - 15:30</li>
                  <li>6.2: 13:30 - 15:30</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Також з 08:00 до 22:00 діятимуть графіки обмеження потужності (ГОП) в повному обсязі (5 
                  черг).
                </p>
              </div>
            </article>
          </div>
          
          {/* Schedule widget */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <img src="/images/schedule-icon.png" alt="Графік" className="w-16 h-20" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Діятиме графік погодинних відключень
                </h3>
                <div className="flex items-center text-sm text-blue-600">
                  <img src="/images/zoe-logo-small.png" alt="ЗОЕ" className="w-6 h-6 mr-2" />
                  <span>Запорізька обленерго</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sidebar-widget">
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-500 uppercase tracking-wide">АКТУАЛЬНІ НОВИНИ</span>
            </div>
            
            <div className="space-y-4">
              <article>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Реєстр електропостачальників
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Реєстр електропостачальників, які приєдналися до умов публічного договору 
                  електропостачання при наданні послуг з розподілу електроенергії...
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Читати далі</a>
              </article>
              
              <article>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Перелік типів лічильників, рекомендованих до встановлення ПАТ «Запоріжжяобленерго», та їх технічні характеристики
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  У відповідності до вимог Кодексу комерційного обліку електричної енергії, затвердженого Постановою НКРЕКП...
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Читати далі</a>
              </article>
              
              <article>
                <h4 className="font-semibold text-gray-800 mb-2">
                  До уваги споживачів за об'єктами, розташованими на території, де ведуться бойові дії, або тимчасово окупованих російською федерацією
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  З 24.02.2022 групи України здійснюється військова агресія російської федерації...
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Читати далі</a>
              </article>
              
              <article>
                <h4 className="font-semibold text-gray-800 mb-2">
                  ПАТ «Запоріжжяобленерго» інформує щодо розгляду звернень (листів) споживачів (заявників) з метою врегулювання договірних відносин в період дії правового режиму воєнного стану
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  З 24.02.2022 групи України здійснюється військова агресія російської федерації...
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Читати далі</a>
              </article>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
              Переглянути всі новини
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;