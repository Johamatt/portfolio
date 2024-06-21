import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { FlipWords } from "./ui/flip-words";
import { AuroraBackground } from "./ui/aurora-background";
import { BackgroundBeams } from "./ui/background-beams";

const Hero = () => {
  return (
    <div>
      <AuroraBackground>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[80w] flex flex-col items-center justify-center">
            <TextGenerateEffect
              className="text-center text-[40px]"
              words="Eager to learn and grow in"
            />

            <FlipWords words={["Web-Development", "Dev-ops"]} duration={3000} />

            <p className="text-center mb-4 text-md md:text-lg lg:text-2xl text-white-100">
              Hi, I&apos;m Johannes, Full-stack Developer from Helsinki Finland
            </p>

            <a href="about">
              <ShimmerButton buttonText="Show my work" />
            </a>
          </div>
        </div>
      </AuroraBackground>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;