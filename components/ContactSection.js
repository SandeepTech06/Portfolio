"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection({ personal }) {

  return (
    <section id="contact" className="py-24 bg-transparent">

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white tracking-tight">
          Get In Touch
        </h2>

        <p className="text-accent/80 text-center mb-12 max-w-2xl mx-auto">
          Have a project idea or opportunity? Let’s connect.
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

          {/* Contact Info */}
          <Card className="p-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1">

            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <span className="text-accent/80">{personal.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <span className="text-accent/80">{personal.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <span className="text-accent/80">{personal.location}</span>
              </div>

            </div>

          </Card>

          {/* Contact Form */}
          <Card className="p-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1">

            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-accent/50 focus:outline-none focus:border-accent/30 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-accent/50 focus:outline-none focus:border-accent/30 transition"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-accent/50 focus:outline-none focus:border-accent/30 transition"
              />

              <Button className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
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
