"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";

import { socialMedia } from "@/data";
import MagicButton from "./ui/magic-button";
import { IoCopyOutline } from "react-icons/io5";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "johamatt94@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] md:mt-10 mb-5 mx-10 lg:text-2xl">
          Feel free to connect with me! You can reach out via{" "}
          <span className="text-purple-300 font-bold">
            LinkedIn, Email, or GitHub.
          </span>
        </h1>

        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((info) => (
            <a
              target="_blank"
              href={info.ref}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center bg-white-50 items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icon" width={30} height={30} />
            </a>
          ))}
        </div>

        <div className="mt-5 lg:mt-0 md:mt-0">
          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31] "
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center"></div>
    </footer>
  );
};

export default Footer;
