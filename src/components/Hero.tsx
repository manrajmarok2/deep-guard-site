import { Button } from "./ui/button";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional security services" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Professional Security
            <span className="block text-primary text-glow">You Can Trust</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Protecting what matters most with advanced technology and highly trained personnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("services")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 animate-pulse-glow"
            >
              Our Services
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-foreground hover:bg-primary/10 text-lg px-8"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
