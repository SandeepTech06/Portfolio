"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="relative py-28 bg-transparent">
      <div className="relative z-10 container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">
          Featured Projects
        </h2>

        <p className="text-accent/80 text-center mb-14 max-w-2xl mx-auto">
          Real-world projects showcasing my skills in cybersecurity and development.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 transform transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(34,211,238,0.18)]"
            >

              {/* Soft gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>

              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <CardHeader className="pb-2">
                <CardTitle className="text-white tracking-wide group-hover:text-accent transition duration-300">
                  {project.title}
                </CardTitle>

                <CardDescription className="text-accent/80 leading-snug text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2 pb-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Buttons */}
              <CardFooter className="gap-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10 transition"
                >
                  <a href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10 transition"
                >
                  <a href={project.githubUrl} target="_blank">
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
