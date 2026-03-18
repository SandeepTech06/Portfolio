'use client'

import { useEffect, useRef } from "react"
import TypingText from "@/components/TypingText"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Twitter, FileDown } from "lucide-react"
import { getGsap } from "@/lib/gsap"
import { GlitchText } from "@/components/GlitchText"

export function HeroSection({ personal, social }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

      // Flicker-in badge like a terminal boot
      tl.fromTo(
        "[data-gsap='hero-badge']",
        { autoAlpha: 0, scale: 0.9, filter: "blur(8px)" },
        {
          autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.42,
          onComplete: () => {
            gsap.to("[data-gsap='hero-badge']", {
              keyframes: [
                { opacity: 0.3, duration: 0.05 },
                { opacity: 1, duration: 0.05 },
                { opacity: 0.5, duration: 0.05 },
                { opacity: 1, duration: 0.05 },
              ],
            })
          },
        }
      )
        .fromTo(
          "[data-gsap='hero-title']",
          { autoAlpha: 0, y: 30, filter: "blur(10px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.05 },
          "-=0.1"
        )
        .fromTo(
          "[data-gsap='hero-subtitle']",
          { autoAlpha: 0, x: -28, y: 16 },
          { autoAlpha: 1, x: 0, y: 0, duration: 0.78 },
          "-=0.28"
        )
        .fromTo(
          "[data-gsap='hero-desc']",
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.78 },
          "-=0.32"
        )
        .fromTo(
          "[data-gsap='hero-role']",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.78 },
          "-=0.32"
        )
        .fromTo(
          "[data-gsap='hero-cta']",
          { autoAlpha: 0, y: 30, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.85 },
          "-=0.28"
        )
        .fromTo(
          "[data-gsap='hero-social']",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.1 },
          "-=0.28"
        )
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span data-gsap="hero-badge" className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6 font-mono cyber-border-pulse">
            <span className="mr-2 text-primary/70">&gt;</span>
            system.access.granted
          </span>

          <h1 data-gsap="hero-title" className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
            <span className="text-foreground">Hi, I&apos;m </span>
            <GlitchText
              text={personal.name}
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent glow-pulse"
              duration={1.5}
            />
          </h1>

          <h2 data-gsap="hero-subtitle" className="text-2xl md:text-3xl font-semibold mb-4 text-foreground tracking-wide">
            <TypingText text="Security Analyst in Training" speed={60} />
          </h2>

          <p data-gsap="hero-desc" className="text-lg mb-8 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
            {personal.shortIntro}
          </p>

          <p data-gsap="hero-role" className="text-xl md:text-2xl mb-8 text-primary font-medium tracking-wide neon-flicker">
            {personal.title}
          </p>

          <div data-gsap="hero-cta" className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="shadow-[0_0_28px_hsl(var(--primary)/0.35)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-shadow" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>

            <Button size="lg" variant="outline" className="border-primary/30 bg-primary/10 hover:bg-primary/15 hover:border-primary/50" onClick={() => scrollToSection("contact")}>
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>

            <Button size="lg" variant="secondary" className="bg-secondary/80 border border-border/80 hover:bg-secondary" asChild>
              <a href="/MyCV.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div data-gsap="hero-social" className="flex gap-3 justify-center">
            <Button size="icon" variant="outline" className="border-primary/30 bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] transition-all" asChild>
              <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" className="border-primary/30 bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] transition-all" asChild>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            {social.twitter && (
              <Button size="icon" variant="outline" className="border-primary/30 bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] transition-all" asChild>
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary animate-bounce cursor-pointer bg-transparent border-none"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  )
}
