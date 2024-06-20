import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div>
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <AuroraBackground>
          <Hero />
        </AuroraBackground>

        <div className="mb-72">
          <p>test float</p>
        </div>
      </div>
    </main>
  );
}
