"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { getGsap } from "@/lib/gsap"
import { GlitchText } from "@/components/GlitchText"

export function ProjectsSection({ projects }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray("[data-gsap='projects']")
      revealItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 28, scale: 0.93, rotateY: -8 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.9,
            delay: index * 0.08,
            ease: "power3.out",
            transformPerspective: 1200,
            onComplete: () => {
              gsap
                .timeline()
                .to(item, { opacity: 0.4, duration: 0.04 })
                .to(item, { opacity: 1, duration: 0.04 })
                .to(item, { scale: 1.08, duration: 0.18, ease: "back.out(2.2)" })
                .to(item, { scale: 0.987, duration: 0.12, ease: "power2.inOut" })
                .to(item, { scale: 1, duration: 0.12, ease: "power2.out" })
            },
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
              once: true,
            },
          }
        )
      })

      // Stagger tech badges after cards appear
      const badges = gsap.utils.toArray("[data-gsap='project-badge']")
      badges.forEach((badge, idx) => {
        gsap.fromTo(
          badge,
          { autoAlpha: 0, y: 8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            delay: idx * 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: badge,
              start: "top 92%",
              once: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div data-gsap="projects" className="mb-4">
          <GlitchText
            text="Featured Projects"
            as="h2"
            className="section-title"
            triggerOnScroll
            duration={1}
          />
        </div>

        <p data-gsap="projects" className="section-subtitle mb-14">
          Real-world projects showcasing my skills in cybersecurity and development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              data-gsap="projects"
              className="group relative overflow-hidden rounded-2xl section-card transform transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>

              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
                {/* Glitch flicker overlay on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-flicker transition-opacity pointer-events-none"></div>
              </div>

              <CardHeader className="pb-2 relative">
                <CardTitle className="text-foreground tracking-wide">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-snug text-sm">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-2 pb-3 relative">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} data-gsap="project-badge" variant="secondary" className="border border-border hover:border-primary/40 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 pt-2 relative">
                <Button size="sm" variant="outline" asChild className="flex-1 hover:shadow-[0_0_10px_hsl(var(--primary)/0.2)]">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>

                <Button size="sm" variant="outline" asChild className="flex-1 hover:shadow-[0_0_10px_hsl(var(--primary)/0.2)]">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
