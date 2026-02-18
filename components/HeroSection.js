'use client'

import TypingText from "@/components/TypingText"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Twitter, FileDown } from "lucide-react"

export function HeroSection({ personal, social }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-100px] top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
            Open to cybersecurity opportunities
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Hi, I&apos;m <span className="text-primary glow-pulse">{personal.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90 tracking-wide">
            <TypingText text="Security Analyst in Training" speed={60} />
          </h2>

          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {personal.shortIntro}
          </p>

          <p className="text-xl md:text-2xl mb-8 text-accent font-medium tracking-wide">
            {personal.title}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" onClick={() => scrollToSection("projects")}>View My Work</Button>

            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>

            <Button size="lg" variant="secondary" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-3 justify-center">
            <Button size="icon" variant="outline" asChild>
              <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            {social.twitter && (
              <Button size="icon" variant="outline" asChild>
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

