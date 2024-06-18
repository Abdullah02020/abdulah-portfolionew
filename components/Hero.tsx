import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-[90%] "
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] 
       flex items-center justify-center absolute top-0 left-0"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className=" w-full flex flex-col items-center justify-center">
          <h2 className="u uppercase text-center text-blue-100 max-w-80 tracking-widest text-xs">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="t text-center text-5xl md:w-[80%]  md:text-5xl lg:6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 md:text-lg lg:text-1xl">
            Hi! I’m Abdullah, a Next.js Developer based in Croatia.{" "}
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow className="mt-[1px]" />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
