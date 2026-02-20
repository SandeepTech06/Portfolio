"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { getGsap } from "@/lib/gsap"
import { GlitchText } from "@/components/GlitchText"

export function ContactSection({ personal }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray("[data-gsap='contact']")
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        )
      })

      // Terminal-style sequential form field reveal
      const formFields = gsap.utils.toArray("[data-gsap='contact-field']")
      formFields.forEach((field, idx) => {
        gsap.fromTo(
          field,
          { autoAlpha: 0, x: -20 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            delay: idx * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: field,
              start: "top 92%",
              once: true,
            },
          }
        )
      })

      // Contact info items slide in from left
      const infoItems = gsap.utils.toArray("[data-gsap='contact-info']")
      infoItems.forEach((item, idx) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, x: -30 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            delay: idx * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              once: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-24">
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div data-gsap="contact" className="mb-4">
          <GlitchText
            text="Get In Touch"
            as="h2"
            className="section-title"
            triggerOnScroll
            duration={1}
          />
        </div>

        <p data-gsap="contact" className="section-subtitle mb-12">Have a project idea or opportunity? Let&apos;s connect.</p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <Card data-gsap="contact" className="section-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 cyber-scanline">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-mono">
              <span className="text-primary/60">~/</span>Contact Info
            </h3>

            <div className="space-y-5">
              <div data-gsap="contact-info" className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground font-mono text-sm">{personal.email}</span>
              </div>

              <div data-gsap="contact-info" className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground font-mono text-sm">{personal.phone}</span>
              </div>

              <div data-gsap="contact-info" className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground font-mono text-sm">{personal.location}</span>
              </div>
            </div>
          </Card>

          <Card data-gsap="contact" className="section-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-mono">
              <span className="text-primary/60">&gt;</span> Send Message
            </h3>

            <form className="space-y-5">
              <div data-gsap="contact-field">
                <Input type="text" placeholder="your_name" className="font-mono" />
              </div>
              <div data-gsap="contact-field">
                <Input type="email" placeholder="your_email" className="font-mono" />
              </div>
              <div data-gsap="contact-field">
                <Textarea rows={4} placeholder="your_message" className="font-mono" />
              </div>

              <div data-gsap="contact-field">
                <Button className="w-full hover:shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition-shadow">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
