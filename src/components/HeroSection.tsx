import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import type { Personal, Social } from "@/lib/portfolio";

interface HeroSectionProps {
  personal: Personal;
  social: Social;
}

export const HeroSection = ({ personal, social }: HeroSectionProps) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-hero-from via-primary to-hero-to">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm <span className="text-accent-foreground drop-shadow-glow">{personal.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {personal.title}
          </p>
          
          <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {personal.shortIntro}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" variant="secondary" onClick={() => scrollToSection("projects")} className="shadow-lg">
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20" asChild>
              <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20" asChild>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            {social.twitter && (
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20" asChild>
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer bg-transparent border-none"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};
