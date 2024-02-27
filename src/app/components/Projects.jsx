"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Job Portal",
    description:
      "This MERN full-stack application seamlessly integrates Express for the backend, React for the frontend, and MongoDB for the database. Regular users can register accounts, sign in, and browse jobs posted by admin users. The platform provides intuitive filtering options for jobs based on keywords, location, and category. Users have the capability to apply for jobs, access their personalized dashboard, review job history, and view their profiles. Admin users, upon signing in, gain access to a comprehensive dashboard where they can oversee all current users, jobs, and categories. Admins are able to create and delete jobs and categories, manage users, and perform edits on any job listings.",
    image: "/images/projects/job-portal-1.jpg",
    tag: ["All", "React", "Express", "MongoDB"],
    gitUrl: "https://github.com/Ameerah1410/job-portal1",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "This application was built using React, a weather API and styled with Tailwind CSS. The app shows hourly and daily forecasts for mutiple locations. Users are able to search for any city or get the weather for their current location",
    image: "/images/projects/weather-app-1.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Ameerah1410/weather-app-react",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Hiking Website",
    description:
      "This website provides information on Cape Town's hiking trails, built with HTML and styled using CSS. Users can save trails for later, leave comments and express their liking for each trail.",
    image: "/images/projects/hiking-website-1.jpg",
    tag: ["All", "HTML"],
    gitUrl: "https://github.com/Ameerah1410/hiking-website",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Todo with Authentication",
    description:
      "This is a fullstack MERN basic to-do application developed using React for the frontend, Express for the backend and MongoDB for the database. Users have the ability to add, edit, and delete tasks. Authentication is implemented through JWT tokens, with additional middleware for user registration, sign-in, and task protection.",
    image: "/images/projects/todo-auth-3.jpg",
    tag: ["All", "React", "Express", "MongoDB"],
    gitUrl: "https://github.com/Ameerah1410/todo-jwt-authentication",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Hangman App",
    description:
      "This is a simple Hangman game built using React. The game prompts the player to guess the name of a country within a limited number of attempts.",
    image: "/images/projects/hangman-2.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Ameerah1410/hangman-react-app",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Car Inventory App",
    description:
      "This MERN full-stack application enables users to add, delete, update one or many cars from the inventory. They are also able to view all the cars that are older than five years.",
    image: "/images/projects/car-inventory-1.jpg",
    tag: ["All", "React", "Express", "MongoDB"],
    gitUrl: "https://github.com/Ameerah1410/car-inventory-app",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "iTunes Search App",
    description:
      "This fullstack app combines Express for the backend and React for the frontend to allow users to search for content within the iTunes and Apple Bookstore. Users can also add their favorite items to a list.",
    image: "/images/projects/itunes-search-app-1.jpg",
    tag: ["All", "React", "Express"],
    gitUrl: "https://github.com/Ameerah1410/itunes-search-app",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Starwars Movie App",
    description:
      "This application was built using Next.js and a Star Wars API. It displays information for all the Star Wars Movies.",
    image: "/images/projects/starwars-1.jpg",
    tag: ["All", "Next"],
    gitUrl: "https://github.com/Ameerah1410/starwars-api",
  },
  {
    id: 9,
    title: "My Portfolio",
    description:
      "This application was built using Next.js and styled with Tailwind CSS.",
    image: "/images/projects/portfolio-1.jpg",
    tag: ["All", "Next"],
    gitUrl: "https://github.com/Ameerah1410/my-portfolio-website",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next"
          isSelected={tag === "Next"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Express"
          isSelected={tag === "Express"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HTML"
          isSelected={tag === "HTML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MongoDB"
          isSelected={tag === "MongoDB"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
