"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold mt-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600">
              Hi there! I'm{""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ameerah Moos",
                1500,
                "A Full-stack Web Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 bg-gradient-to-br from-secondary-500 to-primary-500 text-white border mt-3">
              <a
                href="/AmeerahMoos-FullstackWebDev-CV.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile-pic.jpg"
              alt="profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
