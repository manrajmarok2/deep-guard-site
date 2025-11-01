import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free consultation and security assessment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">info@secureguard.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">123 Security Blvd, Suite 100<br />New York, NY 10001</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">24/7 Emergency Line</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary text-glow">+1 (555) 911-SAFE</p>
                <p className="text-muted-foreground mt-2">Available around the clock for urgent security needs</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell us about your security needs..." 
                    className="bg-background border-border text-foreground min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
