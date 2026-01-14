import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Building2, Home, Users, Camera, Lock, Bell, Eye, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import commercialImage from "@/assets/commercial-security.jpg";
import residentialImage from "@/assets/residential-security.jpg";

const ServicesPage = () => {
  const commercialServices = [
    { icon: Building2, title: "Corporate Security", description: "Comprehensive security solutions for office buildings, corporate headquarters, and business complexes." },
    { icon: Camera, title: "CCTV Surveillance", description: "24/7 video monitoring with advanced analytics and real-time threat detection." },
    { icon: Users, title: "Security Personnel", description: "Trained and licensed security officers for on-site protection and access control." },
    { icon: Lock, title: "Access Control Systems", description: "Biometric, keycard, and smart lock systems for secure entry management." },
    { icon: Bell, title: "Alarm Systems", description: "State-of-the-art intrusion detection and immediate response protocols." },
    { icon: Eye, title: "Risk Assessment", description: "Comprehensive security audits and vulnerability assessments for your facility." },
  ];

  const residentialServices = [
    { icon: Home, title: "Home Security Systems", description: "Complete home protection with smart monitoring and mobile alerts." },
    { icon: Camera, title: "Video Doorbell & Cameras", description: "HD video surveillance with night vision and two-way communication." },
    { icon: Lock, title: "Smart Locks", description: "Keyless entry systems with remote access and activity logging." },
    { icon: Bell, title: "Alarm Monitoring", description: "24/7 professional monitoring with emergency dispatch services." },
    { icon: Users, title: "Neighborhood Watch", description: "Community security programs and patrol services." },
    { icon: Shield, title: "Personal Protection", description: "Executive protection and personal security detail services." },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Security Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions tailored to protect what matters most. From commercial enterprises to residential properties, we deliver peace of mind.
          </p>
        </div>
      </section>

      {/* Commercial Security */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-primary" />
                Commercial Security
              </h2>
              <p className="text-muted-foreground mb-6">
                Protect your business with our enterprise-grade security solutions. We understand the unique challenges facing modern businesses and provide customized protection strategies.
              </p>
              <img 
                src={commercialImage} 
                alt="Commercial Security" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {commercialServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <service.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Residential Security */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4">
              {residentialServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <service.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Home className="h-8 w-8 text-primary" />
                Residential Security
              </h2>
              <p className="text-muted-foreground mb-6">
                Your home is your sanctuary. Our residential security services ensure your family and property are protected around the clock with the latest smart security technology.
              </p>
              <img 
                src={residentialImage} 
                alt="Residential Security" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">
            Contact us today for a free security consultation and customized quote.
          </p>
          <Link to="/#contact">
            <Button size="lg" variant="secondary" className="gap-2">
              Get Free Consultation <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
