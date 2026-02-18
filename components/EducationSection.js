import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export function EducationSection({ education }) {
    if (!education) return null

    return (
        <section id="education" className="relative py-28 bg-transparent">
            <div className="relative z-10 container mx-auto px-4">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                    Education
                </h2>

                <p className="text-accent/80 text-center mb-14 max-w-2xl mx-auto">
                    My academic foundation in cybersecurity and computer science.
                </p>

                {/* Education Card */}
                <div className="max-w-3xl mx-auto">
                    <Card className="relative overflow-hidden p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(34,211,238,0.18)] group">

                        {/* Hover glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">

                            {/* Icon */}
                            <div className="p-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 group-hover:scale-110 group-hover:rotate-6 transition duration-500 shrink-0">
                                <GraduationCap className="h-8 w-8 text-accent" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white tracking-wide group-hover:text-accent transition duration-300">
                                        {education.degree}
                                    </h3>
                                    <p className="text-accent/80 mt-1 text-lg">{education.university}</p>
                                    <p className="text-sm text-accent/60 mt-1">{education.year}</p>
                                </div>

                                {/* Coursework */}
                                {education.coursework && education.coursework.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <BookOpen className="h-4 w-4 text-accent/70" />
                                            <span className="text-sm font-medium text-accent/70 uppercase tracking-wider">Relevant Coursework</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {education.coursework.map((course) => (
                                                <span
                                                    key={course}
                                                    className="px-3 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm backdrop-blur-sm"
                                                >
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
