import HeroSection from "@/components/project-1/hero-section-1";
import Project from "@/components/project-1/project-1";
import Context from "@/components/project-1/context-1";
import Problem from "@/components/project-1/problem";
import Approach1 from "@/components/project-1/approach-1.1";
import Approach2 from "@/components/project-1/approach-1.2";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Project />
      <Context />
      <Problem />
      <Approach1 />
      <Approach2 />

      
    </>
  );
}