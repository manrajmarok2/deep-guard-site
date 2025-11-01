import { Shield } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-lg bg-background/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">SecureGuard</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("training")} className="text-foreground hover:text-primary transition-colors">
              Training
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("careers")} className="text-foreground hover:text-primary transition-colors">
              Careers
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
