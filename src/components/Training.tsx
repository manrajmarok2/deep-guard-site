import { GraduationCap, Award, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Training = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Basic Security Training",
      description: "Comprehensive foundation course covering security fundamentals, protocols, and procedures"
    },
    {
      icon: Target,
      title: "Advanced Tactical Training",
      description: "Specialized training in threat assessment, crisis management, and tactical response"
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Industry-recognized certifications for security professionals at all levels"
    },
    {
      icon: Users,
      title: "Corporate Training",
      description: "Custom security awareness and emergency response training for your organization"
    }
  ];

  return (
    <section id="training" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional development and certification for security excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card border-border hover:card-glow transition-all duration-300">
              <CardHeader>
                <program.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
