"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, ExternalLink, Flag } from "lucide-react"
import { getGsap } from "@/lib/gsap"
import { attachCardTilt } from "@/lib/cardTilt"
import { GlitchText } from "@/components/GlitchText"

export function CTFSection({ ctfProfiles }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-gsap='ctf-heading']",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "[data-gsap='ctf-heading']",
            start: "top 86%",
            once: true,
          },
        }
      )

      const cards = gsap.utils.toArray("[data-gsap='ctf-card']")
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 36, scale: 0.88, rotateX: -10 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.85,
          ease: "power4.out",
          stagger: 0.15,
          transformPerspective: 1000,
          onComplete: () => {
            // Green sweep + popup on each card
            cards.forEach((card, idx) => {
              card.classList.add("cyber-sweep", "sweep-active")
              gsap
                .timeline({ delay: idx * 0.05 + 0.3 })
                .to(card, { scale: 1.09, duration: 0.18, ease: "back.out(2.2)" })
                .to(card, { scale: 0.985, duration: 0.12, ease: "power2.inOut" })
                .to(card, { scale: 1, duration: 0.12, ease: "power2.out" })
            })
          },
          scrollTrigger: {
            trigger: cards[0],
            start: "top 82%",
            once: true,
          },
        }
      )
    }, sectionRef)

    const detachTilt = attachCardTilt(sectionRef.current)

    return () => {
      detachTilt()
      ctx.revert()
    }
  }, [])

  if (!ctfProfiles || ctfProfiles.length === 0) return null

  return (
    <section ref={sectionRef} id="ctf" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div data-gsap="ctf-heading" className="mb-4">
          <GlitchText
            text="CTF & Hands-on Labs"
            as="h2"
            className="section-title"
            triggerOnScroll
            duration={1.2}
          />
        </div>

        <p data-gsap="ctf-heading" className="section-subtitle mb-14">
          Learning-by-doing, my active profiles on cybersecurity training platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ctfProfiles.map((profile, index) => (
            <Card
              key={profile.platform}
              data-gsap="ctf-card"
              data-tilt-card
              className="relative overflow-hidden p-6 rounded-2xl section-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-border group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_16px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  {index % 2 === 0 ? <Flag className="h-8 w-8 text-primary" /> : <Trophy className="h-8 w-8 text-accent" />}
                </div>

                <h3 className="text-xl font-semibold text-foreground tracking-wide">{profile.platform}</h3>

                <p className="text-sm text-muted-foreground font-mono">
                  <span className="text-primary/60">@</span>{profile.username}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">{profile.description}</p>

                <Button size="sm" variant="outline" asChild className="mt-2 hover:shadow-[0_0_10px_hsl(var(--primary)/0.2)]">
                  <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Profile
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
