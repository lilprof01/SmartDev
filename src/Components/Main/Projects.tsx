import CallToAction from "@/Components/UI/CallToAction";
import { Gradient } from "../UI";
import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface projectProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

const projects: projectProps[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A fully functional e-commerce platform with payment integration.",
    image: "/code.jpg",
    link: "/projects/ecommerce",
    tags: ["eCommerce", "React", "Node.js", "Stripe", "All"],
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek and modern portfolio website for showcasing your work.",
    image: "/code.jpg",
    link: "/projects/portfolio",
    tags: ["Portfolio", "React", "Tailwind CSS", "All"],
  },
  {
    title: "Blog Platform",
    description: "A responsive blog platform with a content management system.",
    image: "/code.jpg",
    link: "/projects/blog",
    tags: ["Blog", "React", "Firebase", "Markdown", "All"],
  },
  {
    title: "Fintech App",
    description:
      "A scalable social media app with real-time chat and notifications.",
    image: "/code.jpg",
    link: "/projects/social",
    tags: ["Fintech", "React", "Node.js", "Firebase", "All"],
  },
  {
    title: " App",
    description:
      "A scalable social media app with real-time chat and notifications.",
    image: "/code.jpg",
    link: "/projects/social",
    tags: ["Fintech", "React", "Node.js", "Firebase", "All"],
  },
  {
    title: "Social Media App",
    description:
      "A scalable social media app with real-time chat and notifications.",
    image: "/code.jpg",
    link: "/projects/social",
    tags: ["Fintech", "React", "Node.js", "Firebase", "All"],
  },
];

const filter = (name: string) => {
  return projects.filter((project) => project.tags?.includes(name));
};
const selector = [
  { name: "All", filter: "All" },
  { name: "Fintech", filter: "Fintech" },
  { name: "eCommerce", filter: "eCommerce" },
  { name: "Blog", filter: "Blog" },
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selected, setSelected] = useState("All");

  const handleSelected = (name: string) => {
    setSelected(name);
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  })

  const fade = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: fade }}
      transition={{ duration: 0.15 }}
      className="mt-20 relative bg-gradient-to-br from-blue-200 to-white dark:from-blue-950 dark:via-black dark:to-black p-8 sm:p-16 transition-all duration-500"
    >
      <Gradient />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-start gap-2 h-full w-full  text-center sm:p-8 max-w-5/6 lg:max-w-4/6 mx-auto select-none">
        <motion.h1
          className="font-bold text-4xl sm:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          Explore{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-blue-700 dark:to-blue-700 bg-clip-text text-transparent hover:text-blue-900 dark:hover:text-blue-900 transition-all duration-500 cursor-pointer">
            Projects
          </span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-xl mt-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover the innovative solutions we've built to help businesses
          thrive.
        </motion.p>
      </div>
      
      {/* Filter Section */}
      <div>
        <ul className="flex justify-center flex-wrap gap-4 p-8">
          {selector.map((item, index) => (
            <li
              key={index}
              onClick={() => {setFilteredProjects(filter(item.filter)); handleSelected(item.name)}}
              className={`px-4 py-2 bg-[white] hover:text-white rounded-full cursor-pointer hover:bg-blue-800 transition-all duration-300 border-2 border-gray-400 z-10 ${selected === item.name ? "bg-blue-800 dark:bg-blue-800 text-white" : "dark:bg-transparent"}`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-blue-300 dark:hover:shadow-blue-600 cursor-pointer transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col text-center justify-between items-center">
              <h3 className="text-xl font-bold group-hover:text-blue-700 dark:group-hover:text-blue-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>
              <a
                href='#'
                className="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to action section for projects */}
      <CallToAction
        title="Have a project in mind?"
        description="Let's discuss your ideas and I'll help bring them to life."
        buttonText="Yes, I'm in"
        buttonLink="/contact"
      />
    </motion.section>
  );
};

export default Projects;
