import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const totalTestimonials = 3;

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      name: "Carlos Silva",
      position: t("CEO, TechStart Brasil", "CEO, TechStart Brazil"),
      testimonial: t(
        "A Ivox Scale transformou completamente nossa estratégia digital. Em 6 meses, aumentamos nosso faturamento em 200%. A equipe é extremamente profissional e os resultados falam por si só.",
        "Ivox Scale completely transformed our digital strategy. In 6 months, we increased our revenue by 200%. The team is extremely professional and the results speak for themselves."
      )
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      name: "Ana Costa",
      position: t("Diretora de Marketing, Inovar Consultoria", "Marketing Director, Inovar Consulting"),
      testimonial: t(
        "Parceria incrível! O atendimento é personalizado e a estratégia desenvolvida foi perfeita para nosso nicho. Nossos leads qualificados triplicaram em apenas 4 meses.",
        "Amazing partnership! The service is personalized and the strategy developed was perfect for our niche. Our qualified leads tripled in just 4 months."
      )
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      name: "Roberto Mendes",
      position: t("Fundador, E-commerce Plus", "Founder, E-commerce Plus"),
      testimonial: t(
        "Profissionalismo exemplar! A Ivox Scale não apenas entregou resultados excepcionais, como também nos educou sobre marketing digital. Recomendo sem reservas.",
        "Exemplary professionalism! Ivox Scale not only delivered exceptional results but also educated us about digital marketing. I recommend without reservation."
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const showTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('O Que Dizem Nossos Clientes', 'What Our Clients Say')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t(
              'Depoimentos reais de empresas que transformaram seus resultados conosco',
              'Real testimonials from companies that transformed their results with us'
            )}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Testimonials Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star text-yellow-400"></i>
                          ))}
                        </div>
                        <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                          "{testimonial.testimonial}"
                        </blockquote>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalTestimonials)].map((_, index) => (
              <button
                key={index}
                onClick={() => showTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? 'bg-primary'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
