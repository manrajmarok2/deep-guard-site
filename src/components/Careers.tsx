import { Briefcase, TrendingUp, Heart, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths and continuous professional development"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive healthcare coverage for you and your family"
    },
    {
      icon: Briefcase,
      title: "Training Programs",
      description: "Access to advanced training and certification opportunities"
    }
  ];

  return (
    <section id="careers" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Join Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build a rewarding career in security with industry-leading training and benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border hover:card-glow transition-all duration-300">
              <CardHeader>
                <benefit.icon className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
