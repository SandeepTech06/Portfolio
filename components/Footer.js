import { Github, Linkedin, Mail, Heart, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer({ personal, social }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/80 border-t border-border py-12 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-foreground">{personal.name}</h3>
              <p className="text-muted-foreground text-sm">{personal.shortIntro}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#education" className="text-sm text-muted-foreground hover:text-primary transition-colors">Education</a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#ctf" className="text-sm text-muted-foreground hover:text-primary transition-colors">CTF & Labs</a>
                <a href="#certificates" className="text-sm text-muted-foreground hover:text-primary transition-colors">Certificates</a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" asChild>
                  <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                {social.twitter && (
                  <Button size="icon" variant="ghost" asChild>
                    <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                <Button size="icon" variant="ghost" asChild>
                  <a href={`mailto:${personal.email}`} aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} {personal.name}. Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

