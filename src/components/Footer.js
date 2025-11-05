import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacts */}
          <div>
            <h3 className="text-brand-blue text-lg font-semibold mb-4">Контакти</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Телефон: прийом показів (для побутових споживачів): (061)228-51-09, (061)702-05-50,</p>
                  <p>(098)168-01-01; (050)19-91-69; (093)170-28-35</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Адреса: вул. Славгарів, 14, м. Запоріжжя, 69035;</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <p>e-mail: kanc@zoe.com.ua</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-brand-blue hover:underline flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" />
                Особистий кабінет замовника послуг комерційного обліку
              </a>
            </div>
          </div>
          
          {/* Mobile apps and services */}
          <div>
            <p className="text-sm mb-4">
              Споживачі можуть подати скаргу до АТ "Запоріжжяобленерго" щодо якості послуг через мобільний додаток "Енергетика Онлайн"
            </p>
            <div className="flex space-x-2 mb-4">
              <img src="/images/google-play.png" alt="Google Play" className="h-10" />
              <img src="/images/app-store.png" alt="App Store" className="h-10" />
            </div>
            <div className="flex space-x-2 mb-4">
              <img src="/images/service1.png" alt="Сервіс 1" className="h-8" />
              <img src="/images/service2.png" alt="Сервіс 2" className="h-8" />
              <img src="/images/service3.png" alt="Сервіс 3" className="h-8" />
              <img src="/images/service4.png" alt="Сервіс 4" className="h-8" />
              <img src="/images/service5.png" alt="Сервіс 5" className="h-8" />
            </div>
            <div className="text-center">
              <img src="/images/qr-code.png" alt="QR код" className="h-20 mx-auto" />
            </div>
          </div>
          
          {/* Anti-corruption */}
          <div>
            <h3 className="text-brand-blue text-lg font-semibold mb-4">Антикорупційна діяльність</h3>
            <div className="space-y-3 text-sm">
              <p>Шановні споживачі!</p>
              <p>В АТ "Запоріжжяобленерго" працює Лінія довіри з питань запобігання та протидії корупції</p>
              <div className="text-brand-blue">
                <p className="font-semibold">ТЕЛЕФОН: (050) 822-64-26</p>
                <p>E-mail: stopcorrupt@zoe.com.ua</p>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-600 my-6" />
        
        {/* Social media */}
        <div className="text-center">
          <div className="mb-4">
            <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              слідкуйте за нами на facebook
            </a>
          </div>
          <div>
            <span className="text-sm text-gray-400 mr-2">Передати показ:</span>
            <a href="#" className="text-brand-blue hover:underline">
              <img src="/images/telegram.png" alt="Telegram" className="inline h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;