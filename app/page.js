import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { EducationSection } from "@/components/EducationSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { CTFSection } from "@/components/CTFSection"
import { CertificatesSection } from "@/components/CertificatesSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/BackToTop"
import { getPortfolioData } from "@/lib/portfolio"

export default async function Home() {
  const data = await getPortfolioData()

  return (
    <div className="min-h-screen">
      <Navigation name={data.personal.name} />
      <HeroSection personal={data.personal} social={data.social} />
      <AboutSection personal={data.personal} />
      <SkillsSection skills={data.skills} />
      <EducationSection education={data.education} />
      <ProjectsSection projects={data.projects} />
      <CTFSection ctfProfiles={data.ctfProfiles} />
      <CertificatesSection certificates={data.certificates} />
      <ContactSection personal={data.personal} />
      <Footer personal={data.personal} social={data.social} />
      <BackToTop />
    </div>
  )
}
