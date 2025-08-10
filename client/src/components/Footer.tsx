import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

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
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <i className="fas fa-rocket text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold">Ivox Scale</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t(
                'Transformamos negócios através do marketing digital estratégico. Nossa missão é elevar sua presença online e gerar resultados mensuráveis para seu crescimento.',
                'We transform businesses through strategic digital marketing. Our mission is to elevate your online presence and generate measurable results for your growth.'
              )}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              {t('Links Rápidos', 'Quick Links')}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleSmoothScroll('home')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {t('Início', 'Home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('about')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {t('Sobre', 'About')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {t('Serviços', 'Services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {t('Depoimentos', 'Testimonials')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {t('Contato', 'Contact')}
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              {t('Contato', 'Contact')}
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <i className="fas fa-envelope mr-2"></i>
                <a
                  href="mailto:contato@ivoxscale.com"
                  className="hover:text-white transition-colors"
                >
                  contato@ivoxscale.com
                </a>
              </li>
              <li className="text-gray-400">
                <i className="fab fa-whatsapp mr-2"></i>
                <span>{t('WhatsApp disponível', 'WhatsApp available')}</span>
              </li>
              <li className="text-gray-400">
                <i className="fas fa-clock mr-2"></i>
                <span>{t('Seg-Sex: 9h às 18h', 'Mon-Fri: 9am to 6pm')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t(
                '© 2024 Ivox Scale. Todos os direitos reservados.',
                '© 2024 Ivox Scale. All rights reserved.'
              )}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('Política de Privacidade', 'Privacy Policy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('Termos de Uso', 'Terms of Use')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('LGPD', 'GDPR')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
