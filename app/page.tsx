import Grid from "@/components/grid";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div>
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
