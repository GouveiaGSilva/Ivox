import {
  Header,
  HeroSection,
  AboutSection,
  ServicesSection,
  DifferentialsSection,
  TestimonialsSection,
  ContactSection,
  Footer,
  BackToTopButton
} from "@/components";

export default function Home() {
  return (
    <div className="font-poppins bg-background text-foreground transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
