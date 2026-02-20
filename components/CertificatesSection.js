"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"
import { getGsap } from "@/lib/gsap"
import { attachCardTilt } from "@/lib/cardTilt"
import { GlitchText } from "@/components/GlitchText"

export function CertificatesSection({ certificates }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-gsap='cert-heading']",
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "[data-gsap='cert-heading']",
            start: "top 86%",
            once: true,
          },
        }
      )

      const cards = gsap.utils.toArray("[data-gsap='cert-card']")
      cards.forEach((card, index) => {
        const fromX = index % 2 === 0 ? -46 : 46
        gsap.fromTo(
          card,
          { autoAlpha: 0, x: fromX, y: 16, scale: 0.93 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            onComplete: () => {
              // "Verified" stamp animation — scale bounce + sweep
              card.classList.add("cyber-sweep", "sweep-active")
              gsap
                .timeline()
                .to(card, { scale: 1.08, duration: 0.18, ease: "back.out(2.2)" })
                .to(card, { scale: 0.987, duration: 0.12, ease: "power2.inOut" })
                .to(card, { scale: 1, duration: 0.12, ease: "power2.out" })

              // Icon green glow burst
              const icon = card.querySelector("[data-gsap='cert-icon']")
              if (icon) {
                gsap.fromTo(
                  icon,
                  { scale: 0.8, rotate: -20 },
                  { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(2)" }
                )
              }
            },
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        )
      })
    }, sectionRef)

    const detachTilt = attachCardTilt(sectionRef.current)

    return () => {
      detachTilt()
      ctx.revert()
    }
  }, [])

  if (!certificates || certificates.length === 0) return null

  return (
    <section ref={sectionRef} id="certificates" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div data-gsap="cert-heading" className="mb-4">
          <GlitchText
            text="Certificates & Achievements"
            as="h2"
            className="section-title"
            triggerOnScroll
            duration={1.2}
          />
        </div>

        <p data-gsap="cert-heading" className="section-subtitle mb-14">Certifications and milestones that showcase my learning journey.</p>

        <div className="max-w-4xl mx-auto space-y-6">
          {certificates.map((cert, index) => (
            <Card
              key={`${cert.title}-${index}`}
              data-gsap="cert-card"
              data-tilt-card
              className="relative overflow-hidden p-6 rounded-2xl section-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

              <div className="relative z-10 flex items-start gap-5">
                <div data-gsap="cert-icon" className="p-3 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-border group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_14px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <Award className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground tracking-wide">{cert.title}</h3>
                  <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground/80 mt-1 font-mono">{cert.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
