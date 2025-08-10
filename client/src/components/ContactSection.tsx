import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    recaptcha: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    
    if (name === 'name' && !value.trim()) {
      error = t('Este campo é obrigatório', 'This field is required');
    } else if (name === 'email') {
      if (!value.trim()) {
        error = t('Este campo é obrigatório', 'This field is required');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = t('Por favor, insira um e-mail válido', 'Please enter a valid email');
      }
    } else if (name === 'service' && !value) {
      error = t('Este campo é obrigatório', 'This field is required');
    } else if (name === 'message' && !value.trim()) {
      error = t('Este campo é obrigatório', 'This field is required');
    }
    
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    
    newErrors.name = validateField('name', formData.name);
    newErrors.email = validateField('email', formData.email);
    newErrors.service = validateField('service', formData.service);
    newErrors.message = validateField('message', formData.message);
    
    if (!formData.recaptcha) {
      newErrors.recaptcha = t('Por favor, confirme que você não é um robô', 'Please confirm you are not a robot');
    }

    // Remove empty errors
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        alert(t(
          'Mensagem enviada com sucesso! Entraremos em contato em breve.',
          'Message sent successfully! We will get in touch soon.'
        ));
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          recaptcha: false
        });
        setIsSubmitting(false);
      }, 2000);
    }
  };

  const getWhatsAppLink = () => {
    const message = t(
      'Olá! Gostaria de saber mais sobre os serviços da Ivox Scale.',
      'Hello! I would like to know more about Ivox Scale services.'
    );
    return `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('Entre em Contato', 'Get in Touch')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t(
              'Pronto para transformar seu negócio? Fale conosco e descubra como podemos ajudar',
              'Ready to transform your business? Contact us and discover how we can help'
            )}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('Vamos Conversar', 'Let\'s Talk')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {t(
                'Nossa equipe está pronta para entender suas necessidades e desenvolver a estratégia perfeita para seu negócio.',
                'Our team is ready to understand your needs and develop the perfect strategy for your business.'
              )}
            </p>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-primary text-xl"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                  <a href="mailto:contato@ivoxscale.com" className="text-primary hover:underline">
                    contato@ivoxscale.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <i className="fab fa-whatsapp text-green-500 text-xl"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">WhatsApp</div>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    {t('Clique para conversar', 'Click to chat')}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-clock text-blue-500 text-xl"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {t('Horário de Atendimento', 'Business Hours')}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {t('Segunda à Sexta: 9h às 18h', 'Monday to Friday: 9am to 6pm')}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-600">
              <div className="font-semibold text-gray-900 dark:text-white mb-4">
                {t('Siga-nos nas Redes Sociais', 'Follow Us on Social Media')}
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Nome Completo', 'Full Name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder={t('Seu nome completo', 'Your full name')}
                  />
                  {errors.name && (
                    <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('E-mail', 'Email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder={t('seu@email.com', 'your@email.com')}
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Telefone (Opcional)', 'Phone (Optional)')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Serviço de Interesse', 'Service of Interest')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                      errors.service ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <option value="">{t('Selecione um serviço', 'Select a service')}</option>
                    <option value="traffic">{t('Gestão de Tráfego Pago', 'Paid Traffic Management')}</option>
                    <option value="websites">{t('Sites e Landing Pages', 'Websites & Landing Pages')}</option>
                    <option value="social">{t('Social Media & Conteúdo', 'Social Media & Content')}</option>
                    <option value="consulting">{t('Consultoria Estratégica', 'Strategic Consulting')}</option>
                    <option value="all">{t('Pacote Completo', 'Complete Package')}</option>
                  </select>
                  {errors.service && (
                    <div className="text-red-500 text-sm mt-1">{errors.service}</div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('Mensagem', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder={t('Conte-nos sobre seu projeto e objetivos...', 'Tell us about your project and objectives...')}
                  />
                  {errors.message && (
                    <div className="text-red-500 text-sm mt-1">{errors.message}</div>
                  )}
                </div>
                
                {/* reCAPTCHA Placeholder */}
                <div className="flex items-center space-x-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    name="recaptcha"
                    checked={formData.recaptcha}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-primary"
                  />
                  <label htmlFor="recaptcha" className="text-sm text-gray-700 dark:text-gray-300">
                    {t('Não sou um robô', 'I\'m not a robot')}
                  </label>
                  <i className="fas fa-shield-alt text-gray-400"></i>
                </div>
                {errors.recaptcha && (
                  <div className="text-red-500 text-sm mt-1">{errors.recaptcha}</div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      {t('Enviando...', 'Sending...')}
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      {t('Enviar Mensagem', 'Send Message')}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
