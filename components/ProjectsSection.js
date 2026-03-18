"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { getGsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"
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
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            delay: index * 0.06,
            ease: "power3.out",
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
            duration: 0.3,
            delay: idx * 0.02,
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

    return () => {
      ctx.revert()
    }
  }, [])

  if (!projects || projects.length === 0) return null
  const fixedPhishGuardStack = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "Browsing API",
    "VirusTotal API",
    "WhoisXML API",
  ]

  const statusClassName = (status) => {
    const value = String(status || "").toLowerCase()
    if (value.includes("live")) {
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
    }
    if (value.includes("code")) {
      return "bg-sky-500/10 text-sky-400 border-sky-500/30"
    }
    if (value.includes("development")) {
      return "bg-amber-500/10 text-amber-400 border-amber-500/30"
    }
    return "bg-primary/10 text-primary border-primary/30"
  }

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

        <p data-gsap="projects" className="section-subtitle mb-10">
          Real-world projects showcasing my skills in cybersecurity and software development.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1600px] mx-auto">
          {projects.map((project, index) => {
            const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== "#")
            const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl !== "#")
            const isPhishGuardTile = project.title?.toLowerCase().includes("phishguard")
            const displayTags = isPhishGuardTile ? fixedPhishGuardStack : (project.tags || [])

            return (
              <Card
                key={project.title}
                data-gsap="projects"
                className="section-card p-6 md:p-7 relative w-full max-w-3xl justify-self-center overflow-hidden rounded-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group cyber-grid-bg"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>

                <div className="relative z-10 flex h-full flex-col md:flex-row items-start gap-6">
                  <div className="relative h-32 w-full md:w-40 md:h-32 shrink-0 overflow-hidden rounded-xl border border-border/80 bg-muted/40">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 160px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent"></div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 h-full">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md border border-border bg-muted text-[11px] font-mono text-muted-foreground">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-wide">{project.title}</h3>
                        {project.status && (
                          <span
                            className={cn(
                              "px-3 py-1.5 border rounded-full text-sm whitespace-nowrap",
                              statusClassName(project.status)
                            )}
                          >
                            {project.status}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div
                      className={cn(
                        "mt-auto pb-1",
                        isPhishGuardTile
                          ? ""
                          : "overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                      )}
                    >
                      <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/75 font-mono">
                        Tech Stack
                      </p>
                      <div
                        className={cn(
                          "flex flex-nowrap items-center whitespace-nowrap",
                          isPhishGuardTile ? "gap-1" : "gap-1.5"
                        )}
                      >
                        {displayTags.map((tag) => (
                          <span
                            key={tag}
                            data-gsap="project-badge"
                            className={cn(
                              "shrink-0 bg-muted text-foreground border border-border rounded-full hover:border-primary/40 hover:shadow-[0_0_8px_hsl(var(--primary)/0.15)] transition-all",
                              isPhishGuardTile ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {hasLiveUrl ? (
                        <Button size="sm" asChild className="min-w-[120px]">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" disabled className="min-w-[120px] opacity-70">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo Soon
                        </Button>
                      )}

                      {!isPhishGuardTile && (
                        hasGithubUrl ? (
                          <Button size="sm" variant="outline" asChild className="min-w-[120px] hover:shadow-[0_0_10px_hsl(var(--primary)/0.2)]">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled className="min-w-[120px] opacity-70">
                            <Github className="mr-2 h-4 w-4" />
                            Code Soon
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
