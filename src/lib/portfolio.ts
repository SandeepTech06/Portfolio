export interface Personal {
  name: string;
  title: string;
  bio: string;
  shortIntro: string;
  email: string;
  phone: string;
  location: string;
  image: string;
}

export interface Social {
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

export interface PortfolioData {
  personal: Personal;
  social: Social;
  skills: Skill[];
  projects: Project[];
  certificates: Certificate[];
}

export async function getPortfolioData(): Promise<PortfolioData> {
  const response = await fetch('/portfolio-data.json');
  if (!response.ok) {
    throw new Error('Failed to load portfolio data');
  }
  return response.json();
}
