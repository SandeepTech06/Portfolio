"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, ExternalLink, Flag } from "lucide-react"

export function CTFSection({ ctfProfiles }) {
  if (!ctfProfiles || ctfProfiles.length === 0) return null

  return (
    <section id="ctf" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="section-title mb-4">CTF & Hands-on Labs</h2>

        <p className="section-subtitle mb-14">
          Learning-by-doing, my active profiles on cybersecurity training platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ctfProfiles.map((profile, index) => (
            <Card
              key={profile.platform}
              className="relative overflow-hidden p-6 rounded-2xl section-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-border group-hover:scale-105 transition duration-500">
                  {index % 2 === 0 ? <Flag className="h-8 w-8 text-primary" /> : <Trophy className="h-8 w-8 text-accent" />}
                </div>

                <h3 className="text-xl font-semibold text-foreground tracking-wide">{profile.platform}</h3>

                <p className="text-sm text-muted-foreground font-mono">@{profile.username}</p>

                <p className="text-sm text-muted-foreground leading-relaxed">{profile.description}</p>

                <Button size="sm" variant="outline" asChild className="mt-2">
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

