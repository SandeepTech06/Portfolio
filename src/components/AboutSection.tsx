import { Card } from "@/components/ui/card";
import type { Personal } from "@/lib/portfolio";

interface AboutSectionProps {
  personal: Personal;
}

export const AboutSection = ({ personal }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">About Me</h2>
          
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Passionate Developer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {personal.bio}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Problem Solver
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    Team Player
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Fast Learner
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  {personal.image && personal.image !== "/placeholder.svg" ? (
                    <img 
                      src={personal.image} 
                      alt={personal.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent opacity-20"></div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
