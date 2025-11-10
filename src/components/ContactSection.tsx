import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Personal } from "@/lib/portfolio";

interface ContactSectionProps {
  personal: Personal;
}

export const ContactSection = ({ personal }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out!
            </p>
            <Button size="lg" className="w-full" asChild>
              <a href={`mailto:${personal.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
          </Card>
          
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">{personal.phone}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">{personal.location}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
