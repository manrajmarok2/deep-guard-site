import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, DollarSign, Heart, Shield, GraduationCap, Users, ArrowRight, CheckCircle } from "lucide-react";

const CareersPage = () => {
  const benefits = [
    { icon: Heart, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage" },
    { icon: DollarSign, title: "Competitive Pay", description: "Industry-leading salaries with regular reviews" },
    { icon: GraduationCap, title: "Training Programs", description: "Paid certifications and career development" },
    { icon: Users, title: "Team Culture", description: "Supportive environment with growth opportunities" },
  ];

  const openPositions = [
    {
      title: "Security Officer",
      type: "Full-time",
      location: "Multiple Locations",
      salary: "$18-25/hr",
      requirements: ["Valid security license", "Clean background", "Reliable transportation"],
    },
    {
      title: "Armed Security Guard",
      type: "Full-time",
      location: "Downtown",
      salary: "$25-35/hr",
      requirements: ["Armed guard license", "5+ years experience", "Firearms certification"],
    },
    {
      title: "Security Supervisor",
      type: "Full-time",
      location: "Corporate Office",
      salary: "$50-65k/year",
      requirements: ["Management experience", "Team leadership skills", "Security certification"],
    },
    {
      title: "Monitoring Center Operator",
      type: "Full-time / Part-time",
      location: "Operations Center",
      salary: "$16-22/hr",
      requirements: ["Attention to detail", "Computer proficiency", "Shift flexibility"],
    },
    {
      title: "Installation Technician",
      type: "Full-time",
      location: "Field Operations",
      salary: "$22-30/hr",
      requirements: ["Technical background", "Valid driver's license", "CCTV experience preferred"],
    },
    {
      title: "Training Coordinator",
      type: "Full-time",
      location: "Training Center",
      salary: "$55-70k/year",
      requirements: ["Training experience", "Security background", "Certification to train"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Build a rewarding career in security. We're looking for dedicated professionals to help protect our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Briefcase className="h-4 w-4 mr-2" />
              {openPositions.length} Open Positions
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              Multiple Locations
            </Badge>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Work With Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="opacity-80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <Badge variant="outline">{position.type}</Badge>
                  </div>
                  <CardTitle>{position.title}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {position.salary}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {position.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {req}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full gap-2">
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Apply Online", description: "Submit your application and resume" },
              { step: "2", title: "Interview", description: "Meet with our hiring team" },
              { step: "3", title: "Background Check", description: "Complete verification process" },
              { step: "4", title: "Orientation", description: "Start your training program" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Position?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" variant="outline" className="gap-2">
            Submit General Application <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
