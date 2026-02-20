"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"
import { getGsap } from "@/lib/gsap"
import { GlitchText } from "@/components/GlitchText"

export function EducationSection({ education }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-gsap='edu-heading']",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "[data-gsap='edu-heading']",
            start: "top 86%",
            once: true,
          },
        }
      )

      gsap.fromTo(
        "[data-gsap='edu-card']",
        { autoAlpha: 0, x: -48, rotate: -1.5, scale: 0.94 },
        {
          autoAlpha: 1,
          x: 0,
          rotate: 0,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          onComplete: () => {
            gsap
              .timeline()
              .to("[data-gsap='edu-card']", { scale: 1.085, duration: 0.18, ease: "back.out(2.2)" })
              .to("[data-gsap='edu-card']", { scale: 0.986, duration: 0.12, ease: "power2.inOut" })
              .to("[data-gsap='edu-card']", { scale: 1, duration: 0.12, ease: "power2.out" })
          },
          scrollTrigger: {
            trigger: "[data-gsap='edu-card']",
            start: "top 82%",
            once: true,
          },
        }
      )

      gsap.fromTo(
        "[data-gsap='edu-icon']",
        { scale: 0.6, autoAlpha: 0, rotate: -18 },
        {
          scale: 1,
          autoAlpha: 1,
          rotate: 0,
          duration: 0.6,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: "[data-gsap='edu-card']",
            start: "top 82%",
            once: true,
          },
        }
      )

      // Stagger coursework chips
      const chips = gsap.utils.toArray("[data-gsap='edu-chip']")
      chips.forEach((chip, idx) => {
        gsap.fromTo(
          chip,
          { autoAlpha: 0, y: 10, scale: 0.85 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            delay: idx * 0.06,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: chip,
              start: "top 92%",
              once: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  if (!education) return null

  return (
    <section ref={sectionRef} id="education" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div data-gsap="edu-heading" className="mb-4">
          <GlitchText
            text="Education"
            as="h2"
            className="section-title"
            triggerOnScroll
            duration={0.8}
          />
        </div>

        <p data-gsap="edu-heading" className="section-subtitle mb-14">My academic foundation in cybersecurity and computer science.</p>

        <div className="max-w-3xl mx-auto">
          <Card data-gsap="edu-card" className="section-card relative overflow-hidden p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group cyber-scanline">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
              <div data-gsap="edu-icon" className="p-4 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-border group-hover:scale-105 group-hover:shadow-[0_0_16px_hsl(var(--primary)/0.3)] transition-all duration-500 shrink-0">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground tracking-wide">{education.degree}</h3>
                  <p className="text-muted-foreground mt-1 text-lg">{education.university}</p>
                  <p className="text-sm text-muted-foreground/80 mt-1 font-mono">{education.year}</p>
                </div>

                {education.coursework && education.coursework.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary uppercase tracking-wider font-mono">Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course) => (
                        <span key={course} data-gsap="edu-chip" className="px-3 py-1.5 bg-muted text-foreground border border-border rounded-full text-sm hover:border-primary/40 hover:shadow-[0_0_8px_hsl(var(--primary)/0.15)] transition-all">
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
