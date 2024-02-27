"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Next.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Redux</li>
        <li>Bootstrap5</li>
        <li>MongoDB</li>
        <li>Jest</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Fullstack Web Development</li>
        <li>HyperionDev</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 ic py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center items-center">
            About Me
          </h2>
          <p className="text-base lg:text-lg ">
            I recently got into full-stack web development because I'm
            passionate about creating dynamic and adaptable web applications. I
            love picking up new skills and I'm looking for oppoprtunites that
            will help me level up and broaden my skill set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
