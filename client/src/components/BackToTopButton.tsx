import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function BackToTopButton() {
  const scrollPosition = useScrollPosition();
  const isVisible = scrollPosition > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50 ${
        isVisible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <i className="fas fa-chevron-up text-xl"></i>
    </button>
  );
}
