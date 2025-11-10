import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { BackToTop } from "@/components/BackToTop";
import { getPortfolioData, type PortfolioData } from "@/lib/portfolio";

const Index = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const portfolioData = await getPortfolioData();
        setData(portfolioData);
      } catch (err) {
        setError("Failed to load portfolio data. Please check your portfolio-data.json file.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-destructive mb-4">Error</h1>
          <p className="text-muted-foreground">{error || "Failed to load portfolio data"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation name={data.personal.name} />
      <HeroSection personal={data.personal} social={data.social} />
      <AboutSection personal={data.personal} />
      <SkillsSection skills={data.skills} />
      <ProjectsSection projects={data.projects} />
      <CertificatesSection certificates={data.certificates} />
      <ContactSection personal={data.personal} />
      <Footer personal={data.personal} social={data.social} />
      <BackToTop />
    </div>
  );
};

export default Index;
