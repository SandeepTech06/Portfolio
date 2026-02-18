"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="section-title mb-4">Featured Projects</h2>

        <p className="section-subtitle mb-14">
          Real-world projects showcasing my skills in cybersecurity and development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden rounded-2xl section-card transform transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>

              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
              </div>

              <CardHeader className="pb-2 relative">
                <CardTitle className="text-foreground tracking-wide">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-snug text-sm">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-2 pb-3 relative">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="border border-border">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 pt-2 relative">
                <Button size="sm" variant="outline" asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>

                <Button size="sm" variant="outline" asChild className="flex-1">
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

