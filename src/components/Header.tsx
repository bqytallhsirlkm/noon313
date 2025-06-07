
import { useState } from 'react';
import { Menu, X, BookOpen, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-emerald-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-amiri text-xl font-bold text-emerald-700">مؤسسة نون القرآنية</h1>
              <p className="text-xs text-emerald-600 font-cairo">Noon Quranic Foundation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium">
              الرئيسية
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium">
              عن المؤسسة
            </a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium">
              خدماتنا
            </a>
            <a href="#programs" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium">
              البرامج
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium">
              تواصل معنا
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-emerald-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-cairo">+966 XX XXX XXXX</span>
            </div>
            <div className="flex items-center space-x-2 text-emerald-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-cairo">info@noon-quran.org</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-emerald-50 transition-colors duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium px-2 py-1">
                الرئيسية
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium px-2 py-1">
                عن المؤسسة
              </a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium px-2 py-1">
                خدماتنا
              </a>
              <a href="#programs" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium px-2 py-1">
                البرامج
              </a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-cairo font-medium px-2 py-1">
                تواصل معنا
              </a>
              <div className="pt-4 border-t border-emerald-100 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-600 px-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-cairo">+966 XX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-600 px-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-cairo">info@noon-quran.org</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
