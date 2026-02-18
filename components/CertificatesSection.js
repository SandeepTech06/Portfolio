import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

export function CertificatesSection({ certificates }) {
  if (!certificates || certificates.length === 0) return null

  return (
    <section id="certificates" className="relative py-28 bg-transparent">
      <div className="relative z-10 container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white tracking-tight drop-shadow-[0_0_18px_rgba(34,211,238,0.25)]">
          Certificates & Achievements
        </h2>

        <p className="text-accent/80 text-center mb-14 max-w-2xl mx-auto">
          Certifications and milestones that showcase my learning journey.
        </p>

        {/* Cards */}
        <div className="max-w-4xl mx-auto space-y-6">

          {certificates.map((cert, index) => (
            <Card
              key={`${cert.title}-${index}`}
              className="relative overflow-hidden p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(34,211,238,0.18)] group"
            >

              {/* subtle glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"></div>

              <div className="relative z-10 flex items-start gap-5">

                {/* Icon */}
                <div className="p-3 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                  <Award className="h-6 w-6 text-accent" />
                </div>

                {/* Content */}
                <div className="flex-1">

                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-accent transition duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-accent/80 mt-1">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-accent/60 mt-1">
                    {cert.date}
                  </p>

                </div>

              </div>

            </Card>
          ))}

        </div>
      </div>
    </section>
  )
}
