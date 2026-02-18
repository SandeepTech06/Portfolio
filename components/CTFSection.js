"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, ExternalLink, Flag } from "lucide-react"

export function CTFSection({ ctfProfiles }) {
    if (!ctfProfiles || ctfProfiles.length === 0) return null

    return (
        <section id="ctf" className="relative py-28 bg-transparent">
            <div className="relative z-10 container mx-auto px-4">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                    CTF & Hands-on Labs
                </h2>

                <p className="text-accent/80 text-center mb-14 max-w-2xl mx-auto">
                    Learning-by-doing — my active profiles on cybersecurity training platforms.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {ctfProfiles.map((profile, index) => (
                        <Card
                            key={profile.platform}
                            className="relative overflow-hidden p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(34,211,238,0.18)] group"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"></div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                {/* Icon */}
                                <div className={`p-4 rounded-full bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-primary/5' : 'from-accent/20 to-accent/5'} group-hover:scale-110 group-hover:rotate-6 transition duration-500`}>
                                    {index % 2 === 0 ? (
                                        <Flag className="h-8 w-8 text-primary" />
                                    ) : (
                                        <Trophy className="h-8 w-8 text-accent" />
                                    )}
                                </div>

                                {/* Platform Name */}
                                <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-accent transition duration-300">
                                    {profile.platform}
                                </h3>

                                {/* Username */}
                                <p className="text-sm text-accent/70 font-mono">
                                    @{profile.username}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-accent/80 leading-relaxed">
                                    {profile.description}
                                </p>

                                {/* View Profile Button */}
                                <Button
                                    size="sm"
                                    variant="outline"
                                    asChild
                                    className="mt-2 bg-white/5 border-white/20 text-white hover:bg-white/10 transition"
                                >
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
