import { Card } from "@/components/ui/card"

export function AboutSection({ personal }) {
  return (
    <section id="about" className="relative py-24">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-4">About Me</h2>

          <p className="section-subtitle mb-12 text-lg leading-relaxed">
            Get to know more about my background, passion, and goals in cybersecurity.
          </p>

          <Card className="section-card p-8 relative overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>

            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">Aspiring Security Analyst</h3>

                <p className="text-muted-foreground text-[17px] leading-relaxed tracking-wide">{personal.bio}</p>

                <p className="text-muted-foreground text-[17px] leading-relaxed tracking-wide">
                  I am continuously learning and building hands-on projects to strengthen my practical knowledge in cybersecurity tools and techniques.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">Problem Solver</span>
                  <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">Team Player</span>
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">Fast Learner</span>
                </div>
              </div>

              <div className="relative flex justify-end md:justify-center">
                <div className="inline-block rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 p-2 transition duration-500">
                  {personal.image && personal.image !== "/placeholder.svg" ? (
                    <img src={personal.image} alt={personal.name} className="w-96 h-96 object-cover object-[35%_35%] rounded-xl" />
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
  )
}

