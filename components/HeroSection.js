'use client'

import { useEffect, useRef } from "react"
import TypingText from "@/components/TypingText"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Twitter, FileDown } from "lucide-react"
import { getGsap } from "@/lib/gsap"
import { GlitchText } from "@/components/GlitchText"
import { MatrixRain } from "@/components/MatrixRain"

export function HeroSection({ personal, social }) {
  const sectionRef = useRef(null)
  const blobLeftRef = useRef(null)
  const blobRightRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Flicker-in badge like a terminal boot
      tl.fromTo(
        "[data-gsap='hero-badge']",
        { autoAlpha: 0, scale: 0.9, filter: "blur(8px)" },
        {
          autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.3,
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
          { autoAlpha: 0, y: 22, filter: "blur(10px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.85 },
          "-=0.1"
        )
        .fromTo(
          "[data-gsap='hero-subtitle']",
          { autoAlpha: 0, x: -28 },
          { autoAlpha: 1, x: 0, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          "[data-gsap='hero-desc']",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          "[data-gsap='hero-role']",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          "[data-gsap='hero-cta']",
          { autoAlpha: 0, y: 24, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.65 },
          "-=0.28"
        )
        .fromTo(
          "[data-gsap='hero-social']",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08 },
          "-=0.3"
        )

      // Floating neon blobs
      gsap.to(blobLeftRef.current, {
        y: -24,
        x: 18,
        duration: 4.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(blobRightRef.current, {
        y: 22,
        x: -22,
        duration: 5.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      // Rotating cyber ring
      gsap.to(ringRef.current, {
        rotate: 360,
        duration: 26,
        ease: "none",
        repeat: -1,
      })
    }, sectionRef)

    const onMove = (event) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const dx = (event.clientX - centerX) / centerX
      const dy = (event.clientY - centerY) / centerY
      const { gsap } = getGsap()

      gsap.to(blobLeftRef.current, {
        xPercent: dx * 5,
        yPercent: dy * 5,
        duration: 0.45,
        ease: "power2.out",
      })

      gsap.to(blobRightRef.current, {
        xPercent: dx * -5,
        yPercent: dy * -5,
        duration: 0.45,
        ease: "power2.out",
      })
    }

    window.addEventListener("pointermove", onMove)

    return () => {
      window.removeEventListener("pointermove", onMove)
      ctx.revert()
    }
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain className="z-0" />

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div ref={blobLeftRef} className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div ref={blobRightRef} className="absolute right-[-100px] top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div
          ref={ringRef}
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 opacity-30"
        />
      </div>

      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 cyber-scanline z-[1]" />

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
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
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
