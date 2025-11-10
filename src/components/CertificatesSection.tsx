import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import type { Certificate } from "@/lib/portfolio";

interface CertificatesSectionProps {
  certificates: Certificate[];
}

export const CertificatesSection = ({ certificates }: CertificatesSectionProps) => {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Certificates & Achievements</h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {certificates.map((cert, index) => (
            <Card
              key={`${cert.title}-${index}`}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
