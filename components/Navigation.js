'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"

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
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll to update navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section
      const sections = navItems.map(item => item.href.slice(1))
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
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <button
              onClick={scrollToTop}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {name}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-sm font-medium transition-colors relative py-2",
                      activeSection === item.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative overflow-hidden"
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border bg-background/95 backdrop-blur-lg",
            mobileMenuOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "block w-full text-left px-4 py-2 rounded-lg transition-colors",
                  activeSection === item.href.slice(1)
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
    </>
  )
}
