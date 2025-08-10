import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('Nossos Serviços', 'Our Services')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t(
              'Soluções completas em marketing digital para impulsionar seu negócio',
              'Complete digital marketing solutions to boost your business'
            )}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 1: Paid Traffic */}
          <div className="service-card bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-bullseye text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('Gestão de Tráfego Pago', 'Paid Traffic Management')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t(
                'Campanhas otimizadas no Google Ads, Facebook e Instagram para máximo ROI',
                'Optimized campaigns on Google Ads, Facebook and Instagram for maximum ROI'
              )}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Google Ads', 'Google Ads')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Facebook & Instagram Ads', 'Facebook & Instagram Ads')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Otimização de Conversão', 'Conversion Optimization')}</span>
              </li>
            </ul>
          </div>
          
          {/* Service Card 2: Websites */}
          <div className="service-card bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-laptop-code text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('Sites e Landing Pages', 'Websites & Landing Pages')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t(
                'Desenvolvimento de sites responsivos e landing pages de alta conversão',
                'Development of responsive websites and high-conversion landing pages'
              )}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Design Responsivo', 'Responsive Design')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Otimização SEO', 'SEO Optimization')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Alta Performance', 'High Performance')}</span>
              </li>
            </ul>
          </div>
          
          {/* Service Card 3: Social Media */}
          <div className="service-card bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-share-alt text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('Social Media & Conteúdo', 'Social Media & Content')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t(
                'Gestão completa das redes sociais com conteúdo estratégico e envolvente',
                'Complete social media management with strategic and engaging content'
              )}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Criação de Conteúdo', 'Content Creation')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Gestão de Comunidade', 'Community Management')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Análise de Métricas', 'Metrics Analysis')}</span>
              </li>
            </ul>
          </div>
          
          {/* Service Card 4: Consulting */}
          <div className="service-card bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-chart-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('Consultoria Estratégica', 'Strategic Consulting')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t(
                'Análise profunda do seu negócio e desenvolvimento de estratégias personalizadas',
                'Deep business analysis and development of personalized strategies'
              )}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Auditoria Digital', 'Digital Audit')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Planejamento Estratégico', 'Strategic Planning')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{t('Acompanhamento Mensal', 'Monthly Follow-up')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
