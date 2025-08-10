import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 glass-effect transition-all duration-300 ${isScrolled ? 'backdrop-blur-md' : ''}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <i className="fas fa-rocket text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-primary dark:text-white">Ivox Scale</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleSmoothScroll('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {t('Início', 'Home')}
            </button>
            <button
              onClick={() => handleSmoothScroll('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {t('Sobre', 'About')}
            </button>
            <button
              onClick={() => handleSmoothScroll('services')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {t('Serviços', 'Services')}
            </button>
            <button
              onClick={() => handleSmoothScroll('testimonials')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {t('Depoimentos', 'Testimonials')}
            </button>
            <button
              onClick={() => handleSmoothScroll('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {t('Contato', 'Contact')}
            </button>
          </div>
          
          {/* Theme and Language Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <i className="fas fa-globe text-sm"></i>
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </button>
            
            {/* CTA Button */}
            <button
              onClick={() => handleSmoothScroll('contact')}
              className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {t('Solicitar Orçamento', 'Request Quote')}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleSmoothScroll('home')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-left"
              >
                {t('Início', 'Home')}
              </button>
              <button
                onClick={() => handleSmoothScroll('about')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-left"
              >
                {t('Sobre', 'About')}
              </button>
              <button
                onClick={() => handleSmoothScroll('services')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-left"
              >
                {t('Serviços', 'Services')}
              </button>
              <button
                onClick={() => handleSmoothScroll('testimonials')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-left"
              >
                {t('Depoimentos', 'Testimonials')}
              </button>
              <button
                onClick={() => handleSmoothScroll('contact')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-left"
              >
                {t('Contato', 'Contact')}
              </button>
              <button
                onClick={() => handleSmoothScroll('contact')}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                {t('Solicitar Orçamento', 'Request Quote')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
