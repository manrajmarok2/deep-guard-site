import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Heart, Award, Users, Clock, CheckCircle } from "lucide-react";

const AboutPage = () => {
  const values = [
    { icon: Shield, title: "Integrity", description: "We uphold the highest ethical standards in all our operations." },
    { icon: Target, title: "Excellence", description: "We strive for excellence in every security solution we provide." },
    { icon: Heart, title: "Dedication", description: "We are dedicated to the safety and well-being of our clients." },
    { icon: Award, title: "Professionalism", description: "Our team maintains the highest level of professionalism." },
  ];

  const milestones = [
    { year: "2008", title: "Founded", description: "EternaWatch Security was established with a vision to redefine security services." },
    { year: "2012", title: "Regional Expansion", description: "Expanded operations to cover the entire metropolitan area." },
    { year: "2016", title: "Technology Integration", description: "Launched our smart security monitoring platform." },
    { year: "2020", title: "National Recognition", description: "Received industry awards for excellence in security services." },
    { year: "2024", title: "Innovation Leader", description: "Pioneering AI-powered threat detection and prevention." },
  ];

  const team = [
    { name: "Michael Torres", role: "CEO & Founder", experience: "25+ years in security" },
    { name: "Sarah Chen", role: "Chief Operations Officer", experience: "20+ years in operations" },
    { name: "David Williams", role: "Head of Technology", experience: "15+ years in security tech" },
    { name: "Emily Rodriguez", role: "Training Director", experience: "18+ years in law enforcement" },
  ];

  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "500+", label: "Trained Personnel" },
    { value: "1000+", label: "Clients Protected" },
    { value: "24/7", label: "Monitoring Service" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EternaWatch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For over 15 years, we've been the trusted name in security services, protecting businesses and families with unwavering dedication.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              To provide exceptional security services that protect lives, assets, and peace of mind. We combine cutting-edge technology with highly trained professionals to deliver security solutions that exceed expectations.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="text-left">
                  <CardContent className="pt-6">
                    <value.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-lg">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose EternaWatch?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Licensed and insured security professionals",
              "State-of-the-art monitoring technology",
              "Customized security solutions",
              "24/7 customer support",
              "Rapid emergency response",
              "Competitive pricing",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
