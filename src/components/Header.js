import React from 'react';
import { Menu, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Mobile menu button */}
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/images/logo.png" 
              alt="Запорізька обленерго" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Contact info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-brand-blue" />
              <span className="text-sm text-gray-700">Передати показ</span>
              <span className="font-semibold text-gray-900">0-800-304-502</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Call-center</span>
            </div>
            <div className="flex space-x-2">
              <img src="/images/privat24.png" alt="Privat24" className="h-8" />
              <img src="/images/discount.png" alt="Знижки" className="h-8" />
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="flex justify-center space-x-8 py-4">
            <a href="#" className="text-brand-blue font-medium hover:text-blue-700 transition-colors">
              Населенню
            </a>
            <a href="#" className="text-brand-red font-medium hover:text-red-700 transition-colors flex items-center">
              <span className="mr-1">📅</span>
              Графіки відключень
            </a>
            <a href="#" className="text-brand-yellow font-medium hover:text-yellow-700 transition-colors">
              Підприємствам
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;