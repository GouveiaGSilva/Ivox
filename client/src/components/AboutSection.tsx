import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('Quem Somos', 'Who We Are')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t(
                'Somos especialistas em transformar negócios através do marketing digital estratégico, com foco em resultados mensuráveis e crescimento sustentável.',
                'We are specialists in transforming businesses through strategic digital marketing, focusing on measurable results and sustainable growth.'
              )}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('Nossa Missão', 'Our Mission')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t(
                  'Capacitar empresas de todos os tamanhos a alcançarem seu máximo potencial digital através de estratégias personalizadas, tecnologia de ponta e um acompanhamento próximo que garante resultados excepcionais.',
                  'Empower companies of all sizes to reach their maximum digital potential through personalized strategies, cutting-edge technology and close monitoring that ensures exceptional results.'
                )}
              </p>
              
              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-target text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t('Foco em Resultados', 'Results Focused')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t('Métricas claras e ROI comprovado', 'Clear metrics and proven ROI')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-users text-secondary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t('Atendimento Personalizado', 'Personalized Service')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t('Estratégias únicas para cada negócio', 'Unique strategies for each business')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-shield-alt text-accent text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t('Máxima Segurança', 'Maximum Security')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t('Proteção total de dados e privacidade', 'Complete data and privacy protection')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">150%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {t('Crescimento Médio', 'Average Growth')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
