import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export function EducationSection({ education }) {
  if (!education) return null

  return (
    <section id="education" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="section-title mb-4">Education</h2>

        <p className="section-subtitle mb-14">My academic foundation in cybersecurity and computer science.</p>

        <div className="max-w-3xl mx-auto">
          <Card className="section-card relative overflow-hidden p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-border group-hover:scale-105 transition duration-500 shrink-0">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground tracking-wide">{education.degree}</h3>
                  <p className="text-muted-foreground mt-1 text-lg">{education.university}</p>
                  <p className="text-sm text-muted-foreground/80 mt-1">{education.year}</p>
                </div>

                {education.coursework && education.coursework.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course) => (
                        <span key={course} className="px-3 py-1.5 bg-muted text-foreground border border-border rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

