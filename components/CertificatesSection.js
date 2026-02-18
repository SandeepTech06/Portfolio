import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

export function CertificatesSection({ certificates }) {
  if (!certificates || certificates.length === 0) return null

  return (
    <section id="certificates" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="section-title mb-4">Certificates & Achievements</h2>

        <p className="section-subtitle mb-14">Certifications and milestones that showcase my learning journey.</p>

        <div className="max-w-4xl mx-auto space-y-6">
          {certificates.map((cert, index) => (
            <Card
              key={`${cert.title}-${index}`}
              className="relative overflow-hidden p-6 rounded-2xl section-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

              <div className="relative z-10 flex items-start gap-5">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-border group-hover:scale-105 transition duration-500">
                  <Award className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground tracking-wide">{cert.title}</h3>
                  <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground/80 mt-1">{cert.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

