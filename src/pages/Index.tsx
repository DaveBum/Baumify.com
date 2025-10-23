import Hero from "../components/Hero";
import TeamSection from "../components/TeamSection";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

const Index = () => {
  useSEO(SEO_CONFIG.home);
  
  return (
    <div className="min-h-screen">
      <Hero />
      <TeamSection />
    </div>
  );
};

export default Index;
