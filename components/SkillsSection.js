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
    <section id="skills" className="relative py-24 bg-transparent">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">Skills & Expertise</h2>
        <p className="text-accent/80 text-center mb-12 max-w-2xl mx-auto">
          Tools and technologies I use to build secure and efficient systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2
            const colorClass = index % 2 === 0 ? "text-primary" : "text-accent"
            
            return (
              <Card
                key={skill.title}
                className="p-6 relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[0_12px_30px_rgba(34,211,238,0.18)] group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${colorClass === 'text-primary' ? 'from-primary/20 to-primary/5' : 'from-accent/20 to-accent/5'} group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] transition duration-500`}>
                    <Icon className={`h-9 w-9 ${colorClass} transition-transform duration-500`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-accent transition duration-300">{skill.title}</h3>
                  <p className="text-sm text-accent/90 leading-relaxed">{skill.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
