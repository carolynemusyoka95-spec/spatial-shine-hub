import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodeSection from "@/components/CodeSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <CodeSection />
      <SkillsSection />
      <ResumeSection />
      <Footer />
    </main>
  );
};

export default Index;
