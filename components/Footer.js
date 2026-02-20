'use client'

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Heart, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getGsap } from "@/lib/gsap"

export function Footer({ personal, social }) {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray("[data-gsap='footer']")
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              once: true,
            },
          }
        )
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-card/80 border-t border-primary/15 py-12 backdrop-blur-sm cyber-scanline">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div data-gsap="footer">
              <h3 className="font-bold text-xl mb-4 text-foreground font-mono">
                <span className="text-primary/60">&gt;</span> {personal.name}
              </h3>
              <p className="text-muted-foreground text-sm">{personal.shortIntro}</p>
            </div>

            <div data-gsap="footer">
              <h4 className="font-semibold mb-4 text-foreground font-mono">
                <span className="text-primary/60">~/</span>Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">About</a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Skills</a>
                <a href="#education" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Education</a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Projects</a>
                <a href="#ctf" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">CTF & Labs</a>
                <a href="#certificates" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Certificates</a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Contact</a>
              </nav>
            </div>

            <div data-gsap="footer">
              <h4 className="font-semibold mb-4 text-foreground font-mono">
                <span className="text-primary/60">~/</span>Connect
              </h4>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="border-primary/30 bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_10px_hsl(var(--primary)/0.25)] transition-all" asChild>
                  <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_10px_hsl(var(--primary)/0.25)] transition-all" asChild>
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                {social.twitter && (
                  <Button size="icon" variant="outline" className="border-primary/30 bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_10px_hsl(var(--primary)/0.25)] transition-all" asChild>
                    <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                <Button size="icon" variant="outline" className="border-primary/30 bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_10px_hsl(var(--primary)/0.25)] transition-all" asChild>
                  <a href={`mailto:${personal.email}`} aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div data-gsap="footer" className="pt-8 border-t border-primary/15 text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1 font-mono">
              © {currentYear} {personal.name} 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
