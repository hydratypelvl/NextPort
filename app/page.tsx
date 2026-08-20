import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import JourneySection from "@/components/sections/journey-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";
import NavbarSection from "@/components/sections/navbar-section";

export default function Home() {
  return (
      <header>
          <NavbarSection />
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
          <FooterSection />
      </header>
  );
}
