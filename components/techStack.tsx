import { techStack } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";
import StarRating from "./ui/starRating";
import { BackgroundGradientAnimation } from "./ui/background-gradient";
import { Spotlight } from "./ui/spotlight";

function TechStack() {
  return (
    <div
      className="py-20 px-10 lg:px-20 md:px-20 bg-black-100 relative bg-grid-pattern bg-cover bg-center bg-no-repeat"
      id="techStack"
    >
      <Spotlight className="left-0 md:left-60" fill="cyan" />

      <h1 className="font-bold text-4xl md:text-5xl text-center mb-4">
        My <span className="text-purple-400">TechStack</span>
      </h1>

      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 grid-cols-3 lg:mx-40">
        {techStack.map((card) => (
          <Button
            containerClassName="h-32"
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex flex-col items-center p-3 py-6 md:p-5 lg:p-10">
              <img
                src={card.image}
                alt={card.image}
                className="lg:w-32 md:w-12 w-8 h-12"
              />
              <p className="text-xs md:mt-2">{card.name}</p>
              <StarRating rating={card.rating} />{" "}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
