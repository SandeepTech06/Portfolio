import { Card } from "@/components/ui/card";
import { Code2, Database, Layout, Palette, Rocket, Zap, Briefcase, Smartphone } from "lucide-react";
import type { Skill } from "@/lib/portfolio";

interface SkillsSectionProps {
  skills: Skill[];
}

const iconMap = {
  Code2,
  Database,
  Layout,
  Palette,
  Rocket,
  Zap,
  Briefcase,
  Smartphone,
};

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap] || Code2;
            const colorClass = index % 2 === 0 ? "text-primary" : "text-accent";
            
            return (
              <Card
                key={skill.title}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${colorClass === 'text-primary' ? 'from-primary/10 to-primary/5' : 'from-accent/10 to-accent/5'} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${colorClass}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
