'use client'

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Shield, Search, Terminal, Wrench, Globe, Layout, Briefcase } from "lucide-react"
import { getGsap } from "@/lib/gsap"
import { GlitchText } from "@/components/GlitchText"

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
  const sectionRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray("[data-gsap='skills']")
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 26, scale: 0.92 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            delay: index * 0.06,
            ease: "power3.out",
            onComplete: () => {
              // Flicker effect before settling
              gsap
                .timeline()
                .to(item, { opacity: 0.3, duration: 0.05 })
                .to(item, { opacity: 1, duration: 0.05 })
                .to(item, { opacity: 0.5, duration: 0.05 })
                .to(item, { opacity: 1, duration: 0.05 })
                .to(item, { scale: 1.09, duration: 0.18, ease: "back.out(2.2)" })
                .to(item, { scale: 0.985, duration: 0.12, ease: "power2.inOut" })
                .to(item, { scale: 1, duration: 0.12, ease: "power2.out" })
            },
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="relative py-24">
      <div className="relative z-10 container mx-auto px-4">
        <div data-gsap="skills" className="mb-4">
          <GlitchText
            text="Skills & Expertise"
            as="h2"
            className="section-title"
            triggerOnScroll
            duration={1}
          />
        </div>
        <p data-gsap="skills" className="section-subtitle mb-12">Tools and technologies I use to build secure and efficient systems.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2
            const iconClass = index % 2 === 0 ? "text-primary" : "text-accent"

            return (
              <Card
                key={skill.title}
                data-gsap="skills"
                className="section-card p-6 relative overflow-hidden rounded-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group cyber-grid-bg"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
                <div className="relative flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-border group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_14px_hsl(var(--primary)/0.3)] transition-all duration-500">
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
