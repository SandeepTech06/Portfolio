'use client'

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { getGsap } from "@/lib/gsap"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "CTF", href: "#ctf" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export function Navigation({ name }) {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const navRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // GSAP stagger nav links on mount
  useEffect(() => {
    if (!mounted || !linksRef.current) return
    const { gsap } = getGsap()
    const links = linksRef.current.querySelectorAll('[data-gsap="nav-link"]')
    if (links.length === 0) return

    gsap.fromTo(
      links,
      { autoAlpha: 0, y: -12 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.8,
      }
    )
  }, [mounted])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark = mounted && theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  const scrollToSection = (href) => {
    const id = href.slice(1)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-primary/15 shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_2px_hsl(var(--primary)/0.1)]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={scrollToTop}
              className="text-lg md:text-xl font-semibold text-foreground hover:text-primary transition-colors tracking-wide font-mono"
            >
              <span className="text-primary/70 mr-1">&gt;</span>
              {name}
            </button>

            <div ref={linksRef} className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    data-gsap="nav-link"
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-sm font-medium transition-all relative py-2",
                      activeSection === item.href.slice(1)
                        ? "text-primary"
                        : "text-foreground/85 hover:text-primary"
                    )}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    )}
                  </button>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="relative border-primary/30 bg-primary/10 hover:bg-primary/15 hover:shadow-[0_0_10px_hsl(var(--primary)/0.25)]"
                aria-label="Toggle theme"
              >
                <Sun className={cn("h-5 w-5 transition-all", isDark ? "scale-0 rotate-90" : "scale-100 rotate-0")} />
                <Moon className={cn("absolute h-5 w-5 transition-all", isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90")} />
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative border-primary/30 bg-primary/10 hover:bg-primary/15"
              >
                <Sun className={cn("h-5 w-5 transition-all", isDark ? "scale-0 rotate-90" : "scale-100 rotate-0")} />
                <Moon className={cn("absolute h-5 w-5 transition-all", isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90")} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-primary/15 bg-background/95 backdrop-blur-xl",
            mobileMenuOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "block w-full text-left px-4 py-2 rounded-lg transition-colors font-mono text-sm",
                  activeSection === item.href.slice(1)
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground/85 hover:bg-primary/10 hover:text-primary"
                )}
              >
                <span className="text-primary/50 mr-2">&gt;</span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="h-16" />
    </>
  )
}
