import { Building2, Home, Shield, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import commercialImage from "@/assets/commercial-security.jpg";
import residentialImage from "@/assets/residential-security.jpg";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Security Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive protection solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-border card-glow hover:scale-105 transition-transform duration-300">
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <img 
                src={commercialImage} 
                alt="Commercial security services" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-foreground">Commercial Security</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Protect your business with our comprehensive commercial security solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>24/7 On-site Security Personnel</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Advanced Surveillance Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Access Control Management</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Emergency Response Teams</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border card-glow hover:scale-105 transition-transform duration-300">
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <img 
                src={residentialImage} 
                alt="Residential security services" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Home className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-foreground">Residential Security</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Keep your family and home safe with our residential protection services
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Gated Community Patrols</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Smart Home Security Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Personal Protection Officers</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Rapid Emergency Response</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
