import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center parallax"
      style={{
        backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          {t(
            'Sua presença digital elevada a outro nível',
            'Your digital presence elevated to another level'
          )}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up">
          {t(
            'Marketing com propósito, estratégia e tecnologia de ponta',
            'Marketing with purpose, strategy and cutting-edge technology'
          )}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <button
            onClick={() => handleSmoothScroll('contact')}
            className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            {t('Comece Agora', 'Start Now')}
          </button>
          <button
            onClick={() => handleSmoothScroll('about')}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transform hover:-translate-y-1 transition-all duration-300"
          >
            {t('Saiba Mais', 'Learn More')}
          </button>
        </div>
        
        {/* Floating Statistics */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-200">
              {t('Projetos Entregues', 'Projects Delivered')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-200">
              {t('Satisfação', 'Satisfaction')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-200">
              {t('Anos no Mercado', 'Years in Market')}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}
