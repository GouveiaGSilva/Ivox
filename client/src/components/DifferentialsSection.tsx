import { useLanguage } from '@/contexts/LanguageContext';

export default function DifferentialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('Nossos Diferenciais', 'Our Differentials')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t(
              'O que nos torna únicos no mercado de marketing digital',
              'What makes us unique in the digital marketing market'
            )}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Differential 1: Security */}
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-shield-alt text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('Segurança & Privacidade', 'Security & Privacy')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t(
                'Proteção máxima dos dados dos seus clientes com criptografia avançada e conformidade com LGPD. Sua confiança é nossa prioridade.',
                'Maximum protection of your customers\' data with advanced encryption and LGPD compliance. Your trust is our priority.'
              )}
            </p>
          </div>
          
          {/* Differential 2: Personalization */}
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-user-cog text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('Estratégias Personalizadas', 'Personalized Strategies')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t(
                'Não acreditamos em soluções prontas. Cada estratégia é desenvolvida especificamente para o seu negócio, setor e objetivos únicos.',
                'We don\'t believe in ready-made solutions. Each strategy is developed specifically for your business, sector and unique objectives.'
              )}
            </p>
          </div>
          
          {/* Differential 3: Innovation */}
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-rocket text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('Tecnologia Inovadora', 'Innovative Technology')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t(
                'Utilizamos as ferramentas mais avançadas do mercado e inteligência artificial para otimizar campanhas e maximizar resultados.',
                'We use the most advanced tools in the market and artificial intelligence to optimize campaigns and maximize results.'
              )}
            </p>
          </div>
        </div>
        
        {/* Process Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('Nosso Processo', 'Our Process')}
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {t('Análise', 'Analysis')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('Diagnóstico completo do seu negócio', 'Complete business diagnosis')}
                </p>
              </div>
              
              <div className="hidden md:block flex-1 h-0.5 bg-gray-300 dark:bg-gray-600 mx-4"></div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {t('Estratégia', 'Strategy')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('Desenvolvimento do plano personalizado', 'Development of personalized plan')}
                </p>
              </div>
              
              <div className="hidden md:block flex-1 h-0.5 bg-gray-300 dark:bg-gray-600 mx-4"></div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {t('Execução', 'Execution')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('Implementação e acompanhamento', 'Implementation and monitoring')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
