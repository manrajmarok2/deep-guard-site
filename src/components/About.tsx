import { Shield, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Security Professionals" },
    { icon: Shield, value: "1000+", label: "Properties Protected" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Response Time" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About SecureGuard
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            With over two decades of experience, SecureGuard has established itself as a leader in providing 
            comprehensive security solutions. Our team of highly trained professionals is dedicated to protecting 
            what matters most to you.
          </p>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge technology with human expertise to deliver unparalleled security services. 
            Our commitment to excellence and continuous improvement ensures that our clients receive the highest 
            level of protection available.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2 text-glow">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
