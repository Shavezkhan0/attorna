import HeroSection from "../Components/HeroSection/page";
import AboutSection from "../Components/AboutSection/AboutSection";
import PracticeAreasSection from "../Components/PracticeAreasSection/PracticeAreasSection";
import StatsSection from "../Components/StatsSection/StatsSection";
import TestimonialsSection from "../Components/TestimonialsSection/TestimonialsSection";
import BlogSection from "../Components/BlogSection/BlogSection";
import ContactSection from "../Components/ContactSection/ContactSection";
import HeroSectionBottom from "../Components/HeroSectionBottom/HeroSectionBottom";
import OurExperience from "../Components/OurExperience/OurExperience";
import CaseStudies from "../Components/CaseStudies/CaseStudies";
import OurTeam from "../Components/OurTeam/OurTeam";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroSectionBottom />
      <OurExperience />
      <StatsSection />
      <AboutSection />
      <OurTeam />
      <PracticeAreasSection />
      <TestimonialsSection />
      <ContactSection />
      <CaseStudies/>
      <BlogSection />
    </>
  );
}
