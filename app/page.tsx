import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import TechStack from "@/components/techStack";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div>
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <div className="flex justify-center">
          <hr className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 h-1 w-[75vh] rounded-lg shadow-lg" />
        </div>
        <TechStack />
        <div className="flex justify-center">
          <hr className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 h-1 w-[75vh] rounded-lg shadow-lg" />
        </div>

        <Projects />
      </div>
    </main>
  );
}
