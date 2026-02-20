'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { getGsap } from "@/lib/gsap"
import { GlitchText } from "@/components/GlitchText"

export function AboutSection({ personal }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray("[data-gsap='about']")
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
          }
        )
      })

      // Sweep animation on the card
      const card = sectionRef.current?.querySelector("[data-gsap='about-card']")
      if (card) {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 40, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
            onComplete: () => {
              card.classList.add("cyber-sweep", "sweep-active")
            },
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          }
        )
      }

      // Stagger the trait badges
      const badges = gsap.utils.toArray("[data-gsap='about-badge']")
      badges.forEach((badge, idx) => {
        gsap.fromTo(
          badge,
          { autoAlpha: 0, scale: 0.8, y: 12 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            delay: idx * 0.1,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: badge,
              start: "top 90%",
              once: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-24">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div data-gsap="about" className="mb-4">
            <GlitchText
              text="About Me"
              as="h2"
              className="section-title"
              triggerOnScroll
              duration={1}
            />
          </div>

          <p data-gsap="about" className="section-subtitle mb-12 text-lg leading-relaxed">
            Get to know more about my background, passion, and goals in cybersecurity.
          </p>

          <Card data-gsap="about-card" className="section-card p-8 relative overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group cyber-scanline">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>

            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">Aspiring Security Analyst</h3>

                <p className="text-muted-foreground text-[17px] leading-relaxed tracking-wide">{personal.bio}</p>

                <p className="text-muted-foreground text-[17px] leading-relaxed tracking-wide">
                  I am continuously learning and building hands-on projects to strengthen my practical knowledge in cybersecurity tools and techniques.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <span data-gsap="about-badge" className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 hover:shadow-[0_0_10px_hsl(var(--primary)/0.3)] transition-shadow">Problem Solver</span>
                  <span data-gsap="about-badge" className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20 hover:shadow-[0_0_10px_hsl(var(--accent)/0.3)] transition-shadow">Team Player</span>
                  <span data-gsap="about-badge" className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 hover:shadow-[0_0_10px_hsl(var(--primary)/0.3)] transition-shadow">Fast Learner</span>
                </div>
              </div>

              <div className="relative flex justify-end md:justify-center">
                <div className="inline-block rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 p-2 transition duration-500 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                  {personal.image && personal.image !== "/placeholder.svg" ? (
                    <Image
                      src={personal.image}
                      alt={personal.name}
                      width={384}
                      height={384}
                      className="w-96 h-96 object-cover object-[35%_35%] rounded-xl"
                    />
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
