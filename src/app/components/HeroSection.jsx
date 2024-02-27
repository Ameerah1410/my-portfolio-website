"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-10 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold mt-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600">
              Hi there! I&apos;m{""}
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
      </div>
    </section>
  );
}

export default HeroSection;
