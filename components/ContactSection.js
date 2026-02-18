"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection({ personal }) {
  return (
    <section id="contact" className="py-24">
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <h2 className="section-title mb-4">Get In Touch</h2>

        <p className="section-subtitle mb-12">Have a project idea or opportunity? Let&apos;s connect.</p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <Card className="section-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Info</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">{personal.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">{personal.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">{personal.location}</span>
              </div>
            </div>
          </Card>

          <Card className="section-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send Message</h3>

            <form className="space-y-5">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea rows={4} placeholder="Your Message" />

              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

