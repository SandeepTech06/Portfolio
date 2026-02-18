import { Card } from "@/components/ui/card"
import { Code2, Shield, Search, Terminal, Wrench, Globe, Layout, Briefcase } from "lucide-react"

const iconMap = {
  Code2,
  Shield,
  Search,
  Terminal,
  Wrench,
  Globe,
  Layout,
  Briefcase,
}

export function SkillsSection({ skills }) {
  return (
    <section id="skills" className="relative py-24">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="section-title mb-4">Skills & Expertise</h2>
        <p className="section-subtitle mb-12">Tools and technologies I use to build secure and efficient systems.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2
            const iconClass = index % 2 === 0 ? "text-primary" : "text-accent"

            return (
              <Card
                key={skill.title}
                className="section-card p-6 relative overflow-hidden rounded-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
                <div className="relative flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-border group-hover:scale-105 transition duration-500">
                    <Icon className={`h-9 w-9 ${iconClass}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground tracking-wide">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

