import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[80w] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px]"
            words="Eager to learn and grow in Web Development"
          />
          <p className="text-center mb-4 text-md md:text-lg lg:text-2xl text-white-100">
            Hi, I&apos;m Johannes, a passionate Full-stack Developer
          </p>

          <a href="about">
            <ShimmerButton buttonText="Show my work" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
